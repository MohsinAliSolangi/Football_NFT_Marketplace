import "./newNFTs.css";
import New from "../../assets/images/new.png";

const imgSize = {
  width: "380px",
  height: "420px",
};

function NewNFTs() {
  return (
    <section className="container-fluid bg-blur2 my-5 py-5 ">
      <div className="row px-4">
        <div className="col-lg-4 col-md-4 col-12 position-relative text-white">
          <div className="newImg"></div>
          <div className="imgBox d-flex justify-content-around align-items-center">
            <div className="d-flex flex-column col-5">
              <p className="p-12 pt-4">Price</p>
              <p className="p-16">0.25 ETH</p>
            </div>
            <div className="col-4">
            <p className="p-16 pt-4">Cultural Football</p>
            </div>
          </div>
          {/* <img
            src={New}
            alt=""
            style={imgSize}
            className="img-fluid rounded-4"
          /> */}
        </div>
        {/* ps-md-5 text-sm-center text-center text-md-start text-lg-start */}
        <div className="col-lg-6 col-md-6 col-12 ps-5">
          <div className="d-flex flex-column pt-4">
            <h1 className="h1-40">Launching soon...</h1>
            <p className="p-16 pt-3">
              Cultural Football, a Pakistani art based football NFT is launching
              soon with amazing offer of 10% discount on the first 3 days after
              its launch. Mark your calendar and grab this opportunity.
            </p>
          </div>
          <div className="row pt-4 ps-2 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 px-0 text-white timeBox rounded-4 d-flex flex-column justify-content-center align-items-center">
              <h1 className="h1-56">05</h1>
              <p className="p-20 fw-light">DAYS</p>
            </div>{" "}
            <div className="col-md-2 col-lg-2 px-0 text-white timeBox rounded-4 d-flex flex-column justify-content-center align-items-center">
              <h1 className="h1-56">12</h1>
              <p className="p-20 fw-light">HOURS</p>
            </div>{" "}
            <div className="col-md-2 col-lg-2 px-0 text-white timeBox rounded-4 d-flex flex-column justify-content-center align-items-center">
              <h1 className="h1-56">36</h1>
              <p className="p-20 fw-light">MINUTES</p>
            </div>{" "}
            <div className="col-md-2 col-lg-2 px-0 text-white timeBox rounded-4 d-flex flex-column justify-content-center align-items-center">
              <h1 className="h1-56">19</h1>
              <p className="p-20 fw-light">SECONDS</p>
            </div>
          </div>
          <p className="p-16 mt-5">
            This a limited time offer and will be awarded to the first person
            who buys it within 3 days of its launch.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewNFTs;
