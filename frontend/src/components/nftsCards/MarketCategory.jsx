import React from "react";
import icon1 from "../../assets/Images/IMG_20220911_192201.jpg";
import icon2 from "../../assets/Images/IMG_20220911_192233.jpg";
import icon3 from "../../assets/Images/IMG_20220911_192254.jpg";
import icon4 from "../../assets/Images/IMG_20220911_192311.jpg";

import { ImDiamonds } from "react-icons/im";
// import "../index.css"

const cardWidth = {
  width: "23%",
};
const imgWidth = {
  width: "230px",
};

function MarketCategory() {
  return (
    <>
      <div class="container px-4 py-5" id="HowItWorks">
        <h3 className="text-center mt-3">Select , buy , sell and earn</h3>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div class="col d-flex align-items-start">
            <div className="text-center">
              <img src={icon1} style={imgWidth} alt="" />
              <p class="p-20 mt-4 fw-bold">Explore and find NFTs</p>
              <p className="p-16">
                Explore the Pakistan famous footballs’ NFTs and add your
                favoutites to wishlist.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div className="text-center">
              <img src={icon2} style={imgWidth} alt="" />
              <p class="p-20 mt-4 fw-bold">Connect wallet</p>
              <p className="p-16">
                Click on the connect wallet button at the top to connect a
                wallet of your choice.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div className="text-center">
              <img src={icon3} style={imgWidth} alt="" />
              <p class="p-20 mt-4 fw-bold">Buy your favourite NFTs</p>
              <p className="p-16">
                Once you connect with the wallet then start buying the NFTs of
                your choice by clicking buy button.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div className="text-center">
              <img src={icon4} style={imgWidth} alt="" />
              <p class="p-20 mt-4 fw-bold">Sell your NFTs</p>
              <p className="p-16">
                After buyinng you can starting selling NFTs whenever you feel
                great advantage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container'>
        <h3 className='text-center mb-3'>Select , buy , sell and earn</h3>
            <div className='row'>
                <div className='col-3 text-center marketPlace'>
                <div className="card col-3 p-2 my-2 mx-2" style={cardWidth}>
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wrxVz5A04Jp2ihkBC8eQEvY0vxUdC0gSLg&usqp=CAU" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">NFTs Name</h5>
                            <p className="card-text">By @ Owner</p>
                        </div>
                        <div className="d-flex justify-content-between bg-secondary bg-opacity-25 rounded-2 px-2 py-2">
                            <div>
                                <p>price</p>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <ImDiamonds />
                                    <p>0.00005 ETH</p>
                                </div>
                                <div>
                                    <p className='text-end me-1'>$3.6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3 text-center marketPlace'>2nd market</div>
                <div className='col-3 text-center marketPlace'>thrd market</div>
                <div className='col-3 text-center marketPlace'>4th market</div>
            </div>
        </div> */}
    </>
  );
}

export default MarketCategory;
