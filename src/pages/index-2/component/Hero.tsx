import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderShape1 from "@/assets/img/shape/slider-shape-2.1.png";
import sliderShape2 from "@/assets/img/shape/slider-shape-2.2.png";
import shape2 from "@/assets/img/shape/ca-black-shpae-2.png";
import teamShape from "@/assets/img/shape/team-shape-2.1.png";
import thumb1 from "@/assets/img/slider/sm-slider-thumb-2.2.png";
import thumb2 from "@/assets/img/slider/sm-slider-thumb-2.3.png";
import { BiArrowToRight, BiSolidStar } from "react-icons/bi";

const Hero = () => {
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current!);
    setNav2(sliderRef2.current!);
  }, []);

  const sliderForSettings = {
    asNavFor: nav2,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 3000,
  };

  const sliderNavSettings = {
    asNavFor: nav1,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    autoplay: true,
    speed: 3000,
  };

  return (
    <>
      <Slider
        ref={sliderRef1}
        {...sliderForSettings}
        className="slider-for slider-2-img"
      >
        <div className="slider-text slider-2 p-relative z-index-1 pt-208 pb-70 fix slider-2-bg-3">
          <div className="ca-slider-2-shape p-absolute shape-2-slider">
            <img src={sliderShape1} alt="" />
          </div>
          <div className="ca-slider-2-shape p-absolute shape-1-slider">
            <img src={sliderShape2} alt="" />
          </div>
          <div className="ca-slider-2-shape p-absolute shape-3-slider">
            <img src={shape2} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mb-30">
                <div className="ca-slider-content-2 p-relative">
                  <h5 className="ca-section-subtitle subtitle-bg-5 text-white theme-color-2">
                    Cargon-Transport & Logistics
                  </h5>
                  <h1 className="ca-slider-heading text-white pt-20 pb-20 ca-text-cap">
                    Seamless Transport Solutions for Your
                    <br /> We Are Business
                  </h1>
                  <p className="pb-32 slider-sub-content">
                    Test Whether you're navigating complex international
                    shipments or need streamlined local deliveries, we are your
                    trusted partner.
                  </p>
                  <div className="ca-slider-2-btn d-flex mb-60">
                    <div className="ca-slider-btn-2">
                      <a href="#" className="ca-btn-primary-22 mr-16">
                        Get A Free Quote
                        <span>
                          <BiArrowToRight />
                        </span>
                      </a>
                    </div>
                    <div className="ca-slider-2-video">
                      <a
                        href="https://www.youtube.com/watch?v=x-RUZeNbqL4"
                        className="video-play-button-2 popup-video"
                      >
                        <span></span>
                      </a>
                      <div className="ca-slider-video-text-2">
                        <span> How We Work</span>
                      </div>
                    </div>
                  </div>
                  <div className="ca-slider-team">
                    <h3 className="slider-team-title text-white mb-20">
                      Our Team Always Ready For You
                    </h3>
                    <div className="ca-slider-2-team">
                      <div className="ca-slider-team-img">
                        <img src={teamShape} alt="" />
                      </div>
                      <div className="ca-slider-team-review">
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span className="re-heading">5.0</span>
                        <p className="review-text">246k Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-text slider-2 p-relative z-index-1 pt-208 pb-70 fix slider-2-bg-2">
          <div className="ca-slider-2-shape p-absolute shape-2-slider">
            <img src={sliderShape1} alt="" />
          </div>
          <div className="ca-slider-2-shape p-absolute shape-1-slider">
            <img src={sliderShape2} alt="" />
          </div>
          <div className="ca-slider-2-shape p-absolute shape-3-slider">
            <img src={shape2} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mb-30">
                <div className="ca-slider-content-2 p-relative">
                  <h5 className="ca-section-subtitle subtitle-bg-5 text-white theme-color-2">
                    Cargon-Transport & Logistics
                  </h5>
                  <h1 className="ca-slider-heading text-white pt-20 pb-20 ca-text-cap">
                    Seamless Transport Solutions for Your
                    <br /> We Are Business
                  </h1>
                  <p className="pb-32 slider-sub-content">
                    Test Whether you're navigating complex international
                    shipments or need streamlined local deliveries, we are your
                    trusted partner.
                  </p>
                  <div className="ca-slider-2-btn d-flex mb-60">
                    <div className="ca-slider-btn-2">
                      <a href="#" className="ca-btn-primary-22 mr-16">
                        Get A Free Quote
                        <span>
                          <BiArrowToRight />
                        </span>
                      </a>
                    </div>
                    <div className="ca-slider-2-video">
                      <a
                        href="https://www.youtube.com/watch?v=x-RUZeNbqL4"
                        className="video-play-button-2 popup-video"
                      >
                        <span></span>
                      </a>
                      <div className="ca-slider-video-text-2">
                        <span> How We Work</span>
                      </div>
                    </div>
                  </div>
                  <div className="ca-slider-team">
                    <h3 className="slider-team-title text-white mb-20">
                      Our Team Always Ready For You
                    </h3>
                    <div className="ca-slider-2-team">
                      <div className="ca-slider-team-img">
                        <img src={teamShape} alt="" />
                      </div>
                      <div className="ca-slider-team-review">
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span>
                          <BiSolidStar />
                        </span>
                        <span className="re-heading">5.0</span>
                        <p className="review-text">246k Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-text slider-2 p-relative z-index-1 pt-208 pb-70 fix slider-2-bg-2">
          <div className="ca-slider-2-shape p-absolute shape-2-slider">
            <img src={sliderShape1} alt="" />
          </div>
          <div className="ca-slider-2-shape p-absolute shape-1-slider">
            <img src={sliderShape2} alt="" />
          </div>
          <div className="ca-slider-2-shape p-absolute shape-3-slider">
            <img src={shape2} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mb-30">
                <div className="ca-slider-content-2 p-relative">
                  <h5 className="ca-section-subtitle subtitle-bg-5 text-white theme-color-2">
                    Cargon-Transport & Logistics
                  </h5>
                  <h1 className="ca-slider-heading text-white pt-20 pb-20 ca-text-cap">
                    Seamless Transport Solutions for Your
                    <br /> We Are Business
                  </h1>
                  <p className="pb-32 slider-sub-content">
                    Test Whether you're navigating complex international
                    shipments or need streamlined local deliveries, we are your
                    trusted partner.
                  </p>
                  <div className="ca-slider-2-btn d-flex mb-60">
                    <div className="ca-slider-btn-2">
                      <a href="#" className="ca-btn-primary-22 mr-16">
                        Get A Free Quote
                        <span>
                          <BiArrowToRight />
                        </span>
                      </a>
                    </div>
                    <div className="ca-slider-2-video">
                      <a
                        href="https://www.youtube.com/watch?v=x-RUZeNbqL4"
                        className="video-play-button-2 popup-video"
                      >
                        <span></span>
                      </a>
                      <div className="ca-slider-video-text-2">
                        <span> How We Work</span>
                      </div>
                    </div>
                  </div>
                  <div className="ca-slider-team">
                    <h3 className="slider-team-title text-white mb-20">
                      Our Team Always Ready For You
                    </h3>
                    <div className="ca-slider-2-team">
                      <div className="ca-slider-team-img">
                        <img src={teamShape} alt="" />
                      </div>
                      <div className="ca-slider-team-review">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="re-heading">5.0</span>
                        <p className="review-text">246k Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <Slider
        ref={sliderRef2}
        {...sliderNavSettings}
        className="slider-nav sm-slider-img d-none d-md-block"
      >
        <div>
          <img src={thumb1} alt="Thumbnail 1" />
        </div>
        <div>
          <img src={thumb2} alt="Thumbnail 2" />
        </div>
        <div>
          <img src={thumb1} alt="Thumbnail 3" />
        </div>
        <div>
          <img src={thumb2} alt="Thumbnail 3" />
        </div>
      </Slider>
    </>
  );
};

export default Hero;
