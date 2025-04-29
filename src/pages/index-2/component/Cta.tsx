import { FaArrowRight } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ctaShape1 from "@/assets/img/shape/cat-shape-2.1.png";
import ctaImage from "@/assets/img/about/ca-cta-2.1.png";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="ca-cta-area-2 p-relative z-index-1 fix">
      <div className="cta-shape-2 c-shape-1 p-absolute">
        <img src={ctaShape1} alt="" />
      </div>
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="ca-cta-2 theme-black-bg-2 fix">
              <Row>
                <Col lg={7} className="mb-30">
                  <div
                    className="ca-cta-content aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <h2 className="ca-section-title cta-title-1 text-white fnw-700 pb-32 ca-text-cap">
                      Join Us Today And let Us Help <br /> You To Grow Your
                      Business.
                    </h2>
                    <div className="ca-btn-cta-2">
                      <Link to="/contact" className="ca-btn-primary-22">
                        Get Started
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="mb-30">
                  <div
                    className="cta-shape-2 c-shape-2 p-absolute aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-duration="800"
                  >
                    <img src={ctaImage} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CtaSection;
