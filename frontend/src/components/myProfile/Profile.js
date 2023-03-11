import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./profile.css";
import NFTAddress from "../../contractsData/NFT-address.json";
import NFTAbi from "../../contractsData/NFT.json"
import marketPlaceAddress from "../../contractsData/MarketPlace-address.json"
import img from "../../assets/images/profileH.png";
import img1 from "../../assets/images/new.png";
import img2 from "../../assets/images/share.svg";
import ProfileCard from "./ProfileCard";

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
  const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
  return nft
 }

const { ethereum } = window;
export default function Profile() {
  const [purchases, setPurchases] = useState([])
  const [account, setAccount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [chainId,setChainId] = useState()

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
 
  const loadPurchasedItems = async () => {
    try {
      const tokenCount = await SetTransactionSigner()?._tokenIdCounter()
      let purchasedItem = [];
      for (let i = 0; i < tokenCount; i++) {
        const ownerof = await SetTransactionSigner()?.ownerOf(i)
        const getApproved = await SetTransactionSigner()?.getApproved(i)
        if (account?.toString().toLowerCase() === ownerof?.toString().toLowerCase() && getApproved?.toString().toLowerCase()==="0x0000000000000000000000000000000000000000") {
          const uri = await SetTransactionSigner()?.tokenURI(i);
          // use uri to fetch the nft metadata stored on ipfs 
          if(uri.slice(uri.length - 4) == "json") {  
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
          } else {
            const link =`https://ipfs.io/ipfs/${uri.slice(uri.length - 46)}`;
            const response = await fetch(link)
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
      }
      setPurchases(purchasedItem)
      setLoading(false)
    }
    
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIsWalletConnected()
    loadPurchasedItems();
   },[account])
  console.log("nfts",purchases);
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
              Owned By You
            </a>
          </div>
        </div>
        <div className="col d-flex justify-content-evenly my-4">
          {purchases.map((value, index) => {
             return <ProfileCard thedata={value} key={index}></ProfileCard>;
          })}
        </div>
      </div>
    </div>
  );
}
