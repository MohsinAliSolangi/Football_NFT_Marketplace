import "./aboutUs.css";

import sial1 from "../../assets/sialkot/sial.webp";
import sial2 from "../../assets/sialkot/sial3.jpg";
import sial3 from "../../assets/sialkot/sial4.webp";

const imgSize = {
  width: "190px",
  height: "190px",
};

function SialStory() {
  return (
    <section className="Bgsecond p-5">
      <div className="container1">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <h1 className="h1-36">Sialkot, Home of world cup football.</h1>
            <p className="p-18 fw-bold mt-5">
              Sialkot, a city located in Punjab province in eastern Pakistan,
              produces seventy percent of hand-stitched footballs in the world,
              according to the Guardian. <br /> <br />
              It is regarded as the world capital of football production and was
              the official football provider for both 2014 World Cup in Brazil
              and 2018 World Cup in Russia. <br />
              <br /> The material used in its manufacturing was a bio-based
              recycling material. No solvent chemicals were used in football
              making but water-based chemicals were used which do not pollute
              the environment. The ball consists of 20 panels was declared one
              of the best footballs in the world.
            </p>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="row mt-0">
              <div className=" mt-0 col-lg-6 col-md-6 d-flex flex-column justify-content-between align-items-center">
                <img
                  src={sial3}
                  className="rounded-circle"
                  style={imgSize}
                  alt=""
                />
                <img
                  src={sial1}
                  className="rounded-circle mt-3"
                  style={imgSize}
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-6  d-flex flex-column justify-content-center align-items-center">
                <img
                  src={sial2}
                  className="rounded-circle"
                  style={imgSize}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SialStory;
