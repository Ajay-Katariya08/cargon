import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import shape13 from "@/assets/img/shape/shape-1.3.png";
import shape14 from "@/assets/img/shape/shape-1.4.png";
import testimonialSm1 from "@/assets/img/testimonial/testimonial-sm-1.1.png";
import testimonialSm2 from "@/assets/img/testimonial/testimonial-sm-1.2.png";
import testimonialBig1 from "@/assets/img/testimonial/testimonial-big-1.1.png";
import { BiSolidStar } from "react-icons/bi";
import Slider from "react-slick";

interface TestimonialItem {
  name: string;
  designation: string;
  description: string;
}

const testimonialData: TestimonialItem[] = [
  {
    name: "Taskin Ahmed",
    designation: "Dramatically enhance",
    description:
      "Our clients' satisfaction is our top priority, and their <br> feedback speaks volumes about our commitment to <br> excellence. At Cargon, we take pride in building strong,<br> lasting relationships with our clients, who rely on our <br> expertise to meet their logistics & transport needs.",
  },
  {
    name: "Marcus Stoinis",
    designation: "Dramatically enhance",
    description:
      "Our clients' satisfaction is our top priority, and their <br> feedback speaks volumes about our commitment to <br> excellence. At Cargon, we take pride in building strong,<br> lasting relationships with our clients, who rely on our <br> expertise to meet their logistics & transport needs.",
  },
  {
    name: "Marcus Starc",
    designation: "Dramatically enhance",
    description:
      "Our clients' satisfaction is our top priority, and their <br> feedback speaks volumes about our commitment to <br> excellence. At Cargon, we take pride in building strong,<br> lasting relationships with our clients, who rely on our <br> expertise to meet their logistics & transport needs.",
  },
  {
    name: "Marcus Starc",
    designation: "Dramatically enhance",
    description:
      "Our clients' satisfaction is our top priority, and their <br> feedback speaks volumes about our commitment to <br> excellence. At Cargon, we take pride in building strong,<br> lasting relationships with our clients, who rely on our <br> expertise to meet their logistics & transport needs.",
  },
];

const Testimonial: React.FC = () => {
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current!);
    setNav2(sliderRef2.current!);
  }, []);

  const setting1 = {
    slidesToShow: 3,
    arrows: false,
    asNavFor: nav1,
    vertical: true,
    autoplay: true,
    dots: false,
  };

  const setting2 = {
    slidesToShow: 1,
    arrows: false,
    asNavFor: nav2,
    vertical: true,
    autoplay: true,
    verticalSwiping: true,
    dots: false,
    focusOnSelect: true,
  };
  return (
    <section className="ca-testimonial-section theme-black-bg-1 p-relative z-index-1 pt-100 pb-50">
      <div className="ca-testimonial-shape p-absolute test-shape-1">
        <img src={shape13} alt="" />
      </div>
      <div className="ca-testimonial-shape p-absolute test-shape-2">
        <img src={shape14} alt="" />
      </div>
      <Container>
        <Row>
          <Col
            lg={6}
            className="mb-30 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="ca-testimonial-content ca-sec-content mb-48">
              <h5 className="ca-section-subtitle subtitle-bg-3 p-relative text-white br-50 ca-text-cap">
                Our Testimonial
              </h5>
              <h2 className="ca-about-title text-white fnw-600 pt-12 ca-text-cap">
                Customer Success Stories <br /> Our Clients Speak
              </h2>
              <p className="pt-12 text-white">
                They appreciate our dedicated customer service, attention to
                detail, & ability <br /> navigate complex logistical challenges
                with ease. Read their stories & discover
                <br /> why businesses worldwide trust Cargon to deliver their
                goods safely.
              </p>
            </div>
            <Slider ref={sliderRef1} {...setting1} className="sm-slider-nav">
              {testimonialData.map((item, index) => (
                <div
                  key={index}
                  className="sm-testimonial-nav-content d-flex align-items-center"
                >
                  <div className="sm-single-nav-img">
                    <img
                      src={index % 2 === 0 ? testimonialSm1 : testimonialSm2}
                      alt=""
                    />
                  </div>
                  <div className="sm-nav-desc">
                    <h3 className="sm-testimonial-title">{item.name}</h3>
                    <span>{item.designation}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="ca-testimonial-slides">
              <div className="main-slides">
                <Slider
                  ref={sliderRef2}
                  {...setting2}
                  className="slider slider-main"
                >
                  {testimonialData.map((item, index) => (
                    <div key={index} className="ca-single-test-item mb-30">
                      <img src={testimonialBig1} alt="" className="w-100" />
                      <div className="ca-single-test-item-content">
                        <div className="catest-icon">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              <BiSolidStar />
                            </span>
                          ))}
                          <div className="catest-rating">
                            <p className="ca-rating-title">(5)</p>
                            <span>Rating</span>
                          </div>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                        <div className="ca-test-auth">
                          <h3 className="ca-auth-title">{item.name}</h3>
                          <span>{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
