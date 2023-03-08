import React from "react";
import icon1 from "../../assets/howItWorks/how1.svg";
import icon2 from "../../assets/howItWorks/how2.svg";
import icon3 from "../../assets/howItWorks/how3.svg";
import icon4 from "../../assets/howItWorks/how4.svg";

import { ImDiamonds } from "react-icons/im";
// import "../index.css"

// const cardWidth = {
//   width: "23%",
// };
const imgWidth = {
  width: "33px",
  height: "33px",
};

function HowItWork() {
  return (
    <>
      <section className="Bgsecond my-5 py-4 ">
        <div class="container1 " id="HowItWorks">
          <h1 className="h1-40 fw-bold text-center mt-3 px-4 pt-3">
            Select, buy, sell, and earn
          </h1>
          <div class="row d-flex align-items-center my-5">
            <div class="col-lg-3 text-center col-md-3 col-sm-4 d-flex flex-column align-items-center justify-content-center">
              <img
                src={icon1}
                alt=""
                style={imgWidth}
                className="d-flex img-fluid "
              />
              <p class="p-20 mt-4 fw-bold">Explore and find NFTs</p>
              <p className="p-16 fw-bold pt-2">
                Explore the Pakistan famous footballs’ NFTs and add your
                favoutites to wishlist.
              </p>
            </div>
            <div class="col-lg-3 flex-column text-center col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
              <img
                src={icon2}
                alt=""
                style={imgWidth}
                className="d-flex img-fluid "
              />
              <p class="p-20 mt-4 fw-bold">Connect wallet</p>
              <p className="p-16 fw-bold pt-2">
                Click on the <span className="text-info1">connect wallet</span>{" "}
                button at the top to connect a wallet of your choice.
              </p>
            </div>
            <div class="col-lg-3 flex-column text-center col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
              <img
                src={icon3}
                alt=""
                style={imgWidth}
                className="d-flex img-fluid "
              />
              <p class="p-20 mt-4 fw-bold">Buy your favourite NFTs</p>
              <p className="p-16 fw-bold pt-2">
                Once you connect with the wallet then start buying the NFTs of
                your choice by clicking buy button.
              </p>
            </div>
            <div class="col-lg-3 flex-column text-center col-md-3 col-sm-4 d-flex align-items-center justify-content-center">
              <img
                src={icon4}
                alt=""
                style={imgWidth}
                className="d-flex img-fluid "
              />
              <p class="p-20 mt-4 fw-bold">Sell your NFTs</p>
              <p className="p-16 fw-bold pt-2">
                After buyinng you can starting selling NFTs whenever you feel
                great advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWork;
