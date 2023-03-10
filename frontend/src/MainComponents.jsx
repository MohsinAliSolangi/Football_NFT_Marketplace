import React from 'react'
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar";
// import AboutUs from "./components/About/AboutUs";
import Pdetails from './components/productDetails/Pdetails';
import Home from "./components/home/Home";
import NewNFTs from "./components/newNFTs/NewNFTs";

import PopUp from "./components/popUp/PopUp";
import PopUp1 from "./components/popUp/PopUp1";
import PopUp2 from "./components/popUp/PopUp2";

import Bundle from "./components/bundleOf4/Bundle";
import NftsCard from "./components/nftsCards/NftsCard";
import Sialkot from "./components/about/Sialkot";
import SialStory from "./components/about/SialStory";
import Team from "./components/about/Team";
import HowItWork from "./components/nftsCards/HowItWork";
import FAQs from "./components/faqs/FAQs";
import SellNFT from "./components/SellNFT.js"




function MainComponents() {




  return (
    <div>
      <Navbar />
      <Home />
      <NewNFTs />
      <Sialkot />
      <SialStory />
      <NftsCard />
      {/* <Pdetails/> */}
      <HowItWork />
      <Team />
      <FAQs />
      {/* <Bundle /> */}
      {/* <AboutUs />  */}

      {/* <Profile /> */}
      {/* <PopUp />  */}
      {/* <PopUp1 /> */}
      {/* <PopUp2 /> */}
      <Footer />  
    </div>
  );
}

export default MainComponents