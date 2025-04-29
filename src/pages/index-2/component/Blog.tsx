import { FaAngleRight } from "react-icons/fa";

import blog1 from "@/assets/img/blog/ca-blog-2.1.png";
import blog2 from "@/assets/img/blog/ca-blog-2.2.png";
import blog3 from "@/assets/img/blog/ca-blog-2.3.png";
import userIcon from "@/assets/img/icon/ca-user2.1.svg";
import calenderIcon from "@/assets/img/icon/ca-calender2.1.svg";
import { Link } from "react-router-dom";

interface BlogItem {
  image: string;
  title: string;
  description: string;
}

const blogData: BlogItem[] = [
  {
    image: blog1,
    title: "Maximizing Efficiency in Supply <br /> Chain Management",
    description:
      "From AI and automation to sustainability <br /> practices, learn how these innovations.",
  },
  {
    image: blog2,
    title: "How Technology is Revolutionizing <br /> the Logistics Industry",
    description:
      "Explore how innovations like IoT, blockchain, <br /> and big data analytics are revolutionizing.",
  },
  {
    image: blog3,
    title:
      "Effective Warehouse Management: Best Practices and <br /> Strategies Eco-Friendly Practices for Your Business",
    description:
      "Gain insights into effective warehouse management strategies that <br /> maximize space, improve accuracy, and boost productivity.",
  },
];

const BlogSection = () => {
  return (
    <section className="ca-blog pt-100 pb-70">
      <div className="container">
        <div
          className="ca-blog-content ca-sec-content-2 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-4 p-relative theme-color-2">
            Our Blog
          </h5>
          <h2 className="ca-section-title theme-black-2 fnw-600 pt-16">
            Reliable Freight Forwarding Services
          </h2>
          <p className="pt-16">
            Explore the unique challenges of e-commerce logistics and how to
            overcome them. Find out how to <br /> handle high order volumes,
            ensure fast delivery, & provide exceptional customer service.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div
              className="ca-team-box ca-blog-box-2 cream-bg-2 br-7 fix p-relative z-index-1 d-flex mb-30 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="ca-team-img ca-blogimg-2">
                <Link to="/blog/blogsingle">
                  <img className="" src={blogData[0].image} alt="" />
                </Link>
              </div>
              <div className="ca-blog-box-content ca-blog-box-content-2">
                <div className="ca-b-meta ca-b-meta-2">
                  <Link to="" className="ca-blog-meta ca-blog-meta-2">
                    <div className="ca-meta-icon">
                      <span>
                        <img src={userIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-meta-title ca-meta-title-2">
                      <span>Henry Nicolls</span>
                    </div>
                  </Link>

                  <Link to="" className="ca-blog-meta ca-blog-meta-2">
                    <div className="ca-meta-icon">
                      <span>
                        <img src={calenderIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-meta-title ca-meta-title-2">
                      <span>March 05, 2024</span>
                    </div>
                  </Link>
                </div>
                <h4
                  className="ca-blog-title fnw-600"
                  dangerouslySetInnerHTML={{ __html: blogData[0].title }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogData[0].description,
                  }}
                />
                <div className="blog-rearmore">
                  <Link to="/blog/blogsingle" className="read-more">
                    Read More{" "}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="ca-team-box ca-blog-box-2 cream-bg-2 br-7 fix p-relative z-index-1 d-flex mb-30 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="ca-team-img ca-blogimg-2">
                <Link to="/blog/blogsingle">
                  <img className="" src={blogData[1].image} alt="" />
                </Link>
              </div>
              <div className="ca-blog-box-content ca-blog-box-content-2">
                <div className="ca-b-meta ca-b-meta-2">
                  <Link to="" className="ca-blog-meta ca-blog-meta-2">
                    <div className="ca-meta-icon">
                      <span>
                        <img src={userIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-meta-title ca-meta-title-2">
                      <span>Henry Nicolls</span>
                    </div>
                  </Link>

                  <Link to="" className="ca-blog-meta ca-blog-meta-2">
                    <div className="ca-meta-icon">
                      <span>
                        <img src={calenderIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-meta-title ca-meta-title-2">
                      <span>March 05, 2024</span>
                    </div>
                  </Link>
                </div>
                <h4
                  className="ca-blog-title fnw-600"
                  dangerouslySetInnerHTML={{ __html: blogData[1].title }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogData[1].description,
                  }}
                />
                <div className="blog-rearmore">
                  <Link to="/blog/blogsingle" className="read-more">
                    Read More{" "}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div
              className="ca-team-box ca-blog-box-2 cream-bg-2 br-7 fix p-relative z-index-1 mb-30 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="ca-team-img ca-blogimg-2 ca-lar-img-2">
                <Link to="/blog/single">
                  <img className="w-100" src={blogData[2].image} alt="" />
                </Link>
              </div>
              <div className="ca-blog-box-content ca-blog-box-content-2">
                <div className="ca-b-meta ca-b-meta-2">
                  <Link to="" className="ca-blog-meta ca-blog-meta-2">
                    <div className="ca-meta-icon">
                      <span>
                        <img src={userIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-meta-title ca-meta-title-2">
                      <span>Henry Nicolls</span>
                    </div>
                  </Link>

                  <Link to="" className="ca-blog-meta ca-blog-meta-2">
                    <div className="ca-meta-icon">
                      <span>
                        <img src={calenderIcon} alt="" />
                      </span>
                    </div>
                    <div className="ca-meta-title ca-meta-title-2">
                      <span>March 05, 2024</span>
                    </div>
                  </Link>
                </div>
                <h4
                  className="ca-blog-title fnw-600"
                  dangerouslySetInnerHTML={{ __html: blogData[2].title }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogData[2].description,
                  }}
                />
                <div className="blog-rearmore">
                  <Link to="/blog/blogsingle" className="read-more">
                    Read More{" "}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
