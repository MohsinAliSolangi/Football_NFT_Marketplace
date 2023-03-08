import "./navbar.css";
import Img from "../../assets/images/profile.svg";
import img1 from "../../assets/images/meta-fox.svg";
import img2 from "../../assets/images/Glow.svg";
import img3 from "../../assets/images/Phanton.svg";
import img4 from "../../assets/images/solf.svg";
import Cross from "../../assets/images/cross.svg";
const crossSize = {
  width: "30px",
  height: "30px",
};
const iconSize = {
  width: "24px",
  height: "24px",
};

function Modal({ setPopUp }) {
  const closePopUp = () => {
    setPopUp(false);
  };
  return (
    <>
      <div className="overlay" onClick={closePopUp}>
        <div className="border card3 p-4 shadow-lg rounded-3 ">
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
              />
              Metamask
            </button>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img2}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />
              Glow
            </button>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img3}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />
              Phantom
            </button>
            <button className="btn border w-100 btn-lg my-2 text-start d-flex align-items-center shadow-sm ">
              <img
                src={img4}
                style={iconSize}
                className="img-fluid fox me-4"
                alt=""
              />
              Solflare
            </button>
          </div>{" "}
          <span className="text-black cross" onClick={closePopUp}>
            <img src={Cross} style={crossSize} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Modal;
