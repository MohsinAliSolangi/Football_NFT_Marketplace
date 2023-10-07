import Navbar from "./navbar/Navbar";
// import axie from "../tile.jpeg";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import marketPlaceAddress from "../contractsData/MarketPlace-address.json";
import marketplaceAbi from  "../contractsData/MarketPlace.json"
import NFTAbi from "../contractsData/NFT.json"
import Pdetails from "./productDetails/Pdetails";
import NFTpageCard from "./NFTpageCard" 





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
    // console.log("%%%%%%%%%%%%%%%",data.productId);
    const getNftId = await SetTransactionSigner().getCollectionNFTs(data.productId);
    let items = []

    
    for (let i=0; i<getNftId.length; i++){
       const auction = await SetTransactionSigner()?.isAuction(data.productId,getNftId[i])
      //  console.log("this is nft ", auction)
        const time = await SetTransactionSigner()?.getLastTime(data.productId,getNftId[i])
        const temp = Number(time)
      const getNFTs = await SetTransactionSigner()?.listing(data.productId,getNftId[i])
      const tokenuri = await SetNFTContract()?.tokenURI(getNftId[i]);
      
      if(tokenuri.slice(tokenuri.length - 4) == "json") {  
        const response = await fetch(tokenuri)
        const metadata = await response.json()
        
     
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
            tokenUri: metadata?.image,
            description: metadata?.description,
            name: metadata?.name,
            attributes:metadata?.attributes
          })
      } 
      
      }else {
        const link =  `https://ipfs.io/ipfs/${tokenuri.slice(tokenuri.length - 46)}`;
        const response = await fetch(link)
        // console.log("++++++++++",response)
        const metadata = await response?.json()  
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
            tokenUri: metadata?.image,
            description: metadata?.description,
            name: metadata?.name,
            attributes:metadata?.attributes
          })
      } 
    }
    }
    // console.log("Items",Items);
    setItems(items)   
    setloding(true);
    }   

// console.log("mny nft ",Items)
    useEffect(()=>{
    // if(!loding)  {
    getCollection();
    // }     
    },[])
   
  return (
    <>
      <div style={{"min-height": "10vh" }}>
      <Navbar></Navbar>
     
      </div>
      <div className="col d-flex justify-content-evenly my-4">
        {Items.map((item,idx)=>(
          <NFTpageCard item={item} idx={idx} ></NFTpageCard>
          ))
        }
     </div>
     </>

  );
}
