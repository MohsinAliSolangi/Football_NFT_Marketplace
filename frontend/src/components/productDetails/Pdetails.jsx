import "./pdetails.css";
import img2 from "../../assets/images/ball.png";
import nftsCardsSectionData from "../../assets/data/nftsCardsSectionData";
import {Link , useParams} from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import marketPlaceAddress from "../../contractsData/MarketPlace-address.json"
import marketplaceAbi from "../../contractsData/MarketPlace.json"

const SetTransactionSigner = ()=>{
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()

  const marketplace = new ethers.Contract(marketPlaceAddress.address, marketplaceAbi.abi, signer)
  return marketplace
}

export default function Pdetails() {
  const {item} = useParams();
  const myArray = JSON.parse(decodeURIComponent(item));

const buy = async()=>{
  let id = myArray.TokenId.hex.toString();
  await SetTransactionSigner().buyItem(myArray.nftContract,id,{value:myArray.totalPrice});
  alert("congrates you Buy NFT")
}








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
                    Contract:<p class="card-text text-info">{myArray.nftContract.slice(0,30)}</p>
                  
                  </div>
                  <div className="d-flex py-0 justify-content-between">
                    Owner: <p class="card-text text-info">{myArray.seller.slice(0,30)}</p>
                    {/* <p class="card-text">{myArray.TokenId.toString()}</p> */}
                    {/* <p class="card-text">{backEndLanguage}</p>  */}
                  </div>
                  <div className="d-flex py-0 justify-content-between">
                    {/* <p class="card-text">Creator earnings</p>
                    <p class="card-text">{CreatorEarnings}</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ps-5 col-lg-7 col-12 mt-5 mt-md-0 mt-lg-0">
              {/* <h1 className="h1-28">{nftsName}</h1> */}
              <p className="p-20 mt-3 ">
                Owned by : <span className="text-info">{myArray.seller}</span>
              </p>

              <p className="p-20 ">Price :</p>
              <div className="d-flex">
                <div>
                  <img src={myArray.totalPrice.toString()} alt="etheriem" className="eth" />
                </div>
                <div className="ms-5 ">
                  {/* <h1 className="h1-28">{pEtherium}</h1> */}
                  {/* <p className="p-16 pb-2">={pIndollar}</p> */}
                </div>
              </div>
              <button onClick={buy} className="btn btn-info1 text-white w-75 btn-lg ">
                Buy Now
              </button>
              <h1 className="h1-28 mt-5">Description</h1>
              <p className="p-16 mt-3 ">
                {/* Created by : <span className="text-info">{createrName}</span> */}
              </p>
              <p className="p-26">
                {/* {description} */}
              </p>
            </div>
         </div>
         
         
         
         
         
         
         
         
         
{/*//////////////////// last segmint /////////////////////*/}
         <div className="d-flex justify-content-center gap-2">
        <div className="text-center mt-5 ">
        <Link to={"/nfts"}><button className="btn btn-info1 text-white btn-lg  ">Back to Nfts Gallery</button></Link>
        </div>
        <div className="text-center mt-5 ">
        <Link to={"/"}><button className="btn btn-info1 text-white btn-lg px-5 ">back to Home</button></Link>
        </div>
        </div>
      </section>
    </>
  );
}
