

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import plane from "@/assets/img/shape/ca-plane-1.1.png";
import ftShape from "@/assets/img/shape/ca-ft-shape4.1.png";
import contactShape1 from "@/assets/img/contact/ca-contact-shape-1.1.png";
import contactShape2 from "@/assets/img/contact/ca-contact-shape1.2.png";
import { BiChevronRight } from "react-icons/bi";

const ContactUs: React.FC = () => {
  return (
    <section className="ca-contact-area p-relative z-index-1 fix">
      <div className="ca-contact-shape-1">
        <img src={plane} alt="" />
      </div>
      <div className="ca-contact-shape-2">
        <img src={ftShape} alt="" />
      </div>
      <div className="ca-contact-shape-img1">
        <img src={contactShape1} alt="" />
      </div>
      <div
        className="ca-contact-shape-img2 aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src={contactShape2} alt="" />
      </div>
      <Container>
        <Row>
          <Col lg={7}></Col>
          <Col lg={5} className="mb-30">
            <div
              className="ca-contact aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h5 className="ca-section-subtitle subtitle-bg-1 p-relative theme-color-1 br-50">
                Contact Us
              </h5>
              <h2 className="ca-section-title theme-black-1 fnw-600 pt-16 ca-text-cap">
                Get in Touch with Us
              </h2>
              <p className="pt-16 pb-24">
                Whether you have questions about our services, need
                <br /> advice on pool maintenance, or want to schedule.
              </p>
              <div className="ca-contact-from">
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
                      <select className="nice-select wide ca-select">
                        <option data-display="Service Type">Nothing</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                      </select>
                    </Col>
                    <Col md={12}>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </Col>
                    <div className="submit-btn">
                      <button
                        className="ca-btn-primary theme-bg-1 text-white br-50 mt-12"
                        type="submit"
                        value="submit"
                      >
                        Submit Now{" "}
                        <span>
                            <BiChevronRight className="fs-2" />
                        </span>
                      </button>
                    </div>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
