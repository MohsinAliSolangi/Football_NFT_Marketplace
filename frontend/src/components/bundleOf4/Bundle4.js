import "../nftsCards/nftsCards.css";
import img from "../../assets/images/profile1.png";
import img1 from "../../assets/images/profile3.png";
import img2 from "../../assets/images/profile2.png";
import img3 from "../../assets/images/profile.png";
import img4 from "../../assets/newNfts/new1.png";
import img5 from "../../assets/newNfts/nft.png";
import img6 from "../../assets/newNfts/nft1.png";
import img7 from "../../assets/newNfts/nft2.png";
import img8 from "../../assets/newNfts/nft3.png";
import img9 from "../../assets/newNfts/nft4.png";
import img10 from "../../assets/images/ball.png";
import heart from "../../assets/images/heart.svg";
import { ImDiamonds } from "react-icons/im";
const imgSize = { width: "20px", height: "18.33px" };
const imgSize1 = { width: "135px", height: "138px" };
const imgSize2 = { width: "274px", height: "138px" };

function Bundle4() {
  return (
    <div className="container1 mt-5 mb-4">
      <h1 className="h1-32">Bundle Buy</h1>
      <div className="row flex-wrap justify-content-evenly">
        <div
          className="rounded-3 col-lg-3 border card2 col-md-3 py-2  col-sm-4 p-2 my-3 d-flex 
        flex-column justify-content-center align-items-center "
        >
          <div>
            <div className="heart d-flex flex-column align-items-center justify-content-center rounded-3">
              <img src={heart} style={imgSize} alt="" />
            </div>
            <div className="d-flex pb-2">
              <img
                className="img1 pe-1"
                style={imgSize1}
                src={img}
                alt="Card image cap"
              />
              <img
                className="img2 ps-1"
                style={imgSize1}
                src={img1}
                alt="Card image cap"
              />
            </div>
            <div className="d-flex">
              <img
                className="img3 pe-1"
                style={imgSize1}
                src={img2}
                alt="Card image cap"
              />
              <img
                className="img4 ps-1"
                style={imgSize1}
                src={img3}
                alt="Card image cap"
              />
            </div>

            <div className="">
              <p className="p-16 mt-1">NFTs Name</p>
              <p className="p-12  ">
                <span className="text-info fw-bold">By @ Owner</span>
              </p>
            </div>
            <div className="d-flex justify-content-between Bgsecond p-1  rounded-2">
              <div>
                <p className="p-16 mt-0">price</p>
              </div>
              <div>
                <div className="d-flex">
                  <p className="p-12 mt-1">
                    <span
                      className="text-danger"
                      style={{ textDecoration: "line-through" }}
                    >
                      101.23 SOL
                    </span>
                  </p>
                  <p className="p-16 mt-0 ps-4">
                    <span className="small">Now</span>{" "}
                    <span className="text-success">90.23 SOL</span>
                  </p>
                </div>
                <div>
                  <p className="text-end p-12">≈$ 83.06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-3 col-lg-3 border card2 col-md-3 py-2 col-sm-4 p-2 my-3 d-flex 
        flex-column justify-content-center align-items-center "
        >
          <div>
            <div className="heart d-flex flex-column align-items-center justify-content-center rounded-3">
              <img src={heart} style={imgSize} alt="" />
            </div>
            <div className="pb-2">
              <img
                className="img13 pe-1"
                style={imgSize2}
                src={img4}
                alt="Card image cap"
              />
            </div>
            <div className="d-flex">
              <img
                className="img3 pe-1"
                style={imgSize1}
                src={img6}
                alt="Card image cap"
              />
              <img
                className="img4 ps-1"
                style={imgSize1}
                src={img3}
                alt="Card image cap"
              />
            </div>

            <div className="">
              <p className="p-16 mt-1">NFTs Name</p>
              <p className="p-12  ">
                <span className="text-info fw-bold">By @ Owner</span>
              </p>
            </div>
            <div className="d-flex justify-content-between Bgsecond p-1  rounded-2">
              <div>
                <p className="p-16 mt-0">price</p>
              </div>
              <div>
                <div className="d-flex">
                  <p className="p-12 mt-1">
                    <span
                      className="text-danger"
                      style={{ textDecoration: "line-through" }}
                    >
                      101.23 SOL
                    </span>
                  </p>
                  <p className="p-16 mt-0 ps-4">
                    <span className="small">Now</span>{" "}
                    <span className="text-success">90.23 SOL</span>
                  </p>
                </div>
                <div>
                  <p className="text-end p-12">≈$ 83.06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-3 col-lg-3 border card2 col-md-3 py-2 col-sm-4 p-2 my-3 d-flex 
        flex-column justify-content-center align-items-center "
        >
          <div>
            <div className="heart d-flex flex-column align-items-center justify-content-center rounded-3">
              <img src={heart} style={imgSize} alt="" />
            </div>
            <div className="d-flex pb-2">
              <img
                className="img1 pe-1"
                style={imgSize1}
                src={img7}
                alt="Card image cap"
              />
              <img
                className="img2 ps-1"
                style={imgSize1}
                src={img1}
                alt="Card image cap"
              />
            </div>
            <div className="d-flex">
              <img
                className="img3 pe-1"
                style={imgSize1}
                src={img8}
                alt="Card image cap"
              />
              <img
                className="img4 ps-1"
                style={imgSize1}
                src={img5}
                alt="Card image cap"
              />
            </div>

            <div className="">
              <p className="p-16 mt-1">NFTs Name</p>
              <p className="p-12  ">
                <span className="text-info fw-bold">By @ Owner</span>
              </p>
            </div>
            <div className="d-flex justify-content-between Bgsecond p-1  rounded-2">
              <div>
                <p className="p-16 mt-0">price</p>
              </div>
              <div>
                <div className="d-flex">
                  <p className="p-12 mt-1">
                    <span
                      className="text-danger"
                      style={{ textDecoration: "line-through" }}
                    >
                      101.23 SOL
                    </span>
                  </p>
                  <p className="p-16 mt-0 ps-4">
                    <span className="small">Now</span>{" "}
                    <span className="text-success">90.23 SOL</span>
                  </p>
                </div>
                <div>
                  <p className="text-end p-12">≈$ 83.06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-3 col-lg-3 border card2 col-md-3 py-2 col-sm-4 p-2 my-3 d-flex 
        flex-column justify-content-center align-items-center "
        >
          <div>
            <div className="heart d-flex flex-column align-items-center justify-content-center rounded-3">
              {/* <img src={heart} style={imgSize} alt="" /> */}
            </div>
            <div className="d-flex pb-2">
              <img
                className="img1 pe-1"
                style={imgSize1}
                src={img9}
                alt="Card image cap"
              />
              <img
                className="img2 ps-1"
                style={imgSize1}
                src={img1}
                alt="Card image cap"
              />
            </div>
            <div className="d-flex">
              <img
                className="img3 pe-1"
                style={imgSize1}
                src={img2}
                alt="Card image cap"
              />
              <img
                className="img4 ps-1"
                style={imgSize1}
                src={img10}
                alt="Card image cap"
              />
            </div>

            <div className="">
              <p className="p-16 mt-1">NFTs Name</p>
              <p className="p-12  ">
                <span className="text-info fw-bold">By @ Owner</span>
              </p>
            </div>
            <div className="d-flex justify-content-between Bgsecond p-1  rounded-2">
              <div>
                <p className="p-16 mt-0">price</p>
              </div>
              <div>
                <div className="d-flex">
                  <p className="p-12 mt-1">
                    <span
                      className="text-danger"
                      style={{ textDecoration: "line-through" }}
                    >
                      101.23 SOL
                    </span>
                  </p>
                  <p className="p-16 mt-0 ps-4">
                    <span className="small">Now</span>{" "}
                    <span className="text-success">90.23 SOL</span>
                  </p>
                </div>
                <div>
                  <p className="text-end p-12">≈$ 83.06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn fw-bold btn-lg  border-primary1 text-info1 px-5 mb-5 py-2 mt-3  rounded-2">
          See more
        </button>
      </div>
    </div>
  );
}

export default Bundle4;
