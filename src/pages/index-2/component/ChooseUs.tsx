import { Container, Row, Col } from "react-bootstrap";
import image1 from "@/assets/img/icon/about-2.svg";
import image2 from "@/assets/img/about/about-2.1.png";
import image3 from "@/assets/img/about/about-2.2.png";

import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <section className="ca-about-2 pt-100 pb-70">
      <Container>
        <Row>
          <Col lg={6} className="mb-30">
            <div
              className="ca-about-content-2 ca-sec-content-2 mb-40 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <h5 className="ca-section-subtitle subtitle-bg-4 p-relative theme-color-2">
                Why Choose Us
              </h5>
              <h2 className="ca-about-title theme-black-2 fnw-600 pt-16 ca-text-cap">
                Meet the Team: Experts in Logistics Management
              </h2>
              <p className="pt-16">
                We pride ourselves on our global reach and local expertise,
                allowing us to offer <br />
                tailored services that meet the unique needs of each client. At
                Cargon, we are
                <br /> not just moving goods; we are driving success and
                creating opportunities.
              </p>
            </div>
            <Row>
              <Col lg={6} md={6}>
                <div
                  className="ca-choose-item p-relative aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 className="ca-title fnw-600 theme-black-2 pb-16">
                    Warehousing Solutions
                  </h4>
                  <p>
                    With years of industry experience <br /> and a commitment to
                    innovation,
                    <br /> we have become leaders.
                  </p>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div
                  className="ca-choose-item p-relative aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h4 className="ca-title fnw-600 theme-black-2 pb-16">
                    Supply Chain Management
                  </h4>
                  <p>
                    Our dedicated team of experts <br />
                    works tirelessly to ensure that your goods are transported
                    safely.
                  </p>
                </div>
              </Col>
            </Row>
            <div
              className="ca-about-2-btn d-flex align-items-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              <Link to="/contact" className="ca-btn-primary-22">
                Learn More
                <span>
     
                    <BiRightArrowAlt />
                
                </span>
              </Link>
              <div className="ca-about-2-contact d-flex align-items-center">
                <div className="ca-about-2-icon">
                  <img src={image1} alt="Phone Icon" />
                </div>
                <div className="ca-about-2-content">
                  <p>Call Us Now</p>
                  <Link to="tel:1234567890" className="ca-about-2-num">
                    123-456-7890
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="ca-about-2-img p-relative z-index-1">
              <img
                className="aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="800"
                src={image2}
                alt="Logistics Team"
              />
              <div
                className="ca-about-2-overlay p-absolute aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img src={image3} alt="Overlay Image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
