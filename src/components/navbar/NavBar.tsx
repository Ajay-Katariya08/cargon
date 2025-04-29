import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import logo from "../../assets/img/logo/ca-logo3.1.png";
import { navItems } from "./data";

import LeftSideBar from "../MobileMenu";

interface SubMenuItem {
  label: string;
  link: string;
}

interface NavItem {
  label: string;
  link: string;
  submenu?: SubMenuItem[];
}

const NavBar: React.FC = () => {
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
    <header ref={backToTop} className="header-area-3 stiky">
      <div className="container header-3">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg col-md-6 col-6">
            <div className="ca-logo">
              <Link to="/index-3">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 d-none d-lg-block">
            <div className="ca-main-menu-3">
              <nav className="ca-mobile-menu-active-3">
                <ul>
                  {navItems.map((item: NavItem, index: number) => (
                    <li key={index}>
                      <Link
                        style={{ display: "flex" }}
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
          <div className="col-xl-3 col-lg col-md-6 col-6">
            <div className="ca-btn-header d-none d-lg-block text-end">
              <a
                href="/contact"
                className="ca-btn-primary-3 theme-bg-3 text-white br-50"
              >
                Get A Quote{" "}
                <span>
                  <BiChevronRight className="fs-2" />
                </span>
              </a>
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

export default NavBar;
