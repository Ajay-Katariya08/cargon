
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleRight } from "react-icons/fa";
import shape11 from "@/assets/img/shape/shape-1.1.png";
import shape12 from "@/assets/img/shape/shape-1.2.png";

import { Link } from "react-router-dom";
import { servicesData } from "../../services/data";

const OurServices: React.FC = () => {
  return (
    <section className="ca-service-section p-relative z-index-1 cream-bg-2 pt-100 pb-70">
      <div className="ca-service-shape p-absolute">
        <img src={shape12} alt="" />
      </div>
      <Container>
        <div className="ca-shape p-absolute">
          <img src={shape11} alt="" />
        </div>
        <div
          className="ca-service-content ca-sec-content text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h5 className="ca-section-subtitle subtitle-bg-2 p-relative theme-color-1 br-50">
            Our Service
          </h5>
          <h2 className="ca-section-title theme-black-1 fnw-600 pt-16 ca-text-cap">
            Your Logistics, Our Expertise
          </h2>
          <p className="pt-16">
            From freight forwarding and customs brokerage to warehousing
            solutions & <br /> supply chain management, our expertise ensures
            that your logistics.
          </p>
        </div>
        <Row>
          {servicesData.slice(0, 6).map((item, index) => (
            <Col key={index} xl={4} md={6} className="mb-30">
              <div
                className="ca-ser-icon-box fix p-relative w-bg z-index-1 p-32 br-7 aos-init aos-animate"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <div className="ca-about-icon">
                  <div className="ca-about-ic">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="ca-num">
                    <h4 className="overly-num">
                      {item.id.toString().padStart(2, "0")}
                    </h4>
                  </div>
                </div>
                <div className="ca-service-content">
                  <h4 className="ca-title ca-title-2 fnw-700 theme-black-1 pb-16 pt-32">
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <p
                    className="pb-24"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <Link to={item.link} className="read-more">
                    Read More{" "}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
