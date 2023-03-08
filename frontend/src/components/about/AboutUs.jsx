import "./aboutUs.css";
import team2 from "../../assets/team2.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const marginTopAbout = {
  marginTop: "5rem",
};

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutUs mb-5 " id="aboutUs" style={marginTopAbout}>
        <div className="container1">
          <h1 className="h1-32">Meet our Team</h1>
          <p className="p-24">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            necessitatibus nam ab aperiam ratione. Ut dolorum aspernatur placeat
            ad recusandae! Recusandae illum necessitatibus dolor. Nemo quasi
            enim .
          </p>
          <div className="row team-card mt-5 d-flex border rounded-5 p-5">
            <div className="col-lg-4 col-md-6 team-img">
              <img
                className="rounded-circle img-fluid "
                src={team2}
                alt="Team member pic"
              />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12  mt-sm-5 mt-md-0 mt-5 m-sm-auto m-auto text-sm-center text-center text-md-start text-lg-start ps-4 fw-bold">
              <h1 className="h1-32 fw-bold">Junaid Khan</h1>
              <p className="p-20 text-danger fw-bold">Front end Developer</p>
              <p className="p-24 pt-5  fw-bold">Role in this project:</p>
              <p className="p-20 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                possimus nesciunt laudantium earum natus odio voluptatum numquam
              </p>
              <div className="social position-absolute top-0 end-0 me-lg-5">
                <ul className="list-unstyled d-flex justify-content-start mt-5">
                  <li className="ms-0">
                    <a className="link-dark" href="#">
                      <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/*   <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-lg-4 col-md-6 team-img">
            <img
              className="rounded-circle "
              src={team2}
              alt="Team member pic"
            />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12  mt-sm-5 mt-md-0 mt-5 m-sm-auto m-auto text-sm-center text-center text-md-start text-lg-start ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-lg-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-lg-4 col-md-6 team-img">
            <img
              className="rounded-circle "
              src={team2}
              alt="Team member pic"
            />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12  mt-sm-5 mt-md-0 mt-5 m-sm-auto m-auto text-sm-center text-center text-md-start text-lg-start ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-lg-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-lg-4 col-md-6 team-img">
            <img
              className="rounded-circle "
              src={team2}
              alt="Team member pic"
            />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12  mt-sm-5 mt-md-0 mt-5 m-sm-auto m-auto text-sm-center text-center text-md-start text-lg-start ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-lg-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
           <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row team-card mt-5 d-flex border rounded-5 p-5">
          <div className="col-md-4 team-img">
            <img className="rounded-circle" src={team2} alt="Team member pic" />
          </div>
          <div className="col-md-8 ps-4 fw-bold">
            <h1 className="h1-32 fw-bold">Junaid Khan</h1>
            <p className="p-20 text-danger fw-bold">Front end Developer</p>
            <p className="p-24 pt-5  fw-bold">Role in this project:</p>
            <p className="p-20 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              possimus nesciunt laudantium earum natus odio voluptatum numquam
            </p>
            <div className="social position-absolute top-0 end-0 me-5">
              <ul className="list-unstyled d-flex justify-content-start mt-5">
                <li className="ms-0">
                  <a className="link-dark" href="#">
                    <FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
