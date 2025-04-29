import { Col, Container, Row } from "react-bootstrap";
import ReactCountUp from "react-countup";
import about1 from "@/assets/img/about/ca-about1.1.png";
import about2 from "@/assets/img/about/ca-about1.2.png";
import { BiCheck, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Commitment = () => {
  return (
    <section className="ca-about-3 pt-100 pb-70">
      <Container>
        <Row>
          <Col lg={6} className="mb-30">
            <div className="ca-ab-iner p-relative z-index-1">
              <div className="ca-iner-review-text p-absolute theme-bg-3">
                <h3 className="ca-counter-title fnw-700 pb-16">
                  <span className="counter">
                    <ReactCountUp
                      start={11}
                      end={25}
                      duration={2}
                      separator=","
                    />
                  </span>
                  K+
                </h3>
                <span>Clients Positive Reviews</span>
              </div>

              <Row>
                <Col lg={6} md={6} className="mb-30">
                  <div
                    className="ca-ab-iner-img wow img-custom-anim-left"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <img className="w-100" src={about1} alt="About Image 1" />
                  </div>
                </Col>
                <Col lg={6} md={6} className="mb-30">
                  <div
                    className="ca-ab-iner-img ca-ab-iner-img-2 wow img-custom-anim-left"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <img
                      className="w-100 mt-60"
                      src={about2}
                      alt="About Image 2"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="ca-ab-content3">
              <div className="ca-about-content-3 ca-sec-content-3">
                <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                  Why We Are
                </h5>
                <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                  Our Commitment: Reliable <br /> and Efficient Logistics
                </h2>
                <p className="pt-16 pb-32">
                  With years of industry experience and a commitment to
                  innovation, we have become leaders in providing comprehensive,
                  reliable, and efficient logistics solutions. Our dedicated
                  team of experts works tirelessly to ensure.
                </p>
              </div>

              <div className="ca-ab-item-check">
                {[
                  "Experts in Logistics Management",
                  "Leaders in Global Logistics",
                  "Transforming Transport & Logistics",
                  "Driving Logistics Success",
                ].map((title, index) => (
                  <div className="ca-ab-sngle-item" key={index}>
                    <div className="ca-ab-sngle-item-ic">
                      <span>
                        <BiCheck />
                      </span>
                    </div>
                    <div className="ca-ab-sngle-item-content">
                      <h4 className="ca-item-ch-title">{title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ca-about-item3 cream-bg-3 p-relative">
                <p>
                  We are driving success and creating opportunities for growth.
                  Discover the difference with a logistics partner that is truly
                  invested in your success.
                </p>
              </div>
              <div className="ca-about-3-btn">
                <div className="ca-about-3-btn">
                  <Link
                    to="#"
                    className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                  >
                    Transpires
                    <span>
                      <BiChevronRight className="fs-2" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Commitment;
