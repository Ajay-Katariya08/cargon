
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/img/logo/ca-logo4.2.png";
import shape from "@/assets/img/shape/ca-ft-shape4.1.png";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiRightArrowAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const quickLinks = [
    { text: "Home", url: "/" },
    { text: "Service", url: "/services" },
    { text: "About Us", url: "/about" },
    { text: "Latest News", url: "/blog/blogs" },
    { text: "Contact Us", url: "/contact" },
  ];

  const otherLinks = [
    { text: "Maintenance", url: "#" },
    { text: "Our Team", url: "#" },
    { text: "Reviews & Awards", url: "#" },
    { text: "Personal", url: "#" },
    { text: "Certifications", url: "#" },
  ];

  return (
    <footer className="cream-bg-3 p-relative pt-100 pb-30">
      <div className="ca-footer-4-shape p-absolute">
        <img src={shape} alt="" />
      </div>
      <div className="ca-footer-area">
        <Container>
          <Row>
            <Col xl={4} md={6} className="mb-30">
              <div className="ca-footer-4 widget-1">
                <div className="ca-ft-logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="ca-ft-content ca-ft-content-3 mb-24">
                  <p className="pt-16">
                    Our global reach, combined with local <br /> expertise,
                    ensures that your goods are <br />
                    transported safely, on time.
                  </p>
                </div>
                <div className="ca-footer-social ca-footer-social-4">
                  <ul>
                    <li>
                      <Link to="#">
                        <BiLogoInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <BiLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <BiLogoLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaXTwitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl md={6} className="mb-30">
              <div className="ca-footer widget-2">
                <h4 className="ca-title fnw-700 theme-black-1 pb-24">
                  Quick Links
                </h4>
                <div className="ca-footer-menu ca-footer-menu-4">
                  <ul>
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl md={6} className="mb-30">
              <div className="ca-footer widget-3">
                <h4 className="ca-title fnw-700 theme-black-1 pb-24">
                  Other Links
                </h4>
                <div className="ca-footer-menu ca-footer-menu-4">
                  <ul>
                    {otherLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className="mb-30">
              <div className="ca-footer widget-4">
                <h4 className="ca-title fnw-700 theme-black-1 pb-24">
                  Subscribe
                </h4>
                <div className="ca-ft-content-4">
                  <p className="pb-32">
                    Subscribe us & receive our latest <br /> news & articles
                  </p>
                </div>
                <div className="ca-footer-email-sub ca-footer-email-sub-3">
                  <Form action="#">
                    <Form.Control type="email" placeholder="Email Address.." />
                  </Form>
                  <Button
                    className="ca-btn-primary ca-btn-primary-4 theme-bg-4 text-white br-50"
                    type="submit"
                    value="submit"
                  >
                    Subscribe Now{" "}
                    <span>
                      <BiRightArrowAlt />
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="copy-right-border border-1"></div>
            </Col>
            <Col lg={6} md={6}>
              <p className="copry-right-text-4 pt-24">
                Copyright &copy;2024 Cargon. All Rights Reserved
              </p>
            </Col>
            <Col lg={6} md={6}>
              <div className="copy-right-menu copy-right-menu-4 text-end pt-24">
                <ul>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
