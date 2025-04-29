

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import userIcon from "@/assets/img/icon/user-1.1.svg";
import tagIcon from "@/assets/img/icon/tag-1.1.svg";
import blogImage1 from "@/assets/img/blog/ca-blog-4.1.png";
import blogImage2 from "@/assets/img/blog/ca-blog-4.2.png";
import { BiChevronRight, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  return (
    <>
      <section className="ca-blog pt-100 pb-70">
        <Container>
          <div
            className="ca-blog-content-4 text-center mb-60 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
              Our Blog
            </h5>
            <h2 className="ca-section-title theme-black-4 fnw-600 pt-16 ca-text-cap">
              {" "}
              Best Practices and Strategies
            </h2>
            <p className="pt-16">
              Delve into the challenges of last-mile delivery and explore
              strategies to overcome
              <br /> them. Learn how to improve delivery times, enhance customer
              satisfaction,
            </p>
          </div>
          <Row>
            <Col lg={6} md={6} className="mb-30">
              <div
                className="ca-team-box ca-blog-box-4 br-7 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="ca-team-img ca-blog-4-img">
                  <Link to="/blog/blogsingle">
                    <img className="w-100" src={blogImage1} alt="" />
                  </Link>
                </div>
                <div className="ca-blog-box-content w-bg ca-blog-box-content-4">
                  <div className="ca-b-meta">
                    <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                      <div className="ca-meta-icon">
                        <span>
                          <img src={userIcon} alt="" />
                        </span>
                      </div>
                      <div className="ca-meta-title">
                        <span>Henry Nicolls</span>
                      </div>
                    </Link>

                    <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                      <div className="ca-meta-icon">
                        <span>
                          <img src={tagIcon} alt="" />
                        </span>
                      </div>
                      <div className="ca-meta-title">
                        <span>Transport & Logistics</span>
                      </div>
                    </Link>
                  </div>
                  <h4 className="ca-blog-title ca-blog-title-3 fnw-600">
                    <Link to="#">
                      Meeting the Challenges of E-commerce Logistics
                    </Link>
                  </h4>
                  <p className="pt-16 pb-18">
                    Get expert tips on managing project cargo logistics planning
                    &
                    <br /> coordination to execution & delivery, discover best
                    practices.
                  </p>
                  <div className="blog-4-readmore">
                    <Link to="/blog/single" className="read-more3">
                      Read More{" "}
                      <span>
                        <BiChevronRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-30">
              <div
                className="ca-team-box ca-blog-box-4 br-7 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="ca-team-img ca-blog-4-img">
                  <Link to="/blog/blogsingle">
                    <img className="w-100" src={blogImage2} alt="" />
                  </Link>
                </div>
                <div className="ca-blog-box-content w-bg ca-blog-box-content-4">
                  <div className="ca-b-meta">
                    <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                      <div className="ca-meta-icon">
                        <span>
                          <img src={userIcon} alt="" />
                        </span>
                      </div>
                      <div className="ca-meta-title">
                        <span>Henry Nicolls</span>
                      </div>
                    </Link>

                    <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                      <div className="ca-meta-icon">
                        <span>
                          <img src={tagIcon} alt="" />
                        </span>
                      </div>
                      <div className="ca-meta-title">
                        <span>Transport & Logistics</span>
                      </div>
                    </Link>
                  </div>
                  <h4 className="ca-blog-title ca-blog-title-3 fnw-600">
                    <Link to="#">
                      Handling Project Cargo: Expert Tips & Strategies
                    </Link>
                  </h4>
                  <p className="pt-16 pb-18">
                    Explore the unique challenges of e-commerce logistics and
                    how
                    <br /> to overcome them. Find out how to handle high order
                    volumes.
                  </p>
                  <div className="blog-4-readmore">
                    <Link to="/blog/blogsingle" className="read-more3">
                      Read More{" "}
                      <span>
                        <span>
                          <BiChevronRight />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="ca-cta-section-4 pb-100">
        <div className="container theme-bg-4">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="ca-cta-content-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="ca-section-title cta-title-1 text-white fnw-700 pb-32 ca-text-cap">
                  Join Us Today And let Us Help <br /> You To Grow Your
                  Business.
                </h2>
                <div className="ca-btn-cta-4">
                  <Link
                    to="/contact"
                    className="ca-btn-primary ca-btn-primary-4 w-bg theme-color-4 br-50"
                  >
                    Get Started{" "}
                    <span>
                      <BiRightArrowAlt />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ca-cta-map-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349133.575550262!2d18.377667987858814!3d48.66673564526868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471460b9ae7cc67f%3A0xcd6b6167b1723a7d!2sSlovakia!5e0!3m2!1sen!2sbd!4v1724038046755!5m2!1sen!2sbd"
                  allowFullScreen={true}
                  className="ca-map-4"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
