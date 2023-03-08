import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./navbar.css";
import "../../global.css";
import { Link } from "react-router-dom";
import Img from "../../assets/images/profile.svg";
import img1 from "../../assets/images/meta-fox.svg";
import img2 from "../../assets/images/Glow.svg";
import img3 from "../../assets/images/Phanton.svg";
import img4 from "../../assets/images/solf.svg";
import Cross from "../../assets/images/cross.svg";
import Modal from "./Modal";
import MarketplaceAddress from "../../contractsData/MarketPlace-address.json"
import MarketplaceAbi from  "../../contractsData/MarketPlace.json"
import NFTAddress from "../../contractsData/NFT-address.json"
import NFTAbi from "../../contractsData/NFT.json"
import MyProfile from "../myProfile/MyProfile";
const iconSize = {
  width: "24px",
  height: "24px",
};

const crossSize = {
  width: "30px",
  height: "30px",
};
const profile = {
  width: "20px",
  height: "20px",
};

const { ethereum } = window;
function Navbar() {
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})


  ethereum.on("accountsChanged", async (account) => {
    setAccount(account[0]);
    window.location.reload()
  })

  const changeNetwork = async () => {
    try {
      setLoading(true)
      if (!ethereum) throw new Error("No crypto wallet found");
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: "0x7A69"
          // chainId: "0x05"
        }]
      });
      await web3Handler();
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err.message);
    }
  };
  window.ethereum && ethereum.on("chainChanged", async () => {
    window.location.reload();
  });

  const checkIsWalletConnected = async () => {  
    try {
      if (!ethereum) return alert("please install MetaMask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setAccount(accounts[0]);
        // Get provider from Metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // Set signer
        const signer = provider.getSigner()
        loadContracts(signer)
      
      } else {
        console.log("No account Found");
      }
    } catch (err) {

      throw new Error("No ethereum Object");
    }
  }

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()
  
    
    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    setLoading(false)
  }

  useEffect(() => {
    checkIsWalletConnected();
  }, [])




  if (popUp) {
    document.body.classList.add("stop-scroll");
  } else {
    document.body.classList.remove("stop-scroll");
  }

  return (
    <>
      <div className=" shadow1 p-2 mb-5 bg-white rounded fixed-top">
        <nav
          className="navbar navbar-expand-sm navbarBg container1 "
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand p-22px  logo text-info1 fw-bold"
              href="#home"
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              PakSiaL
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="hover navbar-collapse collapse"
              id="navbarsExample03"
            >
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
               
                <li className="nav-item mx-2">
                  <Link
                    to="/nfts"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link active p-22px"
                    aria-current="page"
                  >
                    Nfts
                  </Link>
                </li>
             
                <li className="nav-item mx-2">
                  {/* <a
                    className="nav-link active p-22px"
                    aria-current="page"
                    href="#HowItWorks"
                  > */}
                    {/* </a> */}
                  <Link
                    to="/admincontrol"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link active p-22px"
                    aria-current="page"
                  >
                     Mint NFT
                  </Link>
                
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/faqs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link active p-22px"
                    aria-current="page"
                  >
                    FAQS
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/aboutSec"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link active p-22px"
                    aria-current="page"
                  >
                    Our Mission
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="/aboutSec"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link active p-22px"
                    aria-current="page"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
              <button onClick={changeNetwork}
                className="btn btn-info1 text-white ms-auto px-5 me-5"
              >
             Wallet 
             {account?.slice(0,5)}
              </button>

              <Link
                to="/myProfile"
                state={account}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn  border p-2 text-white mt-md-2 mt-lg-0 mx-lg-1"
              >
                <img src={Img} style={profile} alt="" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div>{popUp ? <Modal setPopUp={setPopUp} /> : ""}</div>
    </>
  );
}

export default Navbar;
