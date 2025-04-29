
import image1 from "@/assets/img/portfolio/portfolio-sm-1.1.png";
import arrow from "@/assets/img/icon/ca-portfolio-arrow-1.1.svg";
import image2 from "@/assets/img/portfolio/portfolio-big-1.1.png";
import image3 from "@/assets/img/portfolio/portfolio-big-1.2.png";
import image4 from "@/assets/img/portfolio/portfolio-sm-1.2.png";
import image5 from "@/assets/img/portfolio/portfolio-big-1.3.png";
import { Link } from "react-router-dom";


const OurPortfolio = () => {
  return (
    <section className="ca-portfolio-section pt-100 pb-70">
      <div className="container">
        <div
          className="ca-portfolio-content ca-sec-content text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h5 className="ca-section-subtitle subtitle-bg-1 p-relative theme-color-1 br-50">
            Our Portfolio
          </h5>
          <h2 className="ca-section-title theme-black-1 fnw-600 pt-16 ca-text-cap">
            Our Track Record of Success
          </h2>
          <p className="pt-16">
            {" "}
            We take pride in delivering tailored solutions that meet the unique
            needs of our <br /> clients across various industries. From complex
            international shipments.
          </p>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div
              className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="800"
            >
              <div className="ca-portfolio-img">
                <img className="w-100 br-7" src={image1} alt="" />
              </div>
              <div className="ca-portfolio-link">
                <Link to="/projects/single" className="portfolio-link">
                  <span>
                    <img src={arrow} alt="" />
                  </span>
               </Link>
              </div>
              <div className="ca-portfolio-content-meta theme-bg-1 br-7">
                <p>Transportation 2024</p>
                <h4 className="ca-por-title ca-text-cap">
                  <Link to="/projects/single">
                    Experts in Logistics Management
                 </Link>
                </h4>
              </div>
            </div>

            <div
              className="ca-single-portfolio-item big-img p-relative z-index-1 fix mb-30 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="ca-portfolio-img">
                <img className="w-100 br-7" src={image2} alt="" />
              </div>
              <div className="ca-portfolio-link">
                <Link to="/projects/single" className="portfolio-link">
                  <span>
                    <img src={arrow} alt="" />
                  </span>
               </Link>
              </div>
              <div className="ca-portfolio-content-meta theme-bg-1 br-7">
                <p>Transportation 2024</p>
                <h4 className="ca-por-title ca-text-cap">
                  <Link to="/projects/single">
                    Experts in Logistics Management
                 </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              className="ca-single-portfolio-item big-img p-relative z-index-1 fix mb-30 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="1200"
            >
              <div className="ca-portfolio-img">
                <img className="w-100 br-7" src={image3} alt="" />
              </div>
              <div className="ca-portfolio-link">
                <Link to="/projects/single" className="portfolio-link">
                  <span>
                    <img src={arrow} alt="" />
                  </span>
               </Link>
              </div>
              <div className="ca-portfolio-content-meta theme-bg-1 br-7">
                <p>Transportation 2024</p>
                <h4 className="ca-por-title ca-text-cap">
                  <Link to="/projects/single">
                    Experts in Logistics Management
                 </Link>
                </h4>
              </div>
            </div>

            <div
              className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="1400"
            >
              <div className="ca-portfolio-img">
                <img className="w-100 br-7" src={image4} alt="" />
              </div>
              <div className="ca-portfolio-link">
                <Link to="/projects/single" className="portfolio-link">
                  <span>
                    <img src={arrow} alt="" />
                  </span>
               </Link>
              </div>
              <div className="ca-portfolio-content-meta theme-bg-1 br-7">
                <p>Transportation 2024</p>
                <h4 className="ca-por-title ca-text-cap">
                  <Link to="/projects/single">
                    Experts in Logistics Management
                 </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="1600"
            >
              <div className="ca-portfolio-img">
                <img className="w-100 br-7" src={image4} alt="" />
              </div>
              <div className="ca-portfolio-link">
                <Link to="/projects/single" className="portfolio-link">
                  <span>
                    <img src={arrow} alt="" />
                  </span>
               </Link>
              </div>
              <div className="ca-portfolio-content-meta theme-bg-1 br-7">
                <p>Transportation 2024</p>
                <h4 className="ca-por-title ca-text-cap">
                  <Link to="/projects/single">
                    Experts in Logistics Management
                 </Link>
                </h4>
              </div>
            </div>

            <div
              className="ca-single-portfolio-item big-img p-relative z-index-1 fix mb-30 aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="1800"
            >
              <div className="ca-portfolio-img">
                <img className="w-100 br-7" src={image5} alt="" />
              </div>
              <div className="ca-portfolio-link">
                <Link to="/projects/single" className="portfolio-link">
                  <span>
                    <img src={arrow} alt="" />
                  </span>
               </Link>
              </div>
              <div className="ca-portfolio-content-meta theme-bg-1 br-7">
                <p>Transportation 2024</p>
                <h4 className="ca-por-title ca-text-cap">
                  <Link to="/projects/single">
                    Experts in Logistics Management
                 </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
