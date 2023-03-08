import React from "react";
import "./footer.css"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="btn-bg rounded-top-5">
        <div className="container footer">
          <footer>
            <div className="row d-flex pt-5">
              <div className="col-md-6 offset-md-0 mb-3">
                <form>
                  <h1 className=" text-white">Never miss a news</h1>
                  <p className=" text-white">
                    Subscribe to our newsletter for getting latest update about
                    NFTs.
                  </p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-lg-0 gap-md-0 gap-sm-0 gap-2 mt-4">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn bg-info bg-opacity-75" type="button">
                      Subscribe
                    </button>
                  </div>
                  <div className="form-check mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="same-address"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="same-address"
                    >
                      By sunscribing i agree to the Privacy Notice and Terms and
                      Conditions of the website
                    </label>
                  </div>
                </form>
              </div>

              <div className=" col-md-5 offset-md-1 mb-3 ">
                <h1 className=" text-white">Join our community</h1>
                <p className="p-16 text-white">
                  Be a part of our community by joining us at:
                </p>
                <ul className="list-unstyled d-flex justify-content-start mt-4">
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

            <div className="d-flex flex-column flex-sm-row justify-content-between py-3 mt-3 border-top">
              <p className="text-white">
                © 2022 Company, Inc. All rights reserved.
              </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-white text-decoration-none" href="#">
                    Privacy policy
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-white text-decoration-none" href="#">
                    Terms & conditions
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-white text-decoration-none" href="#">
                    Help center
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
