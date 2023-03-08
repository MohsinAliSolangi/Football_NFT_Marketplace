import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./profile.css";
import Card from "../nftsCards/NftsCard";
import { useLocation, useParams } from "react-router-dom";
import NFTAddress from "../../contractsData/NFT-address.json";
import NFTAbi from "../../contractsData/NFT.json"
import marketPlaceAddress from "../../contractsData/MarketPlace-address.json"
import axios from "axios";
import NFTTile from "../NFTTile";
import img from "../../assets/images/profileH.png";
import img1 from "../../assets/images/new.png";
import img2 from "../../assets/images/share.svg";
import NftsCard from "../nftsCards/NftsCard";
import ProfileCard from "../../components/nftsCards/ProfileCard";

const imgSize = {
  width: "170px",
  height: "170px",
};
const imgSize1 = {
  width: "18px",
  height: "18px",
};
const cardWidth = {
  width: "23%",
};


const SetTransactionSigner = ()=>{
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()
  const marketplace = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
  return marketplace
 
}







export default function Profile({account}) {
  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");
  const [loading, setLoading] = useState(true)
  const [load, setLoad] = useState(false);
  const [Bid, setBid] = useState(true);
  const [purchases, setPurchases] = useState([])
  const [chainId,setChainId] = useState()
 
  const loadPurchasedItems = async () => {
    try {
      const tokenCount = await SetTransactionSigner()._tokenIdCounter()
      let purchasedItem = [];
      for (let i = 0; i<tokenCount; i++) {

        const ownerof = await SetTransactionSigner().ownerOf(i)
     if (account.toString().toLowerCase() == ownerof.toString().toLowerCase()) {

          const uri = await (await SetTransactionSigner()?.tokenURI(i))
          // use uri to fetch the nft metadata stored on ipfs 
          console.log("&&&&&&&&",uri);       
          const response = await fetch(uri)
          const metadata = await response.json()
          // get Royality fees 
          // const royality = await SetTransactionSigner().getRoyalityFees(i);
          // const res = Number(royality.toString()) / 100
          // define listed item object
        purchasedItem.push({
            nft: NFTAddress.address,
            itemId: i,
            marketplace: marketPlaceAddress.address,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image,
            // Royality: res
          })
        }
      }
      console.log("purchasedItem",purchasedItem)
      setPurchases(purchasedItem)
      setLoading(false)
    }

    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadPurchasedItems();
    console.log("this is ")
   },[])


  // const params = useParams();
  // const tokenId = params.tokenId;
  // if (!dataFetched) getNFTData(tokenId);
console.log("my nfts",purchases);
  return (
    <div className="profile h-auto m">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      <div className="container1 border-bottom">
        <div className="row ">
          <div className="col-lg-5 col-md-4">
            <img
              src={img1}
              style={imgSize}
              className="img-fluid rounded-circle ellipse "
              alt=""
            />
            <div className="d-flex align-items-center">
              <h1 className="h1-28">User_name </h1>
              <img src={img2} style={imgSize1} className="ms-5" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-between col-lg-3 ">
            <a
              href=""
              className="p-22 text-black text-text-decoration-underline "
            >
              Owned
            </a>
            <a href="" className="p-22 text-black text-decoration-none ">
              Owned
            </a>
            <a href="" className="p-22 text-black text-decoration-none ">
              Owned
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly my-4">
          <h1 className="h1-28">My NFTs for listed </h1>
          {/* <NftsCard /> */}
          {purchases.map((value, index) => {
             return <ProfileCard thedata={value} key={index}></ProfileCard>;
          })}
        </div>
      </div>
    </div>
  );
}
