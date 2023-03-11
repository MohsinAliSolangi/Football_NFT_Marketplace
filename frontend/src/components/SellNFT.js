
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import nft from "../contractsData/NFT.json";
import nftAddr from "../contractsData/NFT-address.json"
// import { useLocation } from "react-router";

export default function SellNFT() {
  const ethers = require("ethers");

  const [image, setImage] = useState('')
  // const [royality, setRoyality] = useState()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function OnChangeFile(e) {
    var file = e.target.files[0];

  
    if (typeof file !== 'undefined') {
      try {
        setLoading(true)
        console.log("this is image file ", file);
        const resut = await uploadFileToIPFS(file);
        //const result = await client.add(file)
        console.log("!!!!!!!!!!!!!!!!!!",resut)
        setImage(resut.pinataURL);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log("ipfs image upload error: ", error)
      }
    }
  }


  const createNFT = async () => {


    console.log("this is image????????????? ", image);
    console.log("this is name ", name);
    console.log("this is description ", description);

    if (!image || !name || !description) return
    //let temp = image.("https://gateway.pinata.cloud/ipfs/").replace("https://gateway.pinata.cloud/ipfs/");
    const nftJSON = {
      "attributes":[
      {"trait_type":`${name}`,"value":"Testing"},
      {"trait_type":"First","value":"Onwer"},
      {"trait_type":"NFT","value":"Developer"},
      {"trait_type":"Web3","value":"FullStack"}],
      "description":`${description}`,
      "image":`${image}`,
      "name":`${name}`
    }


    try {
      setLoading(true)
      const result = await uploadJSONToIPFS(nftJSON)
     console.log("this is json image format ",result);
     await mintThenList(result)
     setName("")
     setDescription("")
    //  setRoyality("")
    //  navigate('/my-purchases')
      setLoading(false)
    } catch (error) {
      setLoading(false)

      console.log("ipfs uri upload error: ", error)
    }
  }


  const mintThenList = async (result) => {
    try {
      setLoading(true)
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // updateMessage("Please wait..");
      let contract = new ethers.Contract(
              nftAddr.address,
              nft.abi,
              signer
            );

      await (await contract.safeMint(result.pinataURL)).wait()
      setName("")
     setDescription("")
     alert("congrates you mint")
     navigate('/myProfile');
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

console.log("thIS IS image",image)
  return (
    <div className="container1">

      <div className="d-flex text-start mt-5" id="nftForm">
        <form className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
          <h3 className="text-center font-bold text-purple-500 mb-8">
          Mint Your New NFT
          </h3>

          <div className="d-flex flex-column">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="image"
            >
             Image, GIF, 3D Model, or Video *
            </label>
            <input className="" type={"file"} onChange={OnChangeFile} />
          </div>
          <br></br>
          <div className="text-green text-center"> </div>


          <div className="my-5 d-flex flex-column">
            <label
              className="block text-purple-500 text-sm font-bold"
              htmlFor="name"
            >
              NFT Name
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Axie#4563"
              onChange={(e) => setName(e.target.value)}
              // onChange={(e) =>
              //   updateFormParams({ ...formParams, name: e.target.value })
              // }
              // value={formParams.name}
            />
          </div>
          <div className="mb-5 d-flex flex-column">
            <label
              className="text-purple-500 text-sm font-bold"
              htmlFor="description"
            >
              NFT Description
            </label>
            <p className=" text-secondary w-75 my-3">The description will be included on the item's detail page underneath its image.
          What are its unique features & how it is different?</p>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="5"
              id="description"
              type="text"
              placeholder="This is Art NFT"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            onClick={createNFT}
            className="btn btn-info1 text-white px-16" disabled={loading} >
           Mint Now
          </button>
        </form>
      </div>
      <div className="text-center my-5 ">
        <Link to={"/"}><button className="btn btn-info1 text-white btn-lg px-5 ">Back To Home</button></Link>
        </div>
    </div>
  );
}
