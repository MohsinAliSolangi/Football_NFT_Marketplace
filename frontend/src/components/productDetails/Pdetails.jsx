import "./pdetails.css";
import img2 from "../../assets/images/ball.png";
import nftsCardsSectionData from "../../assets/data/nftsCardsSectionData";
import {Link , useParams} from "react-router-dom"
import MarketplaceJSON from "../../Marketplace.json";
import axios from "axios";
import { useEffect, useState } from "react";




export default function Pdetails({item,_ind}) {


  const[image, setimage]= useState([]);
  const [isShow,setIshow] = useState(false)
  const [Time, setTime] = useState(0)
  const [NowTime, setNowTime] = useState(0);


  //this is get nft function 
  const getImages = async()=>{
    const uri = await item?.tokenUri;
    if(uri.slice(uri.length - 4) == "json") {  
      const response = await fetch(uri)
      const metadata = await response.json()
      console.log("metadata",metadata.image);
      setimage(metadata?.image)
    }else {
      const link =  `https://gateway.pinata.cloud/ipfs/${uri.slice(uri.length - 46)}`;
      const response = await fetch(link)
      console.log("++++++++++",response)
      const metadata = await response?.json()
      setimage(metadata?.image)
}
}

  // const sampleData = [
  //   {
  //     id:"1",
  //     name: "NFT#1",
  //     description: "Alchemy's First NFT",
  //     website: "http://axieinfinity.io",
  //     image:
  //       "https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
  //     price: "0.03ETH",
  //     currentlySelling: "True",
  //     address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
  //   },
  //   {
  //     id:"2",
  //     name: "NFT#2",
  //     description: "Alchemy's Second NFT",
  //     website: "http://axieinfinity.io",
  //     image:
  //       "https://gateway.pinata.cloud/ipfs/QmdhoL9K8my2vi3fej97foiqGmJ389SMs55oC5EdkrxF2M",
  //     price: "0.03ETH",
  //     currentlySelling: "True",
  //     address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
  //   },
  //   {
  //     id:"3",
  //     name: "NFT#3",
  //     description: "Alchemy's Third NFT",
  //     website: "http://axieinfinity.io",
  //     image:
  //       "https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
  //     price: "0.03ETH",
  //     currentlySelling: "True",
  //     address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
  //   },
  // ];
  
  // const {productId } = useParams();
 
  // const [data, updateData] = useState(sampleData);
  // const [dataFetched, updateFetched] = useState(false);
 

  // async function getAllNFTs() {
  //   const ethers = require("ethers");
  //   //After adding your Hardhat network to your metamask, this code will get providers and signers
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   //Pull the deployed contract instance
  //   let contract = new ethers.Contract(
  //     MarketplaceJSON.address,
  //     MarketplaceJSON.abi,
  //     signer
  //   );
  //   //create an NFT Token
  //   let transaction = await contract.getAllNFTs();

  //   //Fetch all the details of every NFT from the contract and display
  //   const items = await Promise.all(
  //     transaction.map(async (i) => {
  //       const tokenURI = await contract.tokenURI(i.tokenId);
  //       let meta = await axios.get(tokenURI);
  //       meta = meta.data;

  //       let price = ethers.utils.formatUnits(i.price.toString(), "ether");
  //       let item = {
  //         price,
  //         tokenId: i.tokenId.toNumber(),
  //         seller: i.seller,
  //         owner: i.owner,
  //         image: meta.image,
  //         name: meta.name,
  //         description: meta.description,
  //       };
  //       return item;
  //     })
  //   );

  //   updateFetched(true);
  //   updateData(items);
  // }

  // if (!dataFetched) getAllNFTs();
  // // console.log(sampleData);
  // const product = data.find((nftsCardsSectionData)=>nftsCardsSectionData.id === productId);
  // console.log(product);
  // const {image , contextAdress , backEnd , backEndLanguage, CreatorEarnings, nftsName ,adress ,ownerName,priceCetagery, pEtherium, pIndollar,createrName,description} = product
  // 
  useEffect(()=>{
    getImages();
  },[])
  
  console.log("cheeck ",image)
  return (
    <>
      <section className="container1 pdetails py-5">
        <div className="row">
        
            <div className="col-md-4 col-lg-4 col-12">
              <div class="card border-0">
                <img
                  class="card-img-top rounded-3"
                   src={image}
                  alt="Card image cap"
                />
                <div class="card-body Bginfo border rounded-4 mt-3">
                  <h5 class="card-title">
                    Details
                  </h5>
                  <div className="d-flex py-0 justify-content-between">
                    {/* <p class="card-text">{contextAdress}</p> */}
                    {/* <p class="card-text text-info">{adress}</p> */}
                  </div>
                  <div className="d-flex py-0 justify-content-between">
                    {/* <p class="card-text">{backEnd}</p>
                    <p class="card-text">{backEndLanguage}</p> */}
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
                {/* Owned by : <span className="text-info">{ownerName}</span>/ */}
              </p>

              <p className="p-20 ">Price :</p>
              <div className="d-flex">
                <div>
                  {/* <img src={priceCetagery} alt="etheriem" className="eth" /> */}
                </div>
                <div className="ms-5 ">
                  {/* <h1 className="h1-28">{pEtherium}</h1> */}
                  {/* <p className="p-16 pb-2">={pIndollar}</p> */}
                </div>
              </div>
              <button className="btn btn-info1 text-white w-75 btn-lg ">
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
