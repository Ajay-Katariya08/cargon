import Container from "react-bootstrap/Container";

import brand1 from "@/assets/img/brand/brand-1.png";
import brand2 from "@/assets/img/brand/brand-2.png";
import brand3 from "@/assets/img/brand/brand-3.png";
import brand4 from "@/assets/img/brand/brand-4.png";
import brand5 from "@/assets/img/brand/brand-5.png";
import brand6 from "@/assets/img/brand/brand-6.png";
import brand11 from "@/assets/img/brand/brand-1.1.png";
import brand12 from "@/assets/img/brand/brand-1.2.png";
import brand13 from "@/assets/img/brand/brand-1.3.png";
import brand14 from "@/assets/img/brand/brand-1.4.png";
import brand15 from "@/assets/img/brand/brand-1.5.png";
import brand16 from "@/assets/img/brand/brand-1.6.png";
import Slider from "react-slick";

const brandLogos1: string[] = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand3,
];
const brandLogos2: string[] = [
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand14,
  brand13,
  brand12,
];

const Sponsor: React.FC = () => {
  const brand1 = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brand2 = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="ca-sponsor-area pt-100 pb-70">
      <Container>
        <div
          className="ca-sponsor-content-4 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
            Happy Client And Sponsor
          </h5>
          <h2 className="ca-section-title theme-black-4 fnw-600 pt-16 ca-text-cap">
            Trusted By Our 356.00 Clients
          </h2>
        </div>
      </Container>
      <Slider {...brand1} className="ca-brand-slides mb-24">
        {brandLogos1.map((logo, index) => (
          <div key={index}>
            <div className="ca-brand-item">
              <img src={logo} alt={`Brand ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
      <Slider {...brand2} className="ca-brand-slides-2">
        {brandLogos2.map((logo, index) => (
          <div key={index}>
            <div className="ca-brand-item">
              <img src={logo} alt={`Brand ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sponsor;
