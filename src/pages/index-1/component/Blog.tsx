import { Container, Row, Col } from "react-bootstrap";

import image1 from "@/assets/img/blog/ca-blog-1.2.png";
import image2 from "@/assets/img/blog/ca-blog-1.3.png";
import image3 from "@/assets/img/blog/ca-blog-1.1.png";
import tag from "@/assets/img/icon/tag-1.1.svg";
import users from "@/assets/img/icon/user-1.1.svg";

import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const BlogSection = () => {
  const blog: BlogPost[] = [
    {
      id: 1,
      image: image1,
      date: "March 21, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "Optimizing Last-Mile Delivery: Strategies for Success",
      description:
        "Delve into the challenges of last-mile delivery and explore strategies to overcome them.",
      link: "/blog-single",
    },
    {
      id: 2,
      image: image2,
      date: "March 20, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "Handling Project Cargo: Expert Tips and Strategies",
      description:
        "Get expert tips on managing project cargo logistics. From planning and coordination.",
      link: "/blog-single",
    },
    {
      id: 3,
      image: image3,
      date: "March 18, 2024",
      author: "Henry Nicolls",
      category: "Transport & Logistics",
      title: "The Importance of Reliable Freight Forwarding Services",
      description:
        "Learn practical strategies for optimizing your supply chain operations, improve delivery.",
      link: "/blog-single",
    },
  ];

  return (
    <section className="ca-blog pt-100 pb-70">
      <Container>
        <div className="ca-blog-content-3 ca-sec-content-3 text-center mb-60">
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Our Blog
          </h5>
          <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
            Best Practices and Strategies
          </h2>
          <p className="pt-16">
            Gain insights into effective warehouse management strategies that{" "}
            <br /> maximize space, improve accuracy, and boost productivity.
          </p>
        </div>
        <Row>
          {blog.map((post) => (
            <Col key={post.id} xl={4} md={6} className="mb-30">
              <div className="ca-team-box ca-blog-box-3 cream-bg-3 br-7 fix p-relative z-index-1">
                <div className="ca-team-img">
                  <Link to={post.link}>
                    <img
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      // layout="responsive"
                    />
                  </Link>
                </div>
                <div className="ca-blog-date-3">
                  <Link to="#" className="blg-date-3">
                    {post.date}
                  </Link>
                </div>
                <div className="ca-blog-box-content ca-blog-box-content-3">
                  <div className="ca-b-meta">
                    <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                      <div className="ca-meta-icon">
                        <span>
                          <img
                            src={users}
                            alt="Author"
                            width={20}
                            height={20}
                          />
                        </span>
                      </div>
                      <div className="ca-meta-title">
                        <span>{post.author}</span>
                      </div>
                    </Link>
                    <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                      <div className="ca-meta-icon">
                        <span>
                          <img
                            src={tag}
                            alt="Category"
                            width={20}
                            height={20}
                          />
                        </span>
                      </div>
                      <div className="ca-meta-title">
                        <span>{post.category}</span>
                      </div>
                    </Link>
                  </div>
                  <h4 className="ca-blog-title ca-blog-title-3 fnw-600">
                    <Link to={post.link}>{post.title}</Link>
                  </h4>
                  <p className="pt-16 pb-18">{post.description}</p>
                  <div className="blog-3-rearmore">
                    <Link
                      to={post.link}
                      className="read-more3"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Read More{" "}
                     
                        <BiChevronRight style={{ fontSize: "25px" }} />
                
                    </Link>
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

export default BlogSection;
