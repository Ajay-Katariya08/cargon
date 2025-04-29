

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import timeIcon from "@/assets/img/icon/ca-time4.1.svg";
import mapIcon from "@/assets/img/icon/ca-map4.1.svg";
import mailIcon from "@/assets/img/icon/ca-mail-4.3.svg";
import phoneIcon from "@/assets/img/icon/ca-phone-4.2.svg";
import { BiRightArrowAlt } from "react-icons/bi";

const Contact: React.FC = () => {
  return (
    <section className="contact-3-area cream-bg-3 pt-100 pb-70">
      <Container>
        <Row>
          <Col lg={6} className="mb-30">
            <div className="ca-contact-us-4 mr-50">
              <div
                className="ca-blog-content-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
                  Contact Us
                </h5>
                <h2 className="ca-section-title theme-black-4 fnw-600 pt-16 ca-text-cap">
                  {" "}
                  We're Ready to Serve You
                </h2>
                <p className="pt-16">
                  We take pride in the positive feedback we receive from
                  businesses <br />
                  across various industries expertise to meet their logistics
                  needs.
                </p>
              </div>
              <div
                className="ca-working-hour mt-28 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h3 className="ca-blo-4-title theme-black-4 fnw-600 pb-16">
                  Work Hour
                </h3>
                <div className="ca-working-time">
                  <div className="ca-work-time-box mr-46">
                    <div className="ca-work-ic">
                      <span>
                        <img src={timeIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-work-content">
                      <span>Tuesday - Saturday</span>
                    </div>
                  </div>

                  <div className="ca-work-time-box">
                    <div className="ca-work-ic">
                      <span>
                        <img src={timeIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-work-content">
                      <span>8:00 Am - 5:00 Pm </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ca-con-icon-box-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="ca-contact-ic-box-4 mb-30">
                  <div className="ca-contact-4-icon">
                    <span>
                      <img src={mapIcon} alt="" />
                    </span>
                  </div>
                  <div className="ca-contact-4-content">
                    <h3 className="ca-blo-4-title theme-black-4 fnw-600 pb-12">
                      Our Location
                    </h3>
                    <p>73 Bridge St Brooklyn, USA.</p>
                  </div>
                </div>

                <div className="ca-contact-ic-box-4 mb-30">
                  <div className="ca-contact-4-icon">
                    <span>
                      <img src={mailIcon} alt="" />
                    </span>
                  </div>
                  <div className="ca-contact-4-content">
                    <h3 className="ca-blo-4-title theme-black-4 fnw-600 pb-12">
                      Our Mail
                    </h3>
                    <p>Demo@gmail.com</p>
                  </div>
                </div>

                <div className="ca-contact-ic-box-4 mb-30">
                  <div className="ca-contact-4-icon">
                    <span>
                      <img src={phoneIcon} alt="" />
                    </span>
                  </div>
                  <div className="ca-contact-4-content">
                    <h3 className="ca-blo-4-title theme-black-4 fnw-600 pb-12">
                      Office Number
                    </h3>
                    <p>+921 5222 6132</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div
              className="ca-contact-from w-bg ca-contact-from-3 mr-60 aos-init aos-animate"
              data-aos="zoom-out-down"
              data-aos-duration="800"
            >
              <div className="ca-contact-content-4">
                <h4 className="ca-contact-title-2 theme-black-2 fnw-600">
                  Send Us A Message
                </h4>
                <p className="pt-16 pb-24">
                  As a fellow small business owner, we know the fulfillment that
                  an a best to comes from running & own business contact our
                  service to Cargon.
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
                    <select className="nice-select wide ca-select">
                      <option data-display="Service Type">Nothing</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                    </select>
                  </Col>
                  <Col md={12} className="mb-20">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </Col>
                  <Col className="submit-btn">
                    <button
                      className="ca-btn-primary ca-btn-primary-4 theme-bg-4 text-white br-50"
                      type="submit"
                      value="submit"
                    >
                      Send Now
                      <span>
                        <BiRightArrowAlt />
                      </span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
