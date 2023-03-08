import img1 from "../../assets/images/faqs.svg";
import Navbar from "../navbar/Navbar";
const imgSize = {
  width: "26px",
  height: "26px",
};

function FAQs() {
  return (
    <>
    <Navbar />
    <div className="container2 my-5 pt-5 vh-100" id="faqs">
      <h1 className="h1-40">Frequently asked questions (FAQs)</h1>
      <div className="d-flex justify-content-between mt-5">
        <p className="p-24 fw-normal  mt-4">What is an NFT?</p>
        <img src={img1} className="img-fluid mt-4" style={imgSize} alt="" />
      </div>
      <hr className="style1" />
      <div className="d-flex justify-content-between mt-5">
        <p className="p-24 fw-normal ">How to connect wallet?</p>
        <img src={img1} className="img-fluid" style={imgSize} alt="" />
      </div>
      <hr className="style1" />
      <div className="d-flex justify-content-between mt-5">
        <p className="p-24 fw-normal ">Is Hypermode secure & safe to use?</p>
        <img src={img1} className="img-fluid" style={imgSize} alt="" />
      </div>
      <hr className="style1" />
      <div className="d-flex justify-content-between mt-5">
        <p className="p-24 fw-normal ">How can I contact Hypermode?</p>
        <img src={img1} className="img-fluid" style={imgSize} alt="" />
      </div>
      <hr className="style1" />
    </div>
    </>
  );
}

export default FAQs;
