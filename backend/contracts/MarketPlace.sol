// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error NftIsNotApproved();
error PleaseSendCorreactPrice();
error YouAreNotOwnerOfNFT();
error NFT_alreadyListed();
error TransferFailed();
error PleaseMakeAllowanceFirst();
error collectionAlreadyExits();

contract MarketPlace is ReentrancyGuard {
    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    event ItemBought(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    event ItemCanceled(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId
    );

    uint256 public ListdItems;
    uint256 public totalAuctionSale;
    address[] public collection;

    // mapping(uint256 => items)public listing;
    mapping(address => mapping(uint256 => items)) public listing;
    mapping(address => mapping(uint256 => MakeOffer)) public makeoffer;
    mapping(address => mapping(uint256 => AuctionDetails))public _auctionDetail;
    mapping (address=> uint256[]) public collectionData;

    struct AuctionDetails {
        address payable seller;
        // Price (in wei) at beginning of auction
        uint256 basePrice;
        // Highest bidder
        address highestBidder;
        // Highest bid (in wei)
        uint256 highestBid;
        // Duration (in seconds) of auction
        uint256 endTime;
        // Time when auction started
        uint256 starTime;
        // To check if the auction has ended
        bool ended;
        bool auction;
    }

    struct items {
        uint256 price;
        address payable seller;
        uint256 startTime;
        uint256 endTime;
        bool cancelListing;
        bool sale;
        bool listed;
    }

    struct MakeOffer {
        uint256 amount;
        address buyer;
        address offerToken;
    }

    //First call Approve function from erc721 then call this function
    function sellItem(
        address _nft,
        uint256 _tokenId,
        uint256 _price,
        uint256 _endTime
    ) public {
        if (listing[_nft][_tokenId].listed == true) {
            revert NFT_alreadyListed();
        }
        if (IERC721(_nft).getApproved(_tokenId) != address(this)) {
            revert NftIsNotApproved();
        }
        ListdItems++;
        listing[_nft][_tokenId] = items(
            _price,
            payable(msg.sender),
            block.timestamp,
            _endTime,
            false,
            false,
            true
        );
        
        bool temp;
        for(uint256 i=0; i<collection.length; i++){
            if(collection[i] == _nft){
                temp = true;
            }
            }
            if(temp == false) {
                collection.push(_nft);
            }
            
            collectionData[_nft].push(_tokenId); 
    
        emit ItemListed(msg.sender, _nft, _tokenId, _price);
    }

    function buyItem(address _nft, uint256 _tokenId) public payable {
        items storage Items = listing[_nft][_tokenId];
        if (msg.value < Items.price) {
            revert PleaseSendCorreactPrice();
        }
        (bool success, ) = payable(Items.seller).call{value: msg.value}("");
        if (!success) {
            revert TransferFailed();
        }
        Items.sale = true;
        Items.listed = false;
        IERC721(_nft).safeTransferFrom(Items.seller, msg.sender, _tokenId);
        delete (listing[_nft][_tokenId]);
        remove(_nft,_tokenId);
        emit ItemBought(msg.sender, _nft, _tokenId, Items.price);
    }

    function cancelListing(address _nft, uint256 _tokenId) public {
        items storage Items = listing[_nft][_tokenId];
        if (msg.sender != Items.seller) {
            revert YouAreNotOwnerOfNFT();
        }
        Items.cancelListing = true;
        Items.listed = false;
        delete (listing[_nft][_tokenId]);
        remove(_nft,_tokenId);
        emit ItemCanceled(Items.seller, _nft, _tokenId);
    }

    ////////////////// MakeOffer /////////////////////////

    //first call approve function of IERC20
    function makeOffer(
        address _nft,
        uint256 _tokenId,
        address _token,
        uint256 _amount
    ) public {
        MakeOffer memory offer = makeoffer[_nft][_tokenId];

        require(offer.amount < _amount, "please increase your offer ");

        require(
            IERC20(_token).balanceOf(msg.sender) >= _amount,
            "you Dont Have Balance"
        );
        uint256 allowance = IERC20(_token).allowance(msg.sender, address(this));
        if (allowance >= _amount) {
            makeoffer[_nft][_tokenId] = MakeOffer(_amount, msg.sender, _token);
        } else {
            revert PleaseMakeAllowanceFirst();
        }
    }

    function getOffer(
        address _nft,
        uint256 _tokenId
    ) public view returns (uint256, address) {
        MakeOffer memory offer = makeoffer[_nft][_tokenId];
        return (offer.amount, offer.buyer);
    }

    function acceptOffer(address _nft, uint256 _tokenId) public {
        items storage Items = listing[_nft][_tokenId];
        MakeOffer memory offer = makeoffer[_nft][_tokenId];
        require(msg.sender == Items.seller, "you are Not owner");
        Items.sale = true;
        Items.listed = false;
        IERC20(offer.offerToken).transferFrom(
            offer.buyer,
            Items.seller,
            offer.amount
        );
        emit ItemBought(offer.buyer, _nft, _tokenId, offer.amount);
    }

    ////////////////// Auctions /////////////////////////

    function createAuction(
        address _nft,
        uint256 _tokenId,
        uint256 _basePrice,
        uint256 endTime
    ) public {
        if (IERC721(_nft).getApproved(_tokenId) != address(this)) {
            revert NftIsNotApproved();
        }
        ListdItems++;
        endTime = endTime * 1 seconds;
        endTime = block.timestamp + endTime;
        _auctionDetail[_nft][_tokenId] = AuctionDetails(
            payable(msg.sender),
            _basePrice,
            address(0),
            0,
            endTime,
            block.timestamp,
            false,
            true
        );
        listing[_nft][_tokenId] = items(
            _basePrice,
            payable(msg.sender),
            0,
            0,
            false,
            false,
            true
        );

               bool temp;
        for(uint256 i=0; i<collection.length; i++){
            if(collection[i] == _nft){
                temp = true;
            }
            }
            if(temp == false) {
                collection.push(_nft);
            }
            
            collectionData[_nft].push(_tokenId); 
            
        emit ItemListed(msg.sender, _nft, _tokenId, _basePrice);
    }

    //This funtion for make Bid
    //first call approve function
    function bid(
        address _nft,
        uint256 _tokenId,
        address _token,
        uint256 _amount
    ) public {
        // msg.sender -> address parameter
        AuctionDetails storage auction = _auctionDetail[_nft][_tokenId];
        require(auction.ended == false, "Auction has ended");
        require(auction.seller != address(0), "Auction does not exist");

        // end = auction.ended;
        _updateStatus(_nft, _tokenId);

        if (block.timestamp < auction.endTime) {
            require(
                auction.highestBid < _amount && auction.basePrice <= _amount,
                "Please send more funds"
            );
            require(
                msg.sender != auction.seller,
                "You cannot bid in your own auction"
            );
            require(
                IERC20(_token).balanceOf(msg.sender) >= _amount,
                "you Dont Have Balance"
            );

            uint256 allowance = IERC20(_token).allowance(
                msg.sender,
                address(this)
            );
            if (allowance >= _amount) {
                auction.highestBidder = msg.sender;
                auction.highestBid = _amount;
            }
        }
    }

    //This function is use for is Auction End or Not
    function _checkAuctionStatus(
        address _nft,
        uint256 _tokenId
    ) public view returns (bool) {
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        require(
            auction.seller != address(0),
            "Auction for this NFT is not in progress"
        );
        return auction.ended;
    }

    //This Function for change status
    function _updateStatus(address _nft, uint256 _tokenId) public {
        //private
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        require(auction.ended == false, "This auction has Ended");

        if (block.timestamp > auction.endTime) {
            auction.ended = true;
        }
        _auctionDetail[_nft][_tokenId] = auction;
        _auctionDetail[_nft][_tokenId].auction = false;
    }

    function isAuction(
        address _nft,
        uint256 _tokenId
    ) public view returns (bool) {
        if (_auctionDetail[_nft][_tokenId].auction == true) {
            return true;
        } else {
            return false;
        }
    }

    function getLastTime(
        address _nft,
        uint256 _tokenId
    ) public view returns (uint256) {
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        return auction.endTime;
    }

    function cancellAuction(address _nft, uint256 _tokenId) public {
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        require(
            msg.sender == _auctionDetail[_nft][_tokenId].seller,
            "You are not Owner of this NFT"
        );
        require(auction.endTime < block.timestamp, "Auction Time remaining");
        bool ended = _checkAuctionStatus(_nft, _tokenId);
        if (!ended) {
            _updateStatus(_nft, _tokenId);
        }
        items memory Items = listing[_nft][_tokenId];
        Items.cancelListing = true;
        Items.listed = false;
        listing[_nft][_tokenId] = Items;
    }

    function getHighestBid(
        address _nft,
        uint256 _tokenId
    ) public view returns (uint256) {
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        return auction.highestBid;
    }

    function getHighestBidder(
        address _nft,
        uint256 _tokenId
    ) public view returns (address) {
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        return auction.highestBidder;
    }

    //This function is concludeAuction finilise the highest bider
    function concludeAuction(
        address _nft,
        uint256 _tokenId,
        address _token
    ) public {
        AuctionDetails memory auction = _auctionDetail[_nft][_tokenId];
        require(
            msg.sender == auction.highestBidder,
            "You are not authorized to conclude the auction"
        );
        require(auction.endTime < block.timestamp, "Auction Time remaining");

        bool ended = _checkAuctionStatus(_nft, _tokenId);
        if (!ended) {
            _updateStatus(_nft, _tokenId);
        }
        items memory Item = listing[_nft][_tokenId];
        IERC721(_nft).transferFrom(Item.seller, msg.sender, _tokenId);
        Item.sale = true;
        IERC20(_token).transferFrom(
            auction.highestBidder,
            Item.seller,
            auction.highestBid
        );
        totalAuctionSale++;
        listing[_nft][_tokenId] = Item;
        emit ItemBought(msg.sender, _nft, _tokenId, auction.highestBid);
    }
    function getCollectionLength() public view returns(uint256) {
        return collection.length;
    }


    
    function getCollectionNFTs(address _contractAddress)
    public view returns (uint[]memory) {
    return collectionData[_contractAddress];
    }

    function remove (address _nft, uint256 _tokenId) private {
    uint256 index;
    uint256[] storage myarr = collectionData[_nft];
    for(uint256 i =0; i<myarr.length; i++){
        if(myarr[i] == _tokenId){
            index=i;
        }
    } 
      uint temp = myarr.length;
    for(uint256 i=index; i<temp-1; i++){
        myarr[index]=myarr[index+1];
    }
    myarr.pop();
    }

 
    








}
