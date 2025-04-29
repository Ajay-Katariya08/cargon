
import { BiRightArrowAlt } from "react-icons/bi";

import dotShape from "@/assets/img/shape/ca-dot-shape4.1.png";
import heroImage from "@/assets/img/slider/ca-hero-4.png";
import circle1 from "@/assets/img/slider/circle-text.png";
import circle2 from "@/assets/img/icon/circle-ic.svg";
import { Link } from "react-router-dom";

interface Hero4Props {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<Hero4Props> = ({
  subtitle = "What We Do",
  title = "Transporting Your Business to New Heights logistic",
  description = "Our innovative approach leverages the latest technology streamline <br /> your supply chain, optimize routes, and provide real-time tracking.",
  buttonText = "Our Service",
  buttonLink = "#",
}) => {
  return (
    <>
      <div className="ca-hero-4 p-relative z-index-1 fix">
        <div className="ca-hero-4-shape p-absolute">
          <img src={dotShape} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="ca-hero-4-content wow tpFadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".1s"
              >
                <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
                  {subtitle}
                </h5>
                <h1 className="ca-slider-heading text-white pt-20 pb-20 ca-text-cap">
                  {title}
                </h1>
                <p
                  className="pb-32"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
                <div className="ca-hero-4-btn">
                  <Link
                    to={buttonLink}
                    className="ca-btn-primary ca-btn-primary-4 theme-bg-4 text-white br-50"
                  >
                    {buttonText}{" "}
                    <span>
                      <BiRightArrowAlt />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
        <div className="ca-hero-4-img">
          <img className="w-100" src={heroImage} alt="" />
        </div>
      </div>
      <div className="ca-circle-text text-center">
        <img className="circle-text-animation" src={circle1} alt="" />
        <div className="circle-ic-4">
          <img src={circle2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
