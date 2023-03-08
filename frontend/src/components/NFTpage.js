import Navbar from "./navbar/Navbar";
// import axie from "../tile.jpeg";
import { useLocation, useParams } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import marketPlaceAddress from "../contractsData/MarketPlace-address.json";
import marketplaceAbi from  "../contractsData/MarketPlace.json"
import NFTAbi from "../contractsData/NFT.json"
import Pdetails from "./productDetails/Pdetails";





const SetTransactionSigner = ()=>{
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()
  const marketplace = new ethers.Contract(marketPlaceAddress.address, marketplaceAbi.abi, signer)
  return marketplace
}

const { ethereum } = window;
export default function NFTPage() {

let data = useParams();
console.log("data",data.productId);
  // const [data, updateData] = useState({});
  const [dataFetched, updateDataFetched] = useState(false);
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("0x");
  
  const [isShow,setIshow] = useState(false)
  const [loding,setloding] = useState(false)
  const [Items, setItems]= useState([])



  const SetNFTContract = ()=>{
    //Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()
    const nftcontract = new ethers.Contract(data.productId,NFTAbi.abi,signer)
    return nftcontract
  }

  const getCollection = async()=>{
    console.log("%%%%%%%%%%%%%%%",data.productId);
     const getNftId = await SetTransactionSigner().getCollectionNFTs(data.productId);
    let items = []
    let image;
    
    for (let i=0; i<getNftId.length; i++){
       const auction = await SetTransactionSigner()?.isAuction(data.productId,getNftId[i])
       console.log("this is nft ", auction)
        const time = await SetTransactionSigner()?.getLastTime(data.productId,getNftId[i])
        const temp = Number(time)
      const getNFTs = await SetTransactionSigner()?.listing(data.productId,getNftId[i])
      const tokenuri = await SetNFTContract()?.tokenURI(getNftId[i]);
      
      if(tokenuri.slice(tokenuri.length - 4) == "json") {  
        const response = await fetch(tokenuri)
        const metadata = await response.json()
        image = metadata?.image;
      
      }else {
        const link =  `https://gateway.pinata.cloud/ipfs/${tokenuri.slice(tokenuri.length - 46)}`;
        const response = await fetch(link)
        console.log("++++++++++",response)
        const metadata = await response?.json()
        image = metadata?.image;
      }
      
      
      
      
      
      
      
      if (!getNFTs.sale) {         
          items.push({
            auction: auction,
            time: temp,
            totalPrice: getNFTs.price,
            seller: getNFTs.seller,
            startTime:getNFTs.startTime,
            endTime: getNFTs.endTime,
            cancelListing: getNFTs.cancelListing,
            sale: getNFTs.sale,
            listed: getNFTs.listed,
            TokenId: getNftId[i],
            nftContract: data.productId,
            tokenUri: image
          })
      } 
    }
    console.log("Items",Items);
    setItems(items)   
    setloding(true);
    }   

console.log("mny nft ",Items)
    useEffect(()=>{
    // if(!loding)  {
    getCollection();
    // }     
    },[])
   
  return (
    
    <div style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="flex ml-20 mt-20">
        <img src={Items.tokenUri} alt="" className="w-2/5" />
        <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
          <div>Name: {Items.name}</div>
          <div>Description: {Items.description}</div>
          <div>
          
            Price: <span className="">{Items.price + " ETH"}</span>
          </div>
          <div>
            Owner: <span className="text-sm">{Items.owner}</span>
          </div>
          <div>
            Seller: <span className="text-sm">{Items.seller}</span>
          </div>
          <div>
            
              <button
                className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                >
                Buy this NFT
              </button>

            {/* <div className="text-green text-center mt-3">{message}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
