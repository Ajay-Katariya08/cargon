import React, { useState } from "react";
import service1 from "@/assets/img/service/ca-service-bg-2.1.png";
import service2 from "@/assets/img/icon/ca-ser-2.2.svg";
import service3 from "@/assets/img/icon/ca-ser-2.3.svg";
import service4 from "@/assets/img/icon/ca-ser-2.1.svg";
import service5 from "@/assets/img/icon/ca-ser-2.1.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiChevronRight, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: service2,
    title: "Freight Consolidation",
    description:
      "Our freight forwarding services ensure seamless international shipments, while our customs.",
  },
  {
    icon: service3,
    title: "Warehousing Solutions",
    description:
      "Our freight forwarding services ensure seamless international shipments, while our customs.",
  },
  {
    icon: service4,
    title: "Inventory Management",
    description:
      "Our freight forwarding services ensure seamless international shipments, while our customs.",
  },
  {
    icon: service5,
    title: "Inventory Management",
    description:
      "Our freight forwarding services ensure seamless international shipments, while our customs.",
  },
];

const OurServices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const settings = {
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (next: number) => {
      setActiveIndex(next);
    },
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="ca-service-2 off-wh pt-100 pb-70">
      <Container className="container">
        <Row>
          <Col lg={3} className="mb-30">
            <div
              className="ca-service-content-2 ca-sec-content-2 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h5 className="ca-section-subtitle subtitle-bg-4 p-relative theme-color-2">
                Our Services
              </h5>
              <h2 className="ca-about-title theme-black-2 fnw-600 pt-16 ca-text-cap">
                End-to-End Supply Chain Solutions
              </h2>
              <p className="pt-16 pb-32">
                We offer a comprehensive suite of <br />
                logistics transport services designed <br /> to streamline your
                supply chain.
              </p>
            </div>
            <div
              className="ca-service-2-btn aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Link to="/services" className="ca-btn-primary-22">
                Learn More
                <span>
                  <BiRightArrowAlt />
                </span>
              </Link>
            </div>
          </Col>
          <Col lg={9} className="mb-30">
            <div
              className="ca-service-bg aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img className="w-100" src={service1} alt="" />
            </div>
            <Slider
              {...settings}
              className="ca-service-slier-2 aos-init aos-animate"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
            >
              {servicesData.map((service, index) => (
                <div
                  className={`ca-servic-2 slick-slide ${
                    activeIndex === index
                      ? "slick-current slick-active slick-center"
                      : ""
                  }`}
                  key={index}
                >
                  <div className="ca-servic-2-ic mb-24">
                    <span>
                      <img src={service.icon} alt={service.title} />
                    </span>
                  </div>
                  <div className="ca-servic-2-content">
                    <h3 className="ca-servic-2-title pb-16">{service.title}</h3>
                  </div>
                  <div className="ca-service-2-desc">
                    <p>{service.description}</p>
                    <Link to="" className="seread-more">
                      Read More
                      <span>
                        <BiChevronRight className="fs-2" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
