import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Profile from "./Profile";

function MyProfile() {
  // const location = useLocation();
  // console.log("CHEEEEEK",location)
  return (
    <div className=" pt-5">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default MyProfile;
