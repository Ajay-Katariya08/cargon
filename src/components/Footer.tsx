import { JSX } from "react";
import footerShape3 from "../assets/img/shape/ca-footer-shape3.1.png";
import footer_Shape3_1 from "../assets/img/shape/cta-shape-3.1.png";
import logo3 from "../assets/img/logo/ca-logo3.1.png";
import {
  BiChevronRight,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SocialLink {
  icon: JSX.Element;
  url: string;
}

interface FooterLink {
  text: string;
  url: string;
}

interface FooterData {
  description: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  otherLinks: FooterLink[];
  subscriptionText: string;
  copyrightText: string;
  legalLinks: FooterLink[];
}

const footerData: FooterData = {
  description:
    "Our global reach, combined with local expertise, ensures that your goods are transported safely, on time.",
  socialLinks: [
    { icon: <BiLogoInstagram />, url: "#" },
    { icon: <BiLogoFacebook />, url: "#" },
    { icon: <BiLogoLinkedin />, url: "#" },
    { icon: <FaXTwitter />, url: "#" },
  ],
  quickLinks: [
    { text: "Home", url: "/" },
    { text: "Service", url: "/services" },
    { text: "About Us", url: "/about" },
    { text: "Latest News", url: "/blog" },
    { text: "Contact Us", url: "/contact" },
  ],
  otherLinks: [
    { text: "Maintenance", url: "#" },
    { text: "Our Team", url: "#" },
    { text: "Reviews & Awards", url: "#" },
    { text: "Personal", url: "#" },
    { text: "Certifications", url: "#" },
  ],
  subscriptionText: "Subscribe us & receive our latest news & articles",
  copyrightText: "Copyright © 2024 Cargon. All Rights Reserved",
  legalLinks: [
    { text: "Terms & Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="theme-bg-3 bg-blue pt-30 p-relative z-index-1">
      <div className="ca-ft-shape p-absolute ft-shape-2">
        <img src={footerShape3} alt="" />
      </div>
      <div className="ca-cta-area p-relative z-index-1">
        <div className="container">
          <div className="ca-cta-shape3 p-absolute d-none d-lg-block">
            <img src={footer_Shape3_1} alt="" />
          </div>
          <Row className="align-items-center">
            <Col lg={6} className="mb-30">
              <div className="ca-cta-content">
                <h2 className="ca-section-title cta-title-1 text-white fnw-700">
                  Join Us Today And let Us Help You To Grow Your Business.
                </h2>
              </div>
            </Col>
            <Col lg={6} className=" mb-30">
              <div className="ca-btn-cta-3 text-end">
                <Link to="/contact" className="ca-btn-primary-3 w-bg">
                  Get Started{" "}
                  <span>
                    <BiChevronRight className="fs-2" />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="b-bottom pt-48"></div>
        </div>
      </div>
      <div className="ca-footer-area">
        <Container>
          <div className="ca-ft-area w-bg">
            <Row>
              <Col xl={4} md={6} className="mb-30">
                <div className="ca-footer widget-1">
                  <div className="ca-ft-logo">
                    <Link to="/index-3">
                      <img src={logo3} alt="" />
                    </Link>
                  </div>
                  <div className="ca-ft-content ca-ft-content-3 mb-24">
                    <p className="pt-16">{footerData.description}</p>
                  </div>
                  <div className="ca-footer-social ca-footer-social-3">
                    <ul>
                      {footerData.socialLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.url}>{link.icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xl md={6} className="mb-30">
                <div className="ca-footer widget-2">
                  <h4 className="ca-title fnw-700 theme-black-3 pb-24">
                    Quick Links
                  </h4>
                  <div className="ca-footer-menu ca-footer-menu-3">
                    <ul>
                      {footerData.quickLinks.map((link, index) => (
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
                  <h4 className="ca-title fnw-700 theme-black-3 pb-24">
                    Other Links
                  </h4>
                  <div className="ca-footer-menu ca-footer-menu-3">
                    <ul>
                      {footerData.otherLinks.map((link, index) => (
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
                  <h4 className="ca-title fnw-700 theme-black-3 pb-24">
                    Subscribe
                  </h4>
                  <div className="ca-ft-content">
                    <p className="pb-32">{footerData.subscriptionText}</p>
                  </div>
                  <div className="ca-footer-email-sub ca-footer-email-sub-3">
                    <form action="#">
                      <input type="email" placeholder="Email Address.." />
                    </form>
                    <button
                      className="ca-btn-primary ca-btn-primary-3 theme-bg-3 text-white br-50"
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
              <div className="col-lg-6">
                <p className="copry-right-text pt-24">
                  {footerData.copyrightText}
                </p>
              </div>
              <Col lg={6}>
                <div className="copy-right-menu pt-24">
                  <ul>
                    {footerData.legalLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>{link.text}</Link>
                      </li>
                    ))}
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
