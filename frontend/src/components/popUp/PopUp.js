import img1 from "../../assets/images/meta-fox.svg";
import img2 from "../../assets/images/Glow.svg";
import img3 from "../../assets/images/Phanton.svg";
import img4 from "../../assets/images/solf.svg";

const iconSize = {
  width: "24px",
  height: "24px",
};

function PopUp() {
  return (
    <div className="overlay ">
      <div className="row vh-100 d-flex align-content-center align-items-center justify-content-center ">
        <div className="border bg-white p-4 shadow-lg rounded-3 col-lg-6 col-md-6 col-12  h-auto">
          <div className="w-75 mx-auto d-flex flex-column align-items-center">
            <p className="p-2 fw-bold">Connect to wallet</p>
            <p className="p-18 text-center">
              Kindly a wellet from the followings list. No need to sign up with
              extra data.
            </p>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img1}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />{" "}
              Metamask
            </button>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img2}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />{" "}
              Glow
            </button>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img3}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />{" "}
              Phantom
            </button>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img4}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />{" "}
              Solflare
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default PopUp;
