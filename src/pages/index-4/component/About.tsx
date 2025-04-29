
import { BiCheck, BiRightArrowAlt } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";

import ch2Image from "@/assets/img/about/ca-ch-2.png";
import aboutImage from "@/assets/img/about/ca-about-4.1.png";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="ca-about-4 pb-70">
      <Container>
        <Row className="align-items-center">
          <Col xl={6} className="mb-30">
            <div className="ca-ab-4-img p-relative z-index-1">
              <div className="ca-ab-counter-4">
                <h3 className="ca-counter-title fnw-700">
                  <CountUp end={25} duration={3} />+
                </h3>
                <p>Years Experience</p>
              </div>
              <img className="w-100 ca-ab-sm-img" src={ch2Image} alt="" />
              <img className="w-100 ca-ab-lng-img" src={aboutImage} alt="" />
            </div>
          </Col>
          <Col xl={6} className="mb-30">
            <div className="ca-about-content-4">
              <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
                What We Do
              </h5>
              <h2 className="ca-section-title theme-black-4 fnw-600 pt-16">
                How We Deliver Excellence
              </h2>
              <p className="pt-16 pb-24">
                We leverage cutting-edge technology & a global network to ensure
                seamless <br /> international and domestic shipments, while our
                experienced team provides <br /> personalized support and expert
                guidance every step of the way.
              </p>
            </div>

            <div className="ca-service-4-list">
              <ul>
                <li>
                  <span>
                    <BiCheck />
                  </span>
                  Tailored Transport and Logistics Solutions
                </li>
                <li>
                  <span>
                    <BiCheck />
                  </span>
                  Our Comprehensive Logistics Solutions
                </li>
                <li>
                  <span>
                    <BiCheck />
                  </span>
                  Explore Our Range of Services
                </li>
              </ul>
            </div>
            <div className="ca-counter-servic-4 br-7 pt-24">
              <div className="ca-counter-area-4 mb-30">
                <h3 className="ca-counter-title fnw-700 pb-16">
                  <CountUp end={215} duration={3} />+
                </h3>
                <p>Happy Customers</p>
              </div>
              <div className="ca-counter-area-4 mb-30">
                <h3 className="ca-counter-title fnw-700 pb-16">
                  <CountUp end={735} duration={3} />+
                </h3>
                <p>Completed Transport</p>
              </div>
            </div>
            <div className="ca-about-4-btn">
              <Link
                to="#"
                className="ca-btn-primary ca-btn-primary-4 theme-bg-4 text-white br-50"
              >
                Get Started Now
                <span>
                  <BiRightArrowAlt />
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
