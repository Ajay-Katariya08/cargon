
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  BiChevronRight,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiRightArrowAlt,
} from "react-icons/bi";

import shape15 from "@/assets/img/shape/shape-1.5.png";
import shape16 from "@/assets/img/shape/shape-1.6.png";
import shape17 from "@/assets/img/shape/shape-1.7.png";
import shape18 from "@/assets/img/shape/shape-1.8.png";
import logo from "@/assets/img/logo/ca-logo1.1.png";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  url: string;
}

const quickLinks: FooterLink[] = [
  { label: "Home", url: "/" },
  { label: "Service", url: "/services" },
  { label: "About Us", url: "/about" },
  { label: "Latest News", url: "/blog" },
  { label: "Contact Us", url: "/contact" },
];

const otherLinks: FooterLink[] = [
  { label: "Maintenance", url: "#" },
  { label: "Our Team", url: "#" },
  { label: "Reviews & Awards", url: "#" },
  { label: "Personal", url: "#" },
  { label: "Certifications", url: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="cream-bg pt-30 p-relative z-index-1">
      <div className="ca-ft-shape p-absolute ft-shape-1">
        <img src={shape15} alt="" />
      </div>
      <div className="ca-ft-shape p-absolute ft-shape-2">
        <img src={shape16} alt="" />
      </div>
      <div className="ca-ft-shape p-absolute ft-shape-3">
        <img src={shape17} alt="" />
      </div>
      <div className="ca-ft-shape p-absolute ft-shape-4">
        <img src={shape18} alt="" />
      </div>
      <div className="ca-cta-area">
        <Container>
          <Row
            className="align-items-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Col lg={6} className="mb-30">
              <div className="ca-cta-content">
                <h2 className="ca-section-title cta-title-1 fnw-700">
                  Join Us Today And let Us Help You To Grow Your Business.
                </h2>
              </div>
            </Col>
            <Col lg={6} className="mb-30">
              <div className="ca-btn-cta-1 text-center text-lg-end">
                <Link
                  to="/contact"
                  className="ca-btn-primary theme-bg-1 text-white br-50"
                >
                  Get Started
                  <span>
                    <BiRightArrowAlt />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="b-bottom pt-48"></div>
        </Container>
      </div>
      <div className="ca-footer-area">
        <Container>
          <div className="ca-ft-area w-bg">
            <Row>
              <Col xl={4} md={6} className="mb-30">
                <div className="ca-footer widget-1">
                  <div className="ca-ft-logo">
                    <Link to="/index-3">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="ca-ft-content mb-24">
                    <p className="pt-16">
                      Our global reach, combined with local <br /> expertise,
                      ensures that your goods are <br />
                      transported safely, on time.
                    </p>
                  </div>
                  <div className="ca-footer-social">
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
                          <BsTwitterX />
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
                  <div className="ca-footer-menu">
                    <ul>
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.url}>{link.label}</Link>
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
                  <div className="ca-footer-menu">
                    <ul>
                      {otherLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.url}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6} className="mb-30">
                <div className="ca-footer widget-4">
                  <h4 className="ca-title fnw-700 theme-black-1 pb-24">
                    Other Links
                  </h4>
                  <div className="ca-ft-content">
                    <p className="pb-32">
                      Subscribe us & receive our latest news & articles
                    </p>
                  </div>
                  <div className="ca-footer-email-sub">
                    <form action="#">
                      <input type="email" placeholder="Email Address.." />
                    </form>
                    <button
                      className="ca-btn-primary theme-bg-1 text-white br-50"
                      type="submit"
                      value="submit"
                    >
                      Subscribe Now{" "}
                      <span>
                        <BiChevronRight className="fs-2" />
                      </span>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="copy-right-border border-1"></div>
              </Col>
              <Col lg={6}>
                <p className="copry-right-text pt-24">
                  Copyright &copy;2024 Cargon. All Rights Reserved
                </p>
              </Col>
              <Col lg={6}>
                <div className="copy-right-menu text-end pt-24">
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
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
