import React from 'react'
import { useLocation } from 'react-router-dom';
import Bundle4 from "./bundleOf4/Bundle4";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import NftsCard from "./nftsCards/NftsCard";
import NftsHero from "./nftsHero/NftsHero";

function Nfts() {
  const location = useLocation();
  console.log("Mohsin",location)
  return (
    <div className=" pt-5">
      <Navbar />
      <NftsHero />
      <NftsCard  account={location?.state}/>
      {/* <Bundle4 /> */}
      <Footer />
    </div>
  );
}

export default Nfts