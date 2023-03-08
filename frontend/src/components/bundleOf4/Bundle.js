import "./bundle.css";
import img1 from "../../assets/images/sollogo.svg";
import img2 from "../../assets/images/bundle.png";

const imgsSize = {
  height: "62px",
};
const buttonW = {
  width: "300px",
};
const colW = {
  width: "444px",
};
export default function Bundle() {
  return (
    <div className="container1 my-4">
      <h1 className="h1-32">Bundle of 4 </h1>
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-md-6 col-lg-6 me-auto">
          <p className="p-20">
            Owned by :
            <span className="text-info">Umair Shabbir Wali Muhammad</span>
          </p>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="d-flex ms-lg-5 ms-5 ms-lg-5">
            <div>
              <img src={img1} style={imgsSize} alt="etheriem" className="eth" />
            </div>
            <div className="d-flex ">
              <div className="ms-3">
                <h1 className="h1-28">180 SOL</h1>
                <p className="p-16 ">=$84.98</p>
              </div>
              <div className="ms-5">
                <button
                  style={buttonW}
                  className="btn btn-info text-white btn-lg ms-2 "
                >
                  Bundle Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-4 px-4 py-4 my-2">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-12">
            <div class="card border-0" style={colW}>
              <img
                class="card-img-top rounded-3"
                src={img2}
                alt="Card image cap"
              />
              <div class="card-body Bginfo border rounded-4 mt-3">
                <h5 class="p-24">
                  {/* <i class="fa-regular fa-triangle-person-digging"></i>*/}
                  {/* <img src={img3} alt="details" /> */}
                  Details
                </h5>
                <div className="d-flex pt-2 justify-content-between">
                  <p class="p-16">Contact address</p>
                  <p class="p-16 text-info">123hdfiu..fasg</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Blockchain</p>
                  <p class="p-16">Solana</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Creator earnings</p>
                  <p class="p-16">10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 mt-5 mt-md-0 mt-lg-0">
            <p className="p-20 mt-0">Singular NFT price</p>
            <div className="d-flex">
              <div>
                <img src={img1} alt="etheriem" className="eth" />
              </div>
              <div className="ms-5 ">
                <h1 className="h1-28">58.56 SOL</h1>
                <p className="p-16 pb-2">=$84.98</p>
              </div>
            </div>
            <p className="p-20 mt-3">Description</p>
            <p className="p-16 mt-3 ">
              Created by : <span className="text-info">Junaid Khan</span>
            </p>
            <p className="p-26 w-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis dolores quibusdam nihil, commodi quas similique
              dignissimos eius culpa sequi, molestias at. Error corporis
              dignissimos placeat voluptas quod vero saepe molestias delectus
              dolores? Officiis assumenda magni cupiditate obcaecati itaque
              voluptatibus animi sed iste qui beatae enim consequuntur, iure
              pariatur sint aliquid.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-5 col-lg-5 col-12">
            <div class="card border-0" style={colW}>
              <img
                class="card-img-top rounded-3"
                src={img2}
                alt="Card image cap"
              />
              <div class="card-body Bginfo border rounded-4 mt-3">
                <h5 class="p-24">
                  {/* <i class="fa-regular fa-triangle-person-digging"></i>*/}
                  {/* <img src={img3} alt="details" /> */}
                  Details
                </h5>
                <div className="d-flex pt-2 justify-content-between">
                  <p class="p-16">Contact address</p>
                  <p class="p-16 text-info">123hdfiu..fasg</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Blockchain</p>
                  <p class="p-16">Solana</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Creator earnings</p>
                  <p class="p-16">10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 mt-5 mt-md-0 mt-lg-0">
            <p className="p-20 mt-0">Singular NFT price</p>
            <div className="d-flex">
              <div>
                <img src={img1} alt="etheriem" className="eth" />
              </div>
              <div className="ms-5 ">
                <h1 className="h1-28">58.56 SOL</h1>
                <p className="p-16 pb-2">=$84.98</p>
              </div>
            </div>
            <p className="p-20 mt-3">Description</p>
            <p className="p-16 mt-3 ">
              Created by : <span className="text-info">Junaid Khan</span>
            </p>
            <p className="p-26 w-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis dolores quibusdam nihil, commodi quas similique
              dignissimos eius culpa sequi, molestias at. Error corporis
              dignissimos placeat voluptas quod vero saepe molestias delectus
              dolores? Officiis assumenda magni cupiditate obcaecati itaque
              voluptatibus animi sed iste qui beatae enim consequuntur, iure
              pariatur sint aliquid.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-5 col-lg-5 col-12">
            <div class="card border-0" style={colW}>
              <img
                class="card-img-top rounded-3"
                src={img2}
                alt="Card image cap"
              />
              <div class="card-body Bginfo border rounded-4 mt-3">
                <h5 class="p-24">
                  {/* <i class="fa-regular fa-triangle-person-digging"></i>*/}
                  {/* <img src={img3} alt="details" /> */}
                  Details
                </h5>
                <div className="d-flex pt-2 justify-content-between">
                  <p class="p-16">Contact address</p>
                  <p class="p-16 text-info">123hdfiu..fasg</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Blockchain</p>
                  <p class="p-16">Solana</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Creator earnings</p>
                  <p class="p-16">10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 mt-5 mt-md-0 mt-lg-0">
            <p className="p-20 mt-0">Singular NFT price</p>
            <div className="d-flex">
              <div>
                <img src={img1} alt="etheriem" className="eth" />
              </div>
              <div className="ms-5 ">
                <h1 className="h1-28">58.56 SOL</h1>
                <p className="p-16 pb-2">=$84.98</p>
              </div>
            </div>
            <p className="p-20 mt-3">Description</p>
            <p className="p-16 mt-3 ">
              Created by : <span className="text-info">Junaid Khan</span>
            </p>
            <p className="p-26 w-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis dolores quibusdam nihil, commodi quas similique
              dignissimos eius culpa sequi, molestias at. Error corporis
              dignissimos placeat voluptas quod vero saepe molestias delectus
              dolores? Officiis assumenda magni cupiditate obcaecati itaque
              voluptatibus animi sed iste qui beatae enim consequuntur, iure
              pariatur sint aliquid.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-5 col-lg-5 col-12">
            <div class="card border-0" style={colW}>
              <img
                class="card-img-top rounded-3"
                src={img2}
                alt="Card image cap"
              />
              <div class="card-body Bginfo border rounded-4 mt-3">
                <h5 class="p-24">
                  {/* <i class="fa-regular fa-triangle-person-digging"></i>*/}
                  {/* <img src={img3} alt="details" /> */}
                  Details
                </h5>
                <div className="d-flex pt-2 justify-content-between">
                  <p class="p-16">Contact address</p>
                  <p class="p-16 text-info">123hdfiu..fasg</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Blockchain</p>
                  <p class="p-16">Solana</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p class="p-16">Creator earnings</p>
                  <p class="p-16">10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 mt-5 mt-md-0 mt-lg-0">
            <p className="p-20 mt-0">Singular NFT price</p>
            <div className="d-flex">
              <div>
                <img src={img1} alt="etheriem" className="eth" />
              </div>
              <div className="ms-5 ">
                <h1 className="h1-28">58.56 SOL</h1>
                <p className="p-16 pb-2">=$84.98</p>
              </div>
            </div>
            <p className="p-20 mt-3">Description</p>
            <p className="p-16 mt-3 ">
              Created by : <span className="text-info">Junaid Khan</span>
            </p>
            <p className="p-26 w-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis dolores quibusdam nihil, commodi quas similique
              dignissimos eius culpa sequi, molestias at. Error corporis
              dignissimos placeat voluptas quod vero saepe molestias delectus
              dolores? Officiis assumenda magni cupiditate obcaecati itaque
              voluptatibus animi sed iste qui beatae enim consequuntur, iure
              pariatur sint aliquid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
