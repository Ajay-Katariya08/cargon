import { useState } from "react";
import ca_expand_gallery3_1 from "@/assets/img/service/ca-expand-gallery3.1.png";
import ca_expand_gallery3_2 from "@/assets/img/service/ca-expand-gallery3.2.png";
import ca_expand_gallery3_3 from "@/assets/img/service/ca-expand-gallery3.3.png";
import icon from "@/assets/img/icon/ca-expand-ic3.1.svg";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Service = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      image: ca_expand_gallery3_1,
      title: "Supply Chain Management",
      description:
        "From freight forwarding & customs brokerage to warehousing solutions and supply chain management, our expertise ensures that your logistics operations are seamless and efficient.",
    },
    {
      id: 2,
      image: ca_expand_gallery3_2,
      title: "Supply Chain Management",
      description:
        "From freight forwarding & customs brokerage to warehousing solutions and supply chain management, our expertise ensures that your logistics operations are seamless and efficient.",
    },
    {
      id: 3,
      image: ca_expand_gallery3_3,
      title: "Supply Chain Management",
      description:
        "From freight forwarding & customs brokerage to warehousing solutions and supply chain management, our expertise ensures that your logistics operations are seamless and efficient.",
    },
    {
      id: 4,
      image: ca_expand_gallery3_1,
      title: "Supply Chain Management",
      description:
        "From freight forwarding & customs brokerage to warehousing solutions and supply chain management, our expertise ensures that your logistics operations are seamless and efficient.",
    },
    {
      id: 5,
      image: ca_expand_gallery3_2,
      title: "Supply Chain Management",
      description:
        "From freight forwarding & customs brokerage to warehousing solutions and supply chain management, our expertise ensures that your logistics operations are seamless and efficient.",
    },
  ];

  const handleSlideHover = (id: number) => {
    setActiveSlide(id);
  };

  const handleSlideLeave = () => {
    setActiveSlide(null);
  };

  return (
    <section className="ca-service-3 cream-bg-3 pt-100 pb-70">
      <div className="container">
        <div
          className="ca-portfolio-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Our Service
          </h5>
          <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
            Our Range of Logistics Services
          </h2>
          <p className="pt-16">
            Our state-of-the-art facilities and innovative technology support
            e-commerce
            <br /> fulfillment and project cargo handling, providing you with
            tailored solutions.
          </p>
        </div>
      </div>

      <div className="expand-container">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slide ${activeSlide === slide.id ? "active" : ""}`}
            onMouseEnter={() => handleSlideHover(slide.id)}
            onMouseLeave={handleSlideLeave}
          >
            <img
              className="expand-slide-img"
              src={slide.image}
              alt={slide.title}
            />
            <div className="expand-slide-ic-box">
              <div className="ca-expand-ic">
                <span>
                  <img src={icon} alt="" />
                </span>
              </div>
              <h2 className="ca-expand-title">
                <Link to="#">{slide.title}</Link>
              </h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
