import img1 from "../../assets/images/successful.svg";

const iconSize = {
  width: "100px",
  height: "100px",
};

function PopUp() {
  return (
    <div className="bg-light">
      <div className="row vh-100 d-flex align-content-center align-items-center justify-content-center ">
        <div className="border bg-white pt-5 shadow-lg rounded-3 col-lg-6 col-md-8 col-11 mx-auto h-auto">
          <div className="w-75 mx-auto d-flex flex-column align-items-center justify-content-center">
            <img
              src={img1}
              style={iconSize}
              className="img-fluid fox me-4"
              alt=""
            />
            <p className="p-22 mt-4 ">Transcation confirmed</p>
            <p className="p-18 text-center">
              Congratulation! your transaction has been performed successfully.
            </p>
            <button className="btn my-5 btn-info py-3 text-white w-100 btn-lg ">
              Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
