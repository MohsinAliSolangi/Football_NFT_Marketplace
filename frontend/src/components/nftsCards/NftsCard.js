import React, { useEffect } from "react";
import { ethers } from "ethers";
import "./nftsCards.css";
import img from "../../assets/images/heart.svg";
import { ImDiamonds } from "react-icons/im";
import nftsCardsSectionData from "../../assets/data/nftsCardsSectionData";
import { Link } from "react-router-dom";
import NFTTile from "../NFTTile";
import marketPlaceAddress from "../../contractsData/MarketPlace-address.json";
import marketplaceAbi from  "../../contractsData/MarketPlace.json"
import axios from "axios";
import { useState } from "react";
import profile from "../../assets/images/profile.png"

const imgSize = { width: "20px", height: "18.33px" };



const SetTransactionSigner = ()=>{
  //Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // Set signer
  const signer = provider.getSigner()
  const marketplace = new ethers.Contract(marketPlaceAddress.address, marketplaceAbi.abi, signer)
  return marketplace
}

function NftsCard({ thedata }) {
  const [loding, setloding] = useState(false)
  const [collection, setcollection] = useState([])






const getcollection = async () => {
  const collectionlength = await  SetTransactionSigner().getCollectionLength(); 
    let collectionadddress=[];
    for(let i=0; i<collectionlength;i++){
      const res = await SetTransactionSigner().collection(i);
      console.log("res",res)
      collectionadddress.push(res);
    }
    setcollection(collectionadddress);
    setloding(true);
}


useEffect(()=>{
  if(!loding){
  getcollection();
}
},[collection])


console.log("collection",collection)

  return (

      <div className="container1 mt-5 mb-4">
        <div className="col flex-wrap justify-content-evenly">
              {collection.map((data,idx) => {
            return (
              <div
                className="card1 border  card col-lg-3 col-md-3 col-sm-4 p-2 my-2 d-flex flex-column justify-content-center align-items-center "
              >
                <div>
                  <div className="heart d-flex flex-column align-items-center justify-content-center rounded-3">
                    <img src={data} style={imgSize} alt="" />
                  </div>
                  <Link to={`/nfts/${data}`}>
                    <img
                      className="img-fluid cHeight rounded-2"
                      src={profile}
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="">
                    <p className="p-16 mt-1">{data.name}</p>
                    <p className="p-12  ">
                      <span className="text-info fw-bold mb-0">
                    {`Collection:  ${collection[0].slice(0,20)}`}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between bg-secondary p-1 m-0 bg-opacity-25 rounded-2">
                    <div>
                      <p className="p-16 mt-0">{0x0}</p>
                    </div>
                    <div>
                <div className="d-flex">
                        {<ImDiamonds />}
                        <p className="p-16 mt-0"> {100}</p>
                </div>
                      <div>
                        <p className="text-end p-12">$: {0x0}</p>
                      </div>
                    </div>
                  </div>
              <button onClick={() => window.location.href=`/nfts/${data}`} className="btn btn-lg w-100 justify-content-center my-2 btn-info1 height py-1 d-flex text-center text-white mx-auto px-5 text-lg-center btn-lg ">
                    Open Collection
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
 
  );
}

export default NftsCard;
