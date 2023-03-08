import "./aboutUs.css";
import comma1 from "../../assets/sialkot/comma1.svg";
import comma from "../../assets/sialkot/comma.svg";
import sialkot from "../../assets/sialkot/sialkot.png";
import { useState } from "react";

const commaSize = {
  width: "auto",
  height: "22px",
};

// const cardSize = {
//   width: "620px",
//   height: "372px",
// };
function Sialkot() {
  return (
    <section>
      <div className="container1 my-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-around">
            <div className="d-flex align-items-center">
              <div className="pillar btn-info1 "></div>
              <h1 className="ms-3 h1-40">Made in Sialkot, Pakistan</h1>
            </div>
            <div
              className="mt-5 pt-3  rounded-4 shadow p-5 d-flex flex-column justify-content-center align-items-center"
              // style={cardSize}
            >
              <img
                src={comma1}
                style={commaSize}
                alt=""
                className="img-fluid d-flex justify-content-start"
              />
              <p className="p-16 pt-4 ps-5 ">
                (SCCI) Senior Vice President Sheikh Zohaib Rafique Sethi said
                that Sialkot made football “Al Rihla” would be used in the FIFA
                World Cup 2022 to be played in Qatar.
                <br />
                <br />
                <br />
                Sialkot-based leading exports firm “Forward Sports” had produced
                “Al Rihla” football for Adidas which would be played officially
                in FIFA football World Cup-2022 as it was a great pride for
                Sialkot and even for Pakistan.
              </p>
              <img src={comma} style={commaSize} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={sialkot} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sialkot;
