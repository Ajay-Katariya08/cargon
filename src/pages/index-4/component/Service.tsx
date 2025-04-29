import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import planeImage from "@/assets/img/shape/ca-plane-1.1.png";
import ftShapeImage from "@/assets/img/shape/ca-ft-shape4.1.png";
import serviceImage1 from "@/assets/img/service/ca-service-4.1.png";
import serviceImage3 from "@/assets/img/service/ca-service-4.3.png";
import overlayServiceImage from "@/assets/img/service/ca-overlay-servic-4.png";
import serviceIcon1 from "@/assets/img/icon/ca-service-ic-4.1.svg";
import serviceIcon2 from "@/assets/img/icon/ca-service-ic-4.2.svg";
import serviceIcon3 from "@/assets/img/icon/ca-service-ic-4.3.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

const serviceItems: ServiceItem[] = [
  {
    title: "Express Delivery Services",
    description:
      "We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.",
    image: serviceImage1,
    icon: serviceIcon1,
    link: "#",
  },
  {
    title: "Supply Chain Management",
    description:
      "We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.",
    image: serviceImage3,
    icon: serviceIcon3,
    link: "#",
  },
  {
    title: "Express Delivery Services",
    description:
      "We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.",
    image: serviceImage1,
    icon: serviceIcon1,
    link: "#",
  },
  {
    title: "Freight Consolidation",
    description:
      "We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.",
    image: serviceImage1,
    icon: serviceIcon2,
    link: "#",
  },
];

const Service = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
      setCurrentSlide(next);
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
    <section className="ca-service-4 cream-bg-3 pt-100 pb-70 p-relative z-index-1">
      <div className="ca-servic-4-shape p-absolute">
        <img src={planeImage} alt="" />
      </div>
      <div className="ca-servic-4-shape-2 p-absolute">
        <img src={ftShapeImage} alt="" />
      </div>
      <Container>
        <div
          className="ca-service-content-4 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
            Our Service
          </h5>
          <h2 className="ca-section-title theme-black-4 fnw-600 pt-16 ca-text-cap">
            Cold Chain Logistics Services
          </h2>
          <p className="pt-16">
            From freight forwarding and customs brokerage to warehousing
            solutions &<br /> supply chain management, our expertise ensures
            that your logistics.
          </p>
        </div>
        <Row>
          <Slider {...settings} className="ca-services-4">
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className={`ca-service-4-item br-7 fix p-relative z-index-1 mb-30 ${
                  currentSlide === index
                    ? "slick-slide slick-current slick-active slick-center"
                    : ""
                }`}
              >
                <div className="ca-service-4-item br-7 fix p-relative z-index-1 mb-30">
                  <img className="w-100" src={item.image} alt="" />
                  <div className="ca-servic-4-ic-box p-absolute">
                    <div className="ca-service-4-icon">
                      <span>
                        <img src={item.icon} alt="" />
                      </span>
                    </div>
                    <div className="ca-service-4-content">
                      <h3 className="ca-ser-4-title">
                        <Link to={item.link}>{item.title}</Link>
                      </h3>
                      {index === 1 && (
                        <div className="text-center">
                          <p className="text-center">Supply Chain Management</p>
                        </div>
                      )}
                      <p>{item.description}</p>
                      <Link to={item.link} className="read-mor4">
                        Read More{" "}
                        <span>
                          <BiRightArrowAlt />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="ca-ser-overlay p-absolute">
                    <img className="w-100" src={overlayServiceImage} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
