import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiRightArrowAlt } from "react-icons/bi";

import logo from "@/assets/img/logo/ca-logo2.1.png";
import { navItems } from "./data";

import LeftSideBar from "../MobileMenu";
import { Link } from "react-router-dom";

const NavBar2: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const backToTop = useRef<HTMLElement | null>(null);

  const toggleDropdown = (index: number): void => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const navigate = (link: string): void => {
    window.location.href = link;
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (backToTop.current) {
        if (window.scrollY > 100) {
          backToTop.current.classList.add("scroll-header");
        } else {
          backToTop.current.classList.remove("scroll-header");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={backToTop} className="header-2 stiky">
      <div className="container ca-header-bg-2">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 col-6">
            <div className="ca-logo">
              <Link to="/index-2">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="ca-main-menu-2">
              <nav className="ca-mobile-menu-active-2">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        onClick={(e) => {
                          if (item.submenu) {
                            e.preventDefault();
                            toggleDropdown(index);
                          }
                        }}
                      >
                        {item.label}
                        {item.submenu && (
                          <span>
                            <BiChevronDown style={{ fontSize: "19px" }} />
                          </span>
                        )}
                      </Link>
                      {item.submenu && (
                        <ul
                          className={`sub-menu ${
                            openDropdown === index ? "active" : ""
                          }`}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.link}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(subItem.link);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="ca-btn-header text-end d-none d-lg-block">
              <Link to="/contact" className="ca-btn-primary-22">
                Get A Free Quote
                <span>
                  <BiRightArrowAlt />
                </span>
              </Link>
            </div>
            <div className="ca-header-action-item d-lg-none text-end">
              <button
                type="button"
                className="ca-offcanvas-toogle"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                >
                  <rect x="10" width="20" height="2" fill="currentColor"></rect>
                  <rect
                    x="5"
                    y="7"
                    width="25"
                    height="2"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="10"
                    y="14"
                    width="20"
                    height="2"
                    fill="currentColor"
                  ></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <LeftSideBar
        show={isMenuOpen}
        handleClose={() => setIsMenuOpen(!isMenuOpen)}
      />
    </header>
  );
};

export default NavBar2;
