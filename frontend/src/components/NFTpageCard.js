import React, { useEffect } from "react";
import "./nftsCards/nftsCards.css";
import img from "../assets/images/heart.svg";
// import { useLocation, useParams } from "react-router-dom";
import { ImDiamonds } from "react-icons/im";
// import nftsCardsSectionData from "../assets/data/nftsCardsSectionData";
import { Link } from "react-router-dom";
// import NFTTile from "../NFTTile";
import Pdetails from "./productDetails/Pdetails.jsx"

import NFTAddress from "../contractsData/NFT-address.json";
import NFTAbi from "../contractsData/NFT.json"
import marketPlaceAddress from "../contractsData/MarketPlace-address.json"
import marketPlaceAbi from "../contractsData/MarketPlace.json"

// import axios from "axios";
import { useState } from "react";
import { ethers } from "ethers";

const imgSize = { width: "20px", height: "18.33px" };

const SetTransactionSigner = () => {
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()
  const marketplace = new ethers.Contract(marketPlaceAddress.address, marketPlaceAbi.abi, signer)
  return marketplace
}


const nft = () => {
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()
  const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
  return nft
}
function NFTpageCard({ item, idx }) {

  const [auction, setAcution]=useState(false)




const isAuction= async() =>{
  // console.log("Cheekssss") 
  let auction = await SetTransactionSigner().isAuction(item?.nftContract,item?.TokenId);
//  console.log("auction",auction) 
 setAcution(auction)  
}


  useEffect(()=>{
    isAuction();
  },[])
  // console.log("itemitemitem",item)
  return (    
   <div className="container1 mt-5 mb-4">
   <div className="col flex-wrap justify-content-evenly">
         <div
           className="card1 border  card col-lg-3 col-md-3 col-sm-4 p-2 my-2 d-flex flex-column justify-content-center align-items-center "
         >
           <div >
             <div className="heart d-flex flex-column align-items-center justify-content-center rounded-3">
               <img src={img} style={imgSize} alt="" />
             </div>
             <Link to={`/NFTpageCard/${encodeURIComponent(JSON.stringify(item))}`}>
               <img
                 className="img-fluid cHeight rounded-2"
                 src={item?.tokenUri}
                 alt="Card image cap"
               />
             </Link>
             <div className="">
               <p className="p-16 mt-1">{item.name}</p>
               <p className="p-12  ">
                 <span className="text-info fw-bold mb-0">
                 Owner: {item.seller.slice(0, 20)}
                <br />
                 contract: {item.nftContract.slice(0, 20)}
                 </span>
               </p>
             </div>
             <div className="d-flex justify-content-between bg-secondary p-1 m-0 bg-opacity-25 rounded-2">
               <div>
                 <p className="p-16 mt-0">{item.TokenId.toString()}</p>
               </div>
               <div>
           <div className="d-flex">
                   {<ImDiamonds />}
                   <p className="p-16 mt-0"> {item.totalPrice.toString()}</p>
           </div>
                 <div>
                   <p className="text-end p-12">$: {item.totalPrice.toString()  }</p>
                 </div>
               </div>
             </div>
             <button onClick={() => window.location.href=`/NFTpageCard/${encodeURIComponent(JSON.stringify(item))}`}className="btn btn-lg w-100 justify-content-center my-2 btn-info1 height py-1 d-flex text-center text-white mx-auto px-5 text-lg-center btn-lg ">
              {auction ? 
                <div>On Auction</div>  
                  :
                <div>On Sale</div>
              } 
        </button>
           </div>
         </div>
   </div>
 </div>

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   );
}

export default NFTpageCard;
