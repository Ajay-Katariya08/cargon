import React, { useState } from "react";
import { BiLocationPlus, BiPhone, BiEnvelope } from "react-icons/bi";
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Collapse } from "react-bootstrap";
import logo3 from "../assets/img/logo/ca-logo3.1.png";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

interface LeftSideBarProps {
  show: boolean;
  handleClose: () => void;
}

const MobileMenu: React.FC<LeftSideBarProps> = ({ show, handleClose }) => {
  const [homeOpen, setHomeOpen] = useState<boolean>(false);
  const [serviceOpen, setServiceOpen] = useState<boolean>(false);
  const [pagesOpen, setPagesOpen] = useState<boolean>(false);
  const [projectOpen, setProjectOpen] = useState<boolean>(false);

  return (
    <Offcanvas
      placement="end"
      show={show}
      onHide={handleClose}
      className="w-bg"
    >
      <Offcanvas.Header closeButton>
        <a href="#">
          <img src={logo3} alt="Logo" />
        </a>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <div className="ca-offcanvas-menu-3 mb-40">
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => setHomeOpen(!homeOpen)}>
                  Home
                </a>
                <button
                  className="ca-menu-close2"
                  onClick={() => setHomeOpen(!homeOpen)}
                >
                  {homeOpen ? <BiChevronDown /> : <BiChevronRight />}
                </button>
                <Collapse in={homeOpen}>
                  <ul>
                    <li>
                      <Link to="/index">Home 01</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Home 02</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Home 03</Link>
                    </li>
                    <li>
                      <Link to="/index-4">Home 04</Link>
                    </li>
                  </ul>
                </Collapse>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <a href="#" onClick={() => setServiceOpen(!serviceOpen)}>
                  Service
                </a>
                <button
                  className="ca-menu-close2"
                  onClick={() => setServiceOpen(!serviceOpen)}
                >
                  {serviceOpen ? <BiChevronDown /> : <BiChevronRight />}
                </button>
                <Collapse in={serviceOpen}>
                  <ul>
                    <li>
                      <a href="/services">Service</a>
                    </li>
                    <li>
                      <a href="/services/left">Service Left</a>
                    </li>
                    <li>
                      <a href="/services/right">Service Right</a>
                    </li>
                    <li>
                      <a href="/services/single">Service Single</a>
                    </li>
                  </ul>
                </Collapse>
              </li>

              <li>
                <a href="#" onClick={() => setPagesOpen(!pagesOpen)}>
                  Pages
                </a>
                <button
                  className="ca-menu-close2"
                  onClick={() => setPagesOpen(!pagesOpen)}
                >
                  {pagesOpen ? <BiChevronDown /> : <BiChevronRight />}
                </button>
                <Collapse in={pagesOpen}>
                  <ul>
                    <li>
                      <a href="/pages/team">Team</a>
                    </li>
                    <li>
                      <a href="/pages/testimonial">Testimonial</a>
                    </li>
                    <li>
                      <a href="/pages/faq">Faq</a>
                    </li>
                    <li>
                      <a href="/pages/pricing">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="/pages/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/pages/404">404</a>
                    </li>
                  </ul>
                </Collapse>
              </li>

              <li>
                <a href="#" onClick={() => setProjectOpen(!projectOpen)}>
                  Project
                </a>
                <button
                  className="ca-menu-close2"
                  onClick={() => setProjectOpen(!projectOpen)}
                >
                  {projectOpen ? <BiChevronDown /> : <BiChevronRight />}
                </button>
                <Collapse in={projectOpen}>
                  <ul>
                    <li>
                      <a href="/projects">Project</a>
                    </li>
                    <li>
                      <a href="/projects/left">Project Left</a>
                    </li>
                    <li>
                      <a href="/projects/right">Project Right</a>
                    </li>
                    <li>
                      <a href="/projects/single">Project Single</a>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ca-offcanvas-contact mb-40">
          <a href="#" className="ca-btn-primary-3 theme-bg-3 text-white br-50">
            Get A Quote{" "}
            <span>
              <BiChevronRight />
            </span>
          </a>
        </div>

        <div className="ca-offcanvas-contact-info mb-40">
          <h3 className="ca-offcanvas-sm-title">Contact Info</h3>

          <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
            <div className="icon">
              <span>
                <BiLocationPlus />
              </span>
            </div>
            <div className="ca-sm-single-item-4-content">
              <p>
                <a href="#">
                  55 Street, 2nd block, 3rd Floor Melbourne, Australia
                </a>
              </p>
            </div>
          </div>

          <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
            <div className="icon">
              <span>
                <BiPhone />
              </span>
            </div>
            <div className="ca-sm-single-item-4-content">
              <p>
                <a href="tel:+0221234568806">+022 (123) 456 88 06</a>
              </p>
            </div>
          </div>

          <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
            <div className="icon">
              <span>
                <BiEnvelope />
              </span>
            </div>
            <div className="ca-sm-single-item-4-content">
              <p>
                <a href="mailto:infocargon@gmail.com">infocargon@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="ca-offcanvas-social mb-40">
          <h3 className="ca-offcanvas-sm-title">Follow Us</h3>
          <div className="ca-footer-social ca-footer-social-3">
            <ul>
              <li>
                <a href="#">
                  <BiLogoInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;
