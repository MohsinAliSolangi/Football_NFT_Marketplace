import "./pdetails.css";
import img2 from "../../assets/images/ball.png";
import nftsCardsSectionData from "../../assets/data/nftsCardsSectionData";
import { Link, useParams } from "react-router-dom"
import Countdown from 'react-countdown'
import axios from "axios";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import marketPlaceAddress from "../../contractsData/MarketPlace-address.json"
import marketplaceAbi from "../../contractsData/MarketPlace.json"
import TokenAddress from "../../contractsData/Token-address.json"
import Token from "../../contractsData/NFT.json"
import { Modal, ModalHeader, Form, ModalBody } from "reactstrap"
import { Row, Col, Card, Button } from 'react-bootstrap'


const SetTransactionSigner = () => {
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()

  const marketplace = new ethers.Contract(marketPlaceAddress.address, marketplaceAbi.abi, signer)
  return marketplace
}
const { ethereum } = window;
export default function Pdetails() {
  const { item } = useParams();
  const myArray = JSON.parse(decodeURIComponent(item));
  const [account, setAccount] = useState(null)
  const [NowTime, setNowTime] = useState(0)
  const [Time, setTime] = useState(0)
  const [bid, setbid] = useState(0)
  const [bidder, setbidder] = useState(null)
  const [modal, setmodal] = useState(false)
  const [offerAmount, setofferAmount] = useState(0);
  const [price, setPrice] = useState(null)
  const [offer, setOffer] = useState(false)


  const checkIsWalletConnected = async () => {
    try {
      if (!ethereum) return alert("please install MetaMask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setAccount(accounts[0]);
      } else {
        console.log("No account Found");
      }
    } catch (err) {
      throw new Error("No ethereum Object");
    }
  }

  const buy = async () => {
    let id = myArray.TokenId.hex.toString();
    await SetTransactionSigner().buyItem(myArray.nftContract, id, { value: myArray.totalPrice });
    alert("congrates you Buy NFT")
  }


  const getLastTime = async () => {
    try {
      const time = await SetTransactionSigner().getLastTime(myArray.nftContract, myArray.TokenId)
      const temp = Number(time.toString())
      const nowDate = Math.floor((new Date()).getTime() / 1000);
      setTime(temp)
      setNowTime(nowDate)
    } catch (error) {
      console.log(error);
    }
  }

  const getHigestBid = async () => {
    try {
      let tokenid = await parseInt(myArray.TokenId.hex, 16)
      let bid = await SetTransactionSigner().getHighestBid(myArray.nftContract, tokenid);
      setbid(ethers.utils.formatEther(bid))
      console.log("this is bid", bid.toString());
    } catch (error) {
      console.log(error);
    }
  }

  const getHigestBidder = async () => {
    try {
      let tokenid = await parseInt(myArray.TokenId.hex, 16)
      let bidder = await SetTransactionSigner().getHighestBidder(myArray.nftContract, tokenid);
      setbidder(bidder)
      console.log("this is bid", bidder.toString());
    } catch (error) {
      console.log(error);
    }

  }


  //this is set offer function call
  const makeOffers = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)
      // get uri url from nft contract
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Set signer
      const signer = provider.getSigner()
      const token = new ethers.Contract(TokenAddress.address, Token.abi, signer)
      const offer = ethers.utils.parseEther(price);
      setPrice("")
      console.log("cheek", offer)
      const balance = await token.balanceOf(account);
      if (Number(balance) >= Number(offer)) {
        console.log("Mohsin", offerAmount.amount);
        if (Number(offer) > Number(offerAmount.amount)) {
          await (await token.approve(marketPlaceAddress.address, offer)).wait();
          await (await SetTransactionSigner().makeOffer(myArray.nftContract, tokenid, TokenAddress.address, offer)).wait();
          setOffer(false)
        }
        else {
          alert("please increse you offer");
        }

      } else {
        alert("You Dont Have Balance");
      }
    } catch (error) {
      setOffer(false)
      console.log("this is makeOffers error");
    }
  }


  const itemOffer = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)
      const offers = await SetTransactionSigner().makeoffer(myArray.nftContract, tokenid);
      setofferAmount(offers);
    } catch (error) {
      console.log("this is itemOffer error");
    }
  }



  //this is bid function 
  const placeBid = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)

      // get uri url from nft contract
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Set signer
      const signer = provider.getSigner()
      const token = new ethers.Contract(TokenAddress.address, Token.abi, signer)
      console.log("price direct ", price);
      const bidding = ethers.utils.parseEther(price)
      console.log("price direct ", bidding.toString());
      console.log("Mohsin", account)
      const balance = await token.balanceOf(account);
      if (Number(balance) >= Number(bidding)) {
        if (Number(bidding) > Number(bid)) {
          await (await token.approve(marketPlaceAddress.address, bidding)).wait()
          await (await SetTransactionSigner()?.bid(myArray.nftContract, tokenid, TokenAddress.address, bidding)).wait()
          console.log("success ");
          setmodal(false);
        }
        else {
          alert("please Increase Your Bid")
        }
      }
      else {
        alert("You Dont Have Balance")
      }
    } catch (error) {
      console.log(error);
    }
  }



  const concludeAuction = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)
      await (await SetTransactionSigner()?.concludeAuction(myArray.nftContract, tokenid, TokenAddress.address)).wait();
    } catch (error) {
      console.log(error);
    }
  }


  const cancellAuction = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)
      await (await SetTransactionSigner()?.cancellAuction(myArray.nftContract, tokenid)).wait();
      console.log("SuccesscancellAuction");
    } catch (error) {
      console.log(error);
    }
  }

  const CancelListing = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)
      await (await SetTransactionSigner()?.cancelListing(myArray.nftContract, tokenid)).wait();
    } catch (error) {
      console.log(error);
    }
  }


  const acceptOffer = async () => {
    try {
      const tokenid = await parseInt(myArray.TokenId.hex, 16)
      await (await SetTransactionSigner()?.acceptOffer(myArray.nftContract, tokenid));
    } catch (error) {
      console.log("this is error")
    }
  }


















  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return 'completed';
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };


  useEffect(() => {
    checkIsWalletConnected();
    getLastTime();
    getHigestBid();
    itemOffer();
    getHigestBidder();
  }, [account, bidder, bid])



  console.log("myArray", myArray)
  return (
    <>
      <section className="container1 pdetails py-5">
        <div className="row">

          <div className="col-md-4 col-lg-4 col-12">
            <div class="card border-0">
              <img
                class="card-img-top rounded-3"
                src={myArray.tokenUri}
                alt="Card image cap"
              />
              <div class="card-body Bginfo border rounded-4 mt-3">
                <h5 class="card-title">
                  Details
                </h5>
                <div className="d-flex py-0 justify-content-between">
                  Contract:<p class="card-text text-info">{myArray.nftContract.slice(0, 30)}</p>

                </div>
                <div className="d-flex py-0 justify-content-between">
                  Owner: <p class="card-text text-info">{myArray.seller.slice(0, 30)}</p>
                </div>

                <div className="d-flex py-0 justify-content-between">
                  <p class="card-text">TokenId</p>
                  <p class="card-text">{parseInt(myArray.TokenId.hex, 16)}</p>
                </div>
                <div className="d-flex py-0 justify-content-between">
                  <p class="card-text">Creator earnings</p>
                  <p class="card-text">{parseInt(myArray.totalPrice.hex, 16)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 ps-5 col-lg-7 col-12 mt-5 mt-md-0 mt-lg-0">
            <h1 className="h1-28">{myArray.name}</h1>
            <p className="p-20 mt-3 ">
              Owned by : <span className="text-info">{myArray.seller}</span>
            </p>

            <p className="p-20 ">Price : <span className="text-info">{parseInt(myArray.totalPrice.hex, 16)}</span></p>
            <p className="p-20 ">$ : <span className="text-info">{parseInt(myArray.totalPrice.hex, 16)}</span></p>

            <div className="d-flex">
              <div>
                <img src={myArray.tokenUri} alt="etheriem" className="eth" />
              </div>
              {bid > 0 ?
                <div className="ms-5 ">
                  <h1 className="h1-28"> ETH: {bid}</h1>
                  <p className="p-16 pb-2"> Address: {bidder?.toString()}</p>
                </div>
                : <></>
              }
            </div>
            {myArray.time > 0
              ?
              NowTime < Time
                ?
                account?.toString().toLowerCase() === myArray.seller?.toString().toLowerCase()
                  ?
                  <div>
                    <h1 className="h1-28">
                      {<Countdown date={Time * 1000} renderer={renderer} />}</h1>
                    <hr />
                    <button className="btn btn-info1 text-white w-75 btn-lg " > Auction is in progress </button>
                  </div>
                  :
                  <div >
                    <h1 className="h1-28">
                      {<Countdown date={Time * 1000} renderer={renderer} />}</h1>
                    <hr />
                    <button onClick={() => setmodal(true)} className="btn btn-info1 text-white w-75 btn-lg " > Place Bid </button>
                  </div>
                :
                bid > 0 && bidder?.toString().toLowerCase() === account?.toString().toLowerCase()
                  ?
                  <div >
                    <button onClick={() => concludeAuction()} className="btn btn-info1 text-white w-75 btn-lg " > GET NFT </button>
                  </div>
                  :
                  account?.toString().toLowerCase() !== myArray.seller?.toString().toLowerCase()
                    ? <div>
                      <button className="btn btn-info1 text-white w-75 btn-lg " > Auction has Ended </button>
                    </div>

                    : bid > 0 ?
                      <div className='d-grid'>
                        <button className="btn btn-info1 text-white w-75 btn-lg "> Auction has Ended </button>
                      </div>
                      :
                      <div className='d-grid'>
                        <button onClick={() => cancellAuction()} className="btn btn-info1 text-white w-75 btn-lg " > Take your NFT </button>
                      </div>

              : account?.toString().toLowerCase() === myArray.seller?.toString().toLowerCase()
                ? <>
                  <hr />
                  <button onClick={() => CancelListing()} className="btn btn-info1 text-white w-75 btn-lg ">
                    Cancel Listing
                  </button>

                  {offerAmount.amount > 0
                    ? <div style={{ marginTop: "10px" }} className='d-grid'>
                      <Button onClick={() => acceptOffer()} className="btn btn-info1 text-white w-75 btn-lg ">
                        Accept Offer
                      </Button>
                    </div>
                    : <></>
                  }
                </>
                :
                <>
                  <hr />
                  <button onClick={() => buy()} className="btn btn-info1 text-white w-75 btn-lg ">
                    Buy NFT
                  </button>
                  <div style={{ marginTop: "10px" }}>
                    <button onClick={() => setOffer(true)} className="btn btn-info1 text-white w-75 btn-lg ">
                      Make Offer
                    </button>
                  </div>
                </>
            }


            <h1 className="h1-28 mt-5">Description</h1>
            <p className="p-16 mt-3 ">
              Created by : <span className="text-info">{myArray.name}</span>
            </p>
            <p className="p-26">
              {myArray.description}
            </p>
          </div>
        </div>



        <div className="d-flex justify-content-center gap-2">
          <div className="text-center mt-5 ">
            <Link to={"/nfts"}><button className="btn btn-info1 text-white btn-lg  ">Back to Nfts Gallery</button></Link>
          </div>
          <div className="text-center mt-5 " >
            <Link to={"/"}><button className="btn btn-info1 text-white btn-lg px-5 ">Back to Home</button></Link>
          </div>
        </div>
      </section>



      <Modal
        size='lg'
        isOpen={modal}
        toggle={() => setmodal(!modal)}>
        <ModalHeader
          toggle={() => setmodal(!modal)}>
          Place Bid
        </ModalHeader>
        <ModalBody>
          <Form >
            <Row>
              <div>
                <input
                  required type="number"
                  className='form-control'
                  placeholder='Enter Bid'
                  onChange={(e) => setPrice(e.target.value)}></input>
              </div>
              <div>
                <Button onClick={() => placeBid()} style={{ marginLeft: "200px", marginTop: "10px" }}> Submit </Button>
              </div>
            </Row>
          </Form>
        </ModalBody>
      </Modal>




      <div>
        <Modal
          size='lg'
          isOpen={offer}
          toggle={() => setOffer(!offer)}>
          <ModalHeader
            toggle={() => setOffer(!offer)}>
            Make Offer
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <div>
                  <input
                    type="number"
                    required
                    step="any"
                    className='form-control'
                    placeholder='Enter Offer'
                    onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div>
                  <Button type="button" onClick={() => { makeOffers(item) }} style={{ marginLeft: "200px", marginTop: "10px" }}  > Submit </Button>
                </div>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
