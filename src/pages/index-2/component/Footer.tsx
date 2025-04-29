
import {} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "@/assets/img/logo/ca-logo2.2.png";
import CtaSection from "./Cta";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiRightArrowAlt,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
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

const copyRightLinks: FooterLink[] = [
  { label: "Terms & Conditions", url: "#" },
  { label: "Privacy Policy", url: "#" },
];

const FooterSection: React.FC = () => {
  return (
    <>
      <CtaSection />
      <footer className="ca-ft-area-2 off-wh p-relative z-index-1 pt-258">
        <div className="ca-footer-area">
          <Container>
            <Row>
              <Col lg={4} md={6} className="mb-30">
                <div className="ca-footer widget-1">
                  <div className="ca-ft-logo">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="ca-ft-content-2 mb-24">
                    <p className="pt-16">
                      Our global reach, combined with local <br /> expertise,
                      ensures that your goods are <br />
                      transported safely, on time.
                    </p>
                  </div>
                  <div className="ca-footer-social ca-footer-social-2">
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
              <Col lg className="col-md-6 mb-30">
                <div className="ca-footer widget-2">
                  <h4 className="ca-title fnw-700 theme-black-2 pb-24">
                    Quick Links
                  </h4>
                  <div className="ca-footer-menu ca-footer-menu-2">
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
              <Col lg className="col-md-6 mb-30">
                <div className="ca-footer widget-3">
                  <h4 className="ca-title fnw-700 theme-black-2 pb-24">
                    Other Links
                  </h4>
                  <div className="ca-footer-menu ca-footer-menu-2">
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
              <Col lg={4} md={6} className="mb-30">
                <div className="ca-footer widget-4">
                  <h4 className="ca-title fnw-700 theme-black-2 pb-24">
                    Other Links
                  </h4>
                  <div className="ca-ft-content">
                    <p className="pb-32">
                      Subscribe us & receive our latest
                      <br /> news & articles
                    </p>
                  </div>
                  <div className="ca-footer-email-sub ca-footer-email-sub-2">
                    <form action="#">
                      <input type="email" placeholder="Email Address.." />
                    </form>
                    <button
                      className="ca-btn-primary-22"
                      type="submit"
                      value="submit"
                    >
                      Subscribe Now{" "}
                      <span>
                        <BiRightArrowAlt />
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
              <Col lg={6} md={6}>
                <p className="copry-right-text copry-right-text-2 pt-24 pb-24">
                  Copyright &copy;2024 Cargon. All Rights Reserved
                </p>
              </Col>
              <Col lg={6} md={6}>
                <div className="copy-right-menu copy-right-menu-2 text-end pt-24 pb-24">
                  <ul>
                    {copyRightLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
