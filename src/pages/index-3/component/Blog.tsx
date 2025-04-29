import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tag from "@/assets/img/icon/ca-ser-cat-tag.svg";
import user from "@/assets/img/icon/user-1.1.svg";

import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import { blogPosts } from "../../blog/data";

const dateMonth = [
  {
    date: 17,
    month: "march",
  },
  {
    date: 18,
    month: "march",
  },
  {
    date: 19,
    month: "march",
  },
];

const OurBlog = () => {
  return (
    <section className="ca-blog pt-100 pb-70">
      <Container>
        <div
          className="ca-blog-content ca-sec-content text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h5 className="ca-section-subtitle subtitle-bg-1 p-relative theme-color-1 br-50">
            Our Blog
          </h5>
          <h2 className="ca-section-title theme-black-1 fnw-600 pt-16 ca-text-cap">
            Eco-Friendly Practices in Logistics
          </h2>
          <p className="pt-16">
            Delve into the challenges of last-mile delivery and explore
            strategies to overcome them.
            <br /> Learn how to improve delivery times, enhance customer
            satisfaction.
          </p>
        </div>
        <Row>
          {blogPosts.slice(0, 3).map((blog, index) => (
            <Col key={index} xl={4} md={6} className="mb-30">
              <div
                className="ca-team-box ca-blog-box cream-bg-2 br-7 fix p-relative z-index-1 aos-init aos-animate"
                data-aos={`fade-${
                  index === 0 ? "right" : index === 1 ? "up" : "left"
                }`}
                data-aos-duration={`${(index + 1) * 200 + 600}`}
              >
                <div className="ca-team-img">
                  <a href={blog.link}>
                    <img src={blog.imageUrl} alt="" className="w-100" />
                  </a>
                </div>
                <div className="ca-blog-date">
                  <Link to="#" className="blg-date">
                    {dateMonth[index]?.date}
                  </Link>
                  <p>{dateMonth[index]?.month}</p>
                </div>
                <div className="ca-blog-box-content">
                  <div className="ca-b-meta">
                    <Link to="#" className="ca-blog-meta">
                      <div className="ca-meta-icon">
                        <img src={user} alt="" />
                      </div>
                      <div className="ca-meta-title">
                        <span>{blog.author}</span>
                      </div>
                    </Link>
                    <Link to="#" className="ca-blog-meta">
                      <div className="ca-meta-icon">
                        <img src={tag} alt="" />
                      </div>
                      <div className="ca-meta-title">
                        <span>{blog.category}</span>
                      </div>
                    </Link>
                  </div>
                  <h4 className="ca-blog-title fnw-600 ca-text-cap">
                    <Link to="#">{blog.title}</Link>
                  </h4>
                  <p className="pt-16 pb-18">{blog.description}</p>
                  <div className="blog-rearmore">
                    <a href={blog.link} className="read-more">
                      Read More{" "}
                      <span>
                        <BiChevronRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurBlog;
