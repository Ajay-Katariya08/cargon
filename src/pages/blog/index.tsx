import { BiChevronRight } from "react-icons/bi";
import user from "@/assets/img/icon/user-1.1.svg";
import tag from "@/assets/img/icon/tag-1.1.svg";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";

import { blogPosts } from "./data";
import { Link } from "react-router-dom";
import Paginations from "../../components/Paginations";

const index = () => {
  return (
    <main>
      <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
        <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
          <img src={breadCrumb} alt="" />
        </div>
        <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
          <img src={line} alt="" />
        </div>
        <div className="container">
          <div className="ca-breadcrumb-content text-center">
            <h2 className="ca-breadcrumb-title fnw-600">Our Blog</h2>
            <div className="it-breadcum-link">
              <a href="/">Home</a>
              <span>
                  <BiChevronRight className="fs-2" />
              </span>
              <a className="active" href="#">
                Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="ca-blog-inner pt-100 pb-100">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-xl-4 col-md-6 mb-30" key={index}>
                <div className="ca-team-box ca-blg-box-3 cream-bg-3 br-7 fix p-relative z-index-1">
                  <div className="ca-team-img">
                    <img className="w-100" src={post.imageUrl} alt="" />
                  </div>
                  <div className="ca-blog-date-3 ca-blg-date-3">
                    <Link to="#" className="blg-date-3">
                      {post.date}
                    </Link>
                  </div>
                  <div className="ca-blog-box-content ca-blog-box-content-3">
                    <div className="ca-b-meta">
                      <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                        <div className="ca-meta-icon">
                          <span>
                            <img src={user} alt="" />
                          </span>
                        </div>
                        <div className="ca-meta-title">
                          <span>{post.author}</span>
                        </div>
                      </Link>
                      <Link to="#" className="ca-blog-meta ca-blog-meta-3">
                        <div className="ca-meta-icon">
                          <span>
                            <img src={tag} alt="" />
                          </span>
                        </div>
                        <div className="ca-meta-title">
                          <span>{post.category}</span>
                        </div>
                      </Link>
                    </div>
                    <h4 className="ca-blog-title ca-blog-title-3 fnw-600">
                      <Link to="#">{post.title}</Link>
                    </h4>
                    <p className="pt-16 pb-18">{post.description}</p>
                    <div className="blog-3-rearmore">
                      <Link to="/blog/single" className="read-more3">
                        Read More{" "}
                        <span>
                          <BiChevronRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Paginations />
        </div>
      </div>
    </main>
  );
};

export default index;
