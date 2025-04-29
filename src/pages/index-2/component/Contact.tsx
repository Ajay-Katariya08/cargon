import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa";

import contactBg from "@/assets/img/contact/contact-bg-2.1.png";
import man21 from "@/assets/img/contact/ca-man2.1.png";
import man23 from "@/assets/img/contact/ca-man2.3.png";
import man24 from "@/assets/img/contact/ca-man2.4.png";
import man25 from "@/assets/img/contact/ca-man2.5.png";
import man26 from "@/assets/img/contact/ca-man2.6.png";
import lc21 from "@/assets/img/icon/ca-lc-2.1.svg";

interface LocationItem {
  image: string;
  location: string;
}

const locationData: LocationItem[] = [
  {
    image: man21,
    location: "198 West 21th Street,<br />New York NY City 1010",
  },
  {
    image: man21,
    location: "198 West 21th Street,<br />New York NY City 1010",
  },
  {
    image: man23,
    location: "198 West 21th Street,<br />New York NY City 1010",
  },
  {
    image: man24,
    location: "198 West 21th Street,<br />New York NY City 1010",
  },
  {
    image: man25,
    location: "198 West 21th Street,<br />New York NY City 1010",
  },
  {
    image: man26,
    location: "198 West 21th Street,<br />New York NY City 1010",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section
      className="ca-contact-area-2 p-relative z-index-1 fix pt-100 pb-70"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <Container>
        <Row>
          <Col lg={6} className="mb-30">
            <div
              className="ca-contact-from ca-contact-from-2 off-wh aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="ca-contact-content-2">
                <h4 className="ca-contact-title-2 theme-black-2 fnw-600">
                  Send Us A Message
                </h4>
                <p className="pt-16 pb-24">
                  Our response time is within 30 minutes during business hours
                </p>
              </div>
              <form action="#">
                <Row>
                  <Col md={6} className="mb-20">
                    <input type="text" placeholder="First Name" />
                  </Col>
                  <Col md={6} className="mb-20">
                    <input type="text" placeholder="Last Name" />
                  </Col>
                  <Col md={6} className="mb-20">
                    <input type="tel" placeholder="Phone Number" />
                  </Col>
                  <Col md={6} className="mb-20">
                    <input type="email" placeholder="Email Address" />
                  </Col>
                  <Col md={12} className="mb-20">
                    <textarea
                      name="message"
                      id="mesage"
                      placeholder="Message"
                    />
                  </Col>
                  <div className="submit-btn">
                    <button
                      className="ca-btn-primary-22"
                      type="submit"
                      value="submit"
                    >
                      Submit Now
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Col>
          <Col lg={6} className="mb-30 d-none d-lg-block">
            <div
              className="ca-location-area2 p-relative z-index-1 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {locationData.map((item, index) => (
                <div
                  key={index}
                  className={`ca-location-item p-absolute ca-lca-${index + 1}`}
                >
                  <img src={item.image} alt="" />
                  <div className="ca-top-lc">
                    <img src={lc21} alt="" />
                  </div>
                  <div
                    className="ca-lc-box"
                    dangerouslySetInnerHTML={{ __html: item.location }}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
