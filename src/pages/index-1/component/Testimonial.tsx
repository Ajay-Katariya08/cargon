import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ca_testi3_1 from "@/assets/img/testimonial/ca-testi3.1.png";
import testimonial_2_1 from "@/assets/img/testimonial/testimonial-2.1.png";
import ca_testi3_2 from "@/assets/img/testimonial/ca-testi3.2.png";
import { BiSolidStar } from "react-icons/bi";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  description: string;
  userImage: string;
  userName: string;
  userRole: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      title:
        "“Read about how our tailored solutions have helped businesses achieve.”",
      description:
        "Our clients' satisfaction is our top priority, and their feedback speaks volumes about our dedication to excellence. We take immense pride in the positive experiences shared by businesses across various industries who rely on our transport and logistics expertise.",
      userImage: ca_testi3_1,
      userName: "Shevon Daniel",
      userRole: "Co-Founder",
    },
    {
      id: 2,
      rating: 5,
      title:
        "“Hear from the businesses we support and their journey with our logistics.”",
      description:
        "At Cargon, client satisfaction is at the heart of everything we do. We are proud to share the positive experiences of our clients, whose testimonials reflect our commitment to delivering exceptional transport and logistics solutions whether it's seamless international.",
      userImage: testimonial_2_1,
      userName: "Muhammad Waseem",
      userRole: "Co-Founder",
    },
    {
      id: 3,
      rating: 5,
      title:
        "“Leading businesses share their success stories and why they rely on logistics.”",
      description:
        "Whether it's seamless international shipping, efficient domestic transport, or specialized logistics services, our clients consistently praise our ability to meet and exceed their expectations. They highlight our innovative approach, reliable execution, & dedicated.",
      userImage: ca_testi3_2,
      userName: "Shevon Daniel",
      userRole: "Co-Founder",
    },
    {
      id: 4,
      rating: 5,
      title:
        "“Read about how our tailored solutions have helped businesses achieve.”",
      description:
        "Our clients' satisfaction is our top priority, and their feedback speaks volumes about our dedication to excellence. We take immense pride in the positive experiences shared by businesses across various industries who rely on our transport and logistics expertise.",
      userImage: ca_testi3_1,
      userName: "Shevon Daniel",
      userRole: "Co-Founder",
    },
  ];

  const settings = {
    arrows: false,
    dots: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
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
    <section className="ca-testimonial3 pt-100">
      <Container className="container">
        <div
          className="ca-testimonial-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate"
          data-aos="zoom-out-down"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Our Testimonial
          </h5>
          <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
            Trusted by Industry Leaders
          </h2>
          <p className="pt-16">
            Their testimonials highlight our commitment to overcoming logistical
            <br />
            challenges and delivering on our promises. Read on to discover.
          </p>
        </div>

        <div className="row">
          <div className="ca-testimonials">
            <Slider {...settings} className="ca-testimonial-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="ca-testimonial-card-3 br-7"
                >
                  <div className="ca-test-3-rating">
                    <div className="ca-ratings-3">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <span key={index}>
                          <BiSolidStar style={{ fontSize: "20px" }} />
                        </span>
                      ))}
                    </div>
                    <div className="ca-rating-num-3">
                      <h4 className="ca-rating-title-3">
                        ({testimonial.rating}) <span>Rating</span>
                      </h4>
                    </div>
                  </div>

                  <div className="ca-test-3-content">
                    <h4 className="ca-test-title-3">{testimonial.title}</h4>
                    <p>{testimonial.description}</p>
                  </div>

                  <div className="ca-test-3-user">
                    <div className="ca-test-3-user-img">
                      <span>
                        <img
                          src={testimonial.userImage}
                          alt={testimonial.userName}
                        />
                      </span>
                    </div>
                    <div className="ca-test-3-user-name">
                      <h4 className="test-3-title">
                        <Link to="#">{testimonial.userName}</Link>
                      </h4>
                      <span>{testimonial.userRole}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
