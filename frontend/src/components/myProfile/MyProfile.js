import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Profile from "./Profile";

function MyProfile() {
  const location = useLocation();
  return (
    <div className=" pt-5">
      <Navbar />
      <Profile account = {location?.state} />
      <Footer />
    </div>
  );
}

export default MyProfile;
