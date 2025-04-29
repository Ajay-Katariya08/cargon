import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import shapeImage from "@/assets/img/shape/shape-1.1.png";
import footerShapeImage from "@/assets/img/shape/ca-footer-shape3.1.png";
import quoteImage from "@/assets/img/icon/ca-testimonialquote4.1.svg";
import testimonialImage1 from "@/assets/img/testimonial/ca-testimonial4.1.png";
import testimonialImage2 from "@/assets/img/testimonial/ca-testimonial4.2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "“From ensuring seamless international shipments to providing efficient domestic deliveries, our clients commend our ability to handle their logistics challenges with precision and care.”",
    name: "Alesha Healy",
    designation: "Cargon Operator",
    image: testimonialImage1,
  },
  {
    quote:
      "“We take pride in the positive feedback we receive businesses <br> across various industries who rely on our expertise to meet their logistics needs. Our clients consistently highlight our reliable.”",
    name: "Virginia Dea",
    designation: "Cargon Operator",
    image: testimonialImage2,
  },
  {
    quote:
      "“From ensuring seamless international shipments to providing efficient domestic deliveries, our clients commend our ability to handle their logistics challenges with precision and care.”",
    name: "Alesha Healy",
    designation: "Cargon Operator",
    image: testimonialImage1,
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <section className="ca-testimonial-4 theme-black-bg-4 pt-100 pb-70 p-relative z-index-1">
      <div className="ca-shape ca-test-shape p-absolute">
        <img src={shapeImage} alt="" />
      </div>
      <div className="ca-service-shape p-absolute">
        <img src={footerShapeImage} alt="" />
      </div>
      <Container>
        <div
          className="ca-blog-content-4 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-9 text-white p-relative br-50">
            Testimonial
          </h5>
          <h2 className="ca-section-title text-white fnw-600 pt-16 ca-text-cap">
            Success Stories from Our
            <br /> Clients Feedback
          </h2>
        </div>
        <Row>
          <Col xs={12}>
            <div className="ca-testimonials">
              <Slider {...settings} className="ca-testimonials-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="ca-testimonial-card-3 ca-testimonial-card-4 br-7">
                      <div className="ca-quote-4">
                        <img src={quoteImage} alt="" />
                      </div>
                      <div className="ca-test-4-rating">
                        <div className="ca-ratings-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              <BiSolidStar />
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className="ca-test-4-content"
                        dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                      ></div>
                      <div className="ca-test-3-user mt-24">
                        <div className="ca-test-3-user-img">
                          <span>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </span>
                        </div>
                        <div className="ca-test-4-user-name">
                          <h4 className="test-3-title">
                            <Link to="#">{testimonial.name}</Link>
                          </h4>
                          <span>{testimonial.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
