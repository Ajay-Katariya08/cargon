import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { teamMembers } from "../../other-pages/team/data";
import { Col, Container, Row } from "react-bootstrap";
import share from "@/assets/img/icon/ca-share.svg";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="ca-team-iner pt-100 pb-70">
      <Container>
        <div
          className="ca-team-iner-content-3 ca-sec-content-3 text-center mb-60 wow tpFadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay=".2s"
        >
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Our Team
          </h5>
          <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
            The People Behind Our Success
          </h2>
          <p className="pt-16">
            Each member brings a wealth of knowledge and expertise, ensuring
            that we deliver top-notch transport and logistics solutions to our
            clients.
          </p>
        </div>
        <Row>
          {teamMembers.slice(4).map((member, index) => (
            <Col lg={3} md={6} className="mb-30" key={index}>
              <div
                className="ca-team-inner p-relative z-index-1 wow tpFadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <div className="ca-team-inner-content p-relative fix">
                  <div className="ca-team-iner-img">
                    <img
                      className="w-100"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="ca-team-iner-social">
                    <ul>
                      <li>
                        <Link to="#">
                          <span>
                  
                              <BsTwitterX />
                     
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
         
                              <BiLogoLinkedin />
                     
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
              
                              <BiLogoInstagram />
             
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                  
                              <BiLogoFacebook />
                   
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ca-iner-content-team">
                  <div className="ca-team-iner-content br-7">
                    <div className="ca-team-iner-heading">
                      <h4 className="ca-team-iner-title">
                        <Link to="/pages/team">Alex Fargusion</Link>
                      </h4>
                      <span>Specialist</span>
                    </div>
                    <div className="ca-team-iner-share">
                      <Link to="#">
                        <img src={share} alt="Share" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
