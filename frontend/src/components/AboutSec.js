import Team from "./about/Team";
import Sialkot from "./about/Sialkot";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import SialStory from "./about/SialStory";

function AboutSec() {
  return (
    <div className="mt-5 pt-5">
      <Navbar />
      <Team />
      <Sialkot />
      <SialStory />
      <Footer />
    </div>
  );
}

export default AboutSec;
