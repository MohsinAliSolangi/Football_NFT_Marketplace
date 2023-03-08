import img1 from "../../assets/images/ball.png";
import img2 from "../../assets/images/sollogo.svg";

const iconSize = {
  width: "88px",
  height: "88px",
};
const iconSize1 = {
  width: "31px",
  height: "24px",
};

function PopUp() {
  return (
    <div className="bg-light">
      <div className="row vh-100 d-flex  align-items-center justify-content-center ">
        <div className=" border bg-white p-4 shadow-lg rounded-3 col-lg-6 col-md-8 col-11  h-auto">
          <div className="w-75 mx-auto d-flex flex-column">
            <p className="p-22 text-center">Checkout</p>
            <p className="p-18 text-center">
              You are going to use your wallet
              <span className="text-info">13df55...6fgt6</span> with available
              balance 150.00 SOL to purchase the following item:
            </p>
            <div className="row border rounded-3 shadow-sm pt-2">
              <div className="col-md-8 d-flex col-lg-8 col-12 ">
                <img
                  src={img1}
                  style={iconSize}
                  className="rounded-3"
                  alt="Ball Nfts"
                />
                <div className="d-flex ps-4 flex-column">
                  <p className="p-18 fw-bold">Master Blaster Football</p>
                  <p className="p-16">Umair Shabbir</p>
                  <p className="p-16 text-muted">Creator earnings: 10%</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-12 ">
                <div className="d-flex ms-4">
                  <div className="pt-2">
                    <img
                      src={img2}
                      style={iconSize1}
                      alt="etheriem"
                      className="eth"
                    />
                  </div>
                  <div className="ps-2">
                    <h1 className="h1-28">58.56 </h1>
                    {/* <p className="p-16 ">SOL</p> */}
                    <p className="p-16 text-muted pt-2">=$84.98</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 form-check mt-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label
                  className=" p-16 form-check-label"
                  htmlFor="same-address"
                >
                  I confirm this purchase with its
                  <span className="text-info">Terms and Conditions</span>
                </label>
              </div>
            </div>{" "}
            <button className="btn mt-4 btn-info text-white w-100 btn-lg ">
              Buy Now
            </button>
            <p className="p-16 mt-3">
              <span className="text-danger">Note:</span> once the transaction is
              performed, the process can not be reversed. Make sure all the
              details are right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
