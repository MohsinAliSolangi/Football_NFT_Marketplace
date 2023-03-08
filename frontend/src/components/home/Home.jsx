import "./home.css";

export default function Home() {
  return (
    <>
      <section className="section mt-md-5" id="home">
        <div className="container1">
          <div className="row home position-relative ">
            <div
              className="col-md-6 col-lg-6 col-sm-10 m-sm-auto m-auto text-sm-center
             text-center text-md-start text-lg-start text-white min-vh-100 d-flex flex-column
               justify-content-center"
            >
              <h1 className="h1-40  mt-5 mb-3">
                Presenting you the world famous footballs’ Collection from
                Pakistan
              </h1>
              {/* <p className="p-16 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                atque optio minima, quisquam asperiores harum consequatur modi
                laudantium aliquam ut reprehenderit veniam, quia assumenda eos
                harum, accusantium cupiditate quod libero, quidem vero suscipit!
              </p> */}
              <div className="buttons mt-5 ">
                <button className="btn btn-gradient w-50 py-3 text-white fw-bold">
                  Explore
                </button>
                {/* <button className="btn btn-info1 btn-info-home  px-5 ms-5 text-white fw-bold">
                  Sign In
                </button> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 right">
              {/* <img
                className="img-fluid w-100 rounded-circle"
                src="https://s1.dmcdn.net/v/6y-F61LUvSZ2T3Ey4/x1080"
                alt="footballs insialkot"
              /> */}
            </div>
          </div>
          <div className="bottom pb-3">
            {/* <p className="fw-bolder fs-5 text-white text-center">
              A New NFTs <span className="text-info1"> Powernig Pakistan </span>
              will be Available in 20:34:45
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
