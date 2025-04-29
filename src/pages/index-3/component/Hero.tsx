import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "@/assets/img/slider/hero1.png";
import hero2Shape from "@/assets/img/slider/her-2-shape.png";
import hero1Shape from "@/assets/img/shape/hero1-shape.png";
import { BiChevronRight, BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

interface SliderItem {
  subtitle: string;
  title: string;
  description: string;
  serviceLink: string;
  videoLink: string;
}

const sliderData: SliderItem[] = [
  {
    subtitle: "Cargon-Transport & Logistics",
    title: "Seamless Transport And Logistics for a Global Reach",
    description:
      "At Cargon, we are dedicated to driving your business forward with our reliable <br> and efficient transport and logistics solutions. With a global reach and local <br> expertise, we seamlessly connect the world through our comprehensive.",
    serviceLink: "#",
    videoLink: "https://www.youtube.com/watch?v=HkYGxh1XUGQ",
  },
  {
    subtitle: "Cargon-Transport & Logistics",
    title: "Seamless Transport And Logistics for a Global Reach",
    description:
      "At Cargon, we are dedicated to driving your business forward with our reliable <br> and efficient transport and logistics solutions. With a global reach and local <br> expertise, we seamlessly connect the world through our comprehensive.",
    serviceLink: "#",
    videoLink: "https://www.youtube.com/watch?v=HkYGxh1XUGQ",
  },
  {
    subtitle: "Cargon-Transport & Logistics",
    title: "Seamless Transport And Logistics for a Global Reach",
    description:
      "At Cargon, we are dedicated to driving your business forward with our reliable <br> and efficient transport and logistics solutions. With a global reach and local <br> expertise, we seamlessly connect the world through our comprehensive.",
    serviceLink: "#",
    videoLink: "https://www.youtube.com/watch?v=HkYGxh1XUGQ",
  },
];

const Hero: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    autoplay: true,
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 3000,
    infinite: true,
    cssEase: "ease",
    touchThreshold: 100,
  };

  return (
    <Slider {...settings} ref={sliderRef} className="ca-hero1-active">
      {sliderData.map((slide, index) => (
        <section key={index} className="ca-hero-area-1">
          <div className="ca-img1">
            <img src={hero1} alt="" />
          </div>
          <div className="ca-img2">
            <img src={hero2Shape} alt="" />
          </div>
          <div className="ca-hero-shape-1 p-absolute d-none d-lg-block">
            <img src={hero1Shape} alt="" />
          </div>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="ca-hero-content-1">
                  <h5 className="ca-section-subtitle subtitle-bg-10 p-relative br-50">
                    {slide.subtitle}
                  </h5>
                  <h1 className="ca-slide-title-1 ca-text-cap">
                    {slide.title}
                  </h1>
                  <p
                    className="ca-text-cap"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  ></p>
                  <div className="ca-sli-btn-1 mt-32">
                    <div className="ca-btn-1">
                      <Link
                        to={slide.serviceLink}
                        className="ca-btn-primary theme-bg-1 text-white br-50 ca-text-cap"
                      >
                        Our Service
                        <span>
                          <BiChevronRight className="fs-2" />
                        </span>
                      </Link>
                    </div>
                    <div className="ca-vid-content">
                      <div className="ca-vd-ply-btn">
                        <div className="wrapper">
                          <div className="video-main">
                            <div className="promo-video">
                              <div className="waves-block">
                                <div className="waves wave-1"></div>
                                <div className="waves wave-2"></div>
                                <div className="waves wave-3"></div>
                              </div>
                            </div>
                            <Link
                              to={slide.videoLink}
                              className="video popup-video"
                              // style={{ display: "flex" }}
                            >
                              <BiPlay
                                style={{
                                  fontSize: "25px",
                                  textAlign: "center",
                                  marginBottom: "5px",
                                }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="ca-vd-py-text">
                        <Link to={slide.videoLink} className="popup-video">
                          <span>How We Work</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </Slider>
  );
};

export default Hero;
