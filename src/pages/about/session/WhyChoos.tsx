import { Button, Col, Container, Row } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import choose1 from "@/assets/img/about/ca-choose-ing1.1.png";
import ch2 from "@/assets/img/about/ca-ch-2.png";

const WhyChoos = () => {
  return (
    <section className="ca-about-3 cream-bg-3 pt-100 pb-70">
      <Container>
        <Row>
          <Col lg={6} className="mb-30">
            <div className="ca-choose-content3">
              <div className="ca-about-content-3 ca-sec-content-3">
                <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                  Why Choose Us
                </h5>
                <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                  Meet the Team: Experts in Logistics Management
                </h2>
                <p className="pt-16 pb-40">
                  We pride ourselves on our global reach and local expertise,
                  allowing us to offer tailored services that meet the unique
                  needs of each client. At Cargon, we are <br /> not just moving
                  goods; we are driving success and creating opportunities.
                </p>
              </div>
              <Row>
                <Col lg={6} md={6}>
                  <div className="ca-iner-ch-box-content mb-40">
                    <h4 className="ca-title fnw-600 theme-black-2 pb-16">
                      Supply Chain Management
                    </h4>
                    <p>
                      With years of industry experience and a commitment to
                      innovation, we have become leaders{" "}
                    </p>
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="ca-iner-ch-box-content mb-40">
                    <h4 className="ca-title fnw-600 theme-black-2 pb-16">
                      Supply Chain Management
                    </h4>
                    <p>
                      With years of industry experience and a commitment to
                      innovation, we have become leaders{" "}
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="ca-about-3-btn">
                <Button
                  href="#"
                  className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                >
                  Learn More{" "}
                  <span>
                    <BiChevronRight className="fs-2" />
                  </span>
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="ca-choose-img p-relative z-index-1">
              <img
                className="w-100 wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
                src={choose1}
                alt="Team Image"
              />
              <div className="ca-ch-butom-img p-absolute">
                <img
                  className="w-100 wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay=".3s"
                  src={ch2}
                  alt="Additional Image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoos;
