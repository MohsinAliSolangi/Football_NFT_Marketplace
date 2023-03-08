import "./aboutUs.css";
import team2 from "../../assets/team/team2.jpg";
import team1 from "../../assets/team/team1.png";
import team3 from "../../assets/team/team3.webp";
import team4 from "../../assets/team/team4.webp";
import team5 from "../../assets/team/salah.jpg";
import team6 from "../../assets/team/mudassir.jpg"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";

const imgSize = {
  width: "180px",
  height: "180px",
};
const cardSize = {
  width: "400px",
  height: "410px",
};

const teamData1 = [
  {
    id: "1",
    teamImage: team5,
    teamMemberName: "Salahuddin Khawaja",
    role: "Crypto expert"
  },
  {
    id: "2",
    teamImage: team1,
    teamMemberName: "Arooba Ali",
    role: "Project Manager"
  },
]
const teamData = [
  {
    id: "1",
    teamImage: team6,
    teamMemberName: "MudassirRehman",
    role: "Front End developer"
  },
  {
    id: "2",
    teamImage: team2,
    teamMemberName: "Junaid khan",
    role: "Front End developer"
  },
  {
    id: "3",
    teamImage: team1,
    teamMemberName: "Salahuddin Khawaja",
    role: "Crypto expert"
  },
  {
    id: "4",
    teamImage: team1,
    teamMemberName: "Salahuddin Khawaja",
    role: "Crypto expert"
  },
  {
    id: "5",
    teamImage: team1,
    teamMemberName: "Salahuddin Khawaja",
    role: "Crypto expert"
  },
  {
    id: "6",
    teamImage: team1,
    teamMemberName: "Salahuddin Khawaja",
    role: "Crypto expert"
  },
]

function Team() {
  return (
    <div className="container1 my-5 pb-5">
      <div className="d-flex align-items-center">
        <div className="pillar btn-info1 "></div>
        <h1 className="ms-3 h1-40">Meet our Team</h1>
      </div>
      <div className="row teamSec rows my-4 d-flex justify-content-center">
        {teamData1.map((data) => (
          <div key={data.id}
            style={cardSize}
            className="col-md-4 col-sm-6 col-lg-4 pt-3 rounded-4 shadow1 mx-3 d-flex flex-column justify-content-center align-items-center"
          >
            <img style={imgSize} className="rounded-circle img-fluid " src={data.teamImage} alt="Team member pic" />
            <p className="p-24 pt-4">{data.teamMemberName}</p>
            <p className="p-20 text-info1">{ } </p>
            <div className="social position-relative">
              <div className="top-100 ">
                <ul className="list-unstyled d-flex justify-content-start mt-5">
                  <li className="ms-0">
                    <a className="link-dark" href="#">
                      <FaFacebook className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaTwitter className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaLinkedin className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaReddit className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row rows mt-5 d-flex justify-content-center">
        {teamData.map((data) => (
          <div style={cardSize} className="col-md-4 col-sm-6 col-lg-4 pt-3 rounded-4 shadow1 mx-2 mt-3 d-flex flex-column justify-content-center align-items-center">
            <img style={imgSize} className="rounded-circle img-fluid " src={data.teamImage} alt="Team member pic" />
            <p className="p-24 pt-4">{data.teamMemberName}</p>
            <p className="p-20 text-info1">{data.role}</p>
            <div className="social position-relative">
              <div className="top-100 ">
                <ul className="list-unstyled d-flex justify-content-start mt-5">
                  <li className="ms-0">
                    <a className="link-dark" href="#">
                      <FaFacebook className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaTwitter className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaLinkedin className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-dark" href="#">
                      <FaReddit className="fs-1 border-dark p-2 bg-opacity-75 rounded-2 text-info1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
