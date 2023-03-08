import React from 'react'
import "./NftsCss.css"
import img1 from "../../assets/nftsHero/Rectangle 196.png"
import img2 from "../../assets/nftsHero/Rectangle 196 (1).png"
import img3 from "../../assets/nftsHero/Rectangle 196 (2).png"

function NftsHero() {
  
  return (
    <section className="nftsHero">
      <div className="container1 mt-5">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center">
            <h1 className="h1-36 fw-bolder">
              Hey Arooba, <br /> Want an NFT which is Exclusive, Affordable &
              Artistic?
              <span style={{ color: "#931acc" }}> GOTCHA!</span>
            </h1>
          </div>
          <div className="colo-lg-7 col-md-7 col-sm-12 col-12 mt-sm-4 mt-4">
            <section id="slider">
              <input type="radio" name="slider" id="s1" checked />
              <input type="radio" name="slider" id="s2" />
              <input type="radio" name="slider" id="s3" />
              <input type="radio" name="slider" id="s4" />
              <input type="radio" name="slider" id="s5" />

              <label for="s1" id="slide1">
                <img className="img-daimention" src={img1} alt="" />
              </label>
              <label for="s2" id="slide2">
                <img className="img-daimention" src={img2} alt="" />
              </label>
              <label for="s3" id="slide3">
                <img className="img-daimention" src={img3} alt="" />
              </label>
              <label for="s4" id="slide4">
                <img className="img-daimention" src={img1} alt="" />
              </label>
              <label for="s5" id="slide5">
                <img className="img-daimention" src={img2} alt="" />
              </label>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftsHero