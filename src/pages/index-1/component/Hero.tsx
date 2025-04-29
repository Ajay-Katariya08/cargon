import { BiChevronRight } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";

import shape3 from "@/assets/img/shape/ca-shape3.3.png";
import shapeImage3 from "@/assets/img/shape/ca-image-shape3.3.png";
import truckSlide3 from "@/assets/img/slider/truck-slide3.png";
import caShape3_1 from "@/assets/img/shape/ca-shape3.1.png";
import overlay_shape3_2 from "@/assets/img/shape/overlay-shape3.2.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  buttonLabel: string;
  discoverLabel: string;
}

const heroSlides: HeroSlide[] = [
  {
    subtitle: "Cargon-Transport & Logistics",
    title: "Delivering Success Through Logistics And Expertise",
    description:
      "Whether it's international shipping, domestic transport, specialized logistics, our expertise ensures that every shipment is handled with precision and care.",
    buttonLabel: "Get Started",
    discoverLabel: "Discover More",
  },
  {
    subtitle: "Cargon-Global Logistics",
    title: "Optimizing Your Supply Chain Worldwide",
    description:
      "We connect businesses globally, offering seamless logistics solutions that drive efficiency and growth across international markets.",
    buttonLabel: "Explore Services",
    discoverLabel: "Learn More",
  },
  {
    subtitle: "Cargon-Reliable Transport",
    title: "Your Trusted Partner in Timely Deliveries",
    description:
      "From local deliveries to complex project logistics, we ensure your goods arrive on time, every time, with our dedicated team and advanced technology.",
    buttonLabel: "Contact Us",
    discoverLabel: "View Solutions",
  },
];

const Hero = () => {
  const settings = {
    arrows: false,
    dots: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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
    <Slider {...settings} className="ca-slider-active-3">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="ca-slider-3 cream-bg-3 p-relative z-index-1 fix"
        >
          <div className="ca-slider-3-shape d-none d-lg-block">
            <img src={shape3} alt="Shape" />
            <div className="ca-slider-top-shape-img">
              <img src={shapeImage3} alt="Top Shape" />
            </div>
          </div>
          <div className="ca-slider-img-3 p-absolute">
            <img src={truckSlide3} alt="Truck Slide" className="img-fluid" />
          </div>
          <div className="ca-line-shape3">
            <img src={caShape3_1} alt="Line Shape" />
          </div>
          <div className="ca-overlay-shape3 p-absolute">
            <img src={overlay_shape3_2} alt="Overlay Shape" />
          </div>
          <Container>
            <Row>
              <Col lg={6} md={10}>
                <div className="ca-hero-content-3">
                  <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                    {slide.subtitle}
                  </h5>
                  <h1 className="ca-slider-heading theme-black-3 fnw-600 pt-20 pb-20">
                    {slide.title}
                  </h1>
                  <p className="pt-16 pb-32">{slide.description}</p>
                  <div className="hero3-btn">
                    <Link
                      to="/contact"
                      className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                    >
                      {slide.buttonLabel}
                      <span>
                        <BiChevronRight className="fs-2" />
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="ca-sec-primary-3 theme-color-3 br-50"
                    >
                      {slide.discoverLabel}
                      <span>
                        <BiChevronRight className="fs-2" />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
