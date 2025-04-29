import posticon from "@/assets/img/icon/re-post-ic1.1.svg";
import blogImage from "@/assets/img/blog/ca-blog-cat1.1.png";
import tag from "@/assets/img/icon/ca-ser-cat-tag.svg";
import chats from "@/assets/img/icon/ca-ser-cat-chat.svg";
import poster1 from "@/assets/img/blog/ca-blog-thumb-1.1.png";
import share from "@/assets/img/icon/ca-blg-reply.svg";
import user from "@/assets/img/icon/user-1.1.svg";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";

import {
    BiCheck,
    BiChevronRight,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import { Row } from "react-bootstrap";

import { comments, ourTag } from "../left/data";

import { blogPosts } from "../data";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
const socialLinks = [
    { icon: <BiLogoInstagram />, url: "#" },
    { icon: <BiLogoFacebook />, url: "#" },
    { icon: <BiLogoLinkedin />, url: "#" },
    { icon: <FaXTwitter />, url: "#" },
];

const services = [
    { id: 1, title: "Secure Warehousing", icon: <BiCheck /> },
    { id: 2, title: "Customs Brokerage", icon: <BiCheck /> },
    { id: 3, title: "E-commerce Fulfillment", icon: <BiCheck /> },
    { id: 4, title: "Heavy Lift and Project Cargo", icon: <BiCheck /> },
    { id: 5, title: "Rapid Express Delivery", icon: <BiCheck /> },
    { id: 6, title: "Inventory Optimization", icon: <BiCheck /> },
];

const index = () => {
    return (
        <>
            <PageMeta title="Blog Single" />
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
                            <h2 className="ca-breadcrumb-title fnw-600">
                                Handling Project Cargo: Expert Tips and Strategies
                            </h2>
                            <div className="it-breadcum-link">
                                <Link to="/">Home</Link>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a href="/blog">Our Blog</a>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a className="active" href="#">
                                    Handling Project Cargo: Expert Tips and Strategies
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ca-service-lft-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-30 mx-auto">
                                <div className="ca-project-content-area">
                                    <div className="ca-pro-thumb-content ca-service-left-content">
                                        <h2 className="ca-project-thumb-title theme-black-3 fnw-600 ca-text-cap">
                                            Consolidation & Deconsolidation <br /> Services Reverse
                                            Logistics{" "}
                                        </h2>
                                        <p className="pt-16 pb-32">
                                            Welcome to the Cargon Blog, your go-to resource for the
                                            latest insights, trends, and innovations in the <br />
                                            world of transport and logistics. Our blog is designed to
                                            keep you informed about industry developments, <br />{" "}
                                            provide expert advice, and share best practices for
                                            optimizing your supply chain
                                        </p>
                                        <div className="ca-servic-cat">
                                            <div className="ca-servic-cat-item mb-30">
                                                <div className="ca-servic-cat-item-img">
                                                    <img src={blogImage} alt="" />
                                                </div>
                                                <div className="ca-servic-cat-item-content">
                                                    <h3 className="ca-blog-cat-ttitle">
                                                        <Link to="#">Rahul Tewatia</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="ca-servic-cat-item mb-30">
                                                <div className="ca-servic-cat-item-ic">
                                                    <span>
                                                        <img src={posticon} alt="" />
                                                    </span>
                                                </div>
                                                <div className="ca-servic-cat-item-content">
                                                    <h3 className="ca-blog-cat-ttitle">
                                                        <Link to="#">8/06/2024</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="ca-servic-cat-item mb-30">
                                                <div className="ca-servic-cat-item-ic">
                                                    <span>
                                                        <img src={tag} alt="" />
                                                    </span>
                                                </div>
                                                <div className="ca-servic-cat-item-content">
                                                    <h3 className="ca-blog-cat-ttitle">
                                                        <Link to="#">Transport & Logistics</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="ca-servic-cat-item mb-30">
                                                <div className="ca-servic-cat-item-ic">
                                                    <span>
                                                        <img src={chats} alt="" />
                                                    </span>
                                                </div>
                                                <div className="ca-servic-cat-item-content">
                                                    <h3 className="ca-blog-cat-ttitle">
                                                        <Link to="#">2 Comments</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ca-servic-thumb br-7">
                                            <img className="w-100" src={poster1} alt="" />
                                        </div>
                                        <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600 pt-32 ca-text-cap">
                                            Your Source for Logistics Information
                                        </h3>
                                        <p className="pt-20">
                                            Whether you're looking to stay updated on the latest
                                            technologies transforming logistics, understand the <br />{" "}
                                            impact of global trade policies, or learn tips for improving
                                            efficiency and reducing costs, you'll find valuable <br />
                                            information here. Our team of industry experts and thought
                                            leaders regularly contribute articles
                                        </p>
                                        <p className="pt-20">
                                            Dive into our blog to discover how we navigate the
                                            complexities of logistics, stay ahead of industry trends,{" "}
                                            <br />
                                            and continue to deliver exceptional service to our clients.
                                            Join us on this journey & empower your business
                                        </p>
                                        <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600 pt-32 ca-text-cap">
                                            Transport and Logistics Insights
                                        </h3>
                                        <p className="pt-20">
                                            Our blog is a valuable resource for industry professionals
                                            looking to stay ahead of the curve and navigate <br /> the
                                            complexities of global logistics. We cover a wide array of
                                            topics, including the latest advancements in <br />{" "}
                                            logistics technology, best practices for supply chain
                                            management, and strategies for overcoming.
                                        </p>
                                        <p className="pt-20">
                                            Whether you're interested in learning about innovative
                                            shipping solutions, exploring the impact of new <br />
                                            trade regulations, or finding tips to enhance your logistics
                                            operations, our blog has something for you.
                                        </p>
                                        <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600 pt-32 ca-text-cap">
                                            Behind the Scenes in Transport
                                        </h3>
                                        <p className="pt-20">
                                            Our articles are written by seasoned professionals who bring
                                            their firsthand experience and expertise to <br /> each
                                            post, ensuring you get practical, actionable insights. Stay
                                            informed, stay competitive, and stay <br /> connected with
                                            the Cargon Blog, your ultimate guide to mastering the art of
                                            logistics.
                                        </p>
                                        <div className="ca-about-item3 cream-bg-3 p-relative">
                                            <p>
                                                Here, we delve into the latest trends, explore emerging
                                                technologies, & provide practical solutions <br /> to the
                                                challenges faced by businesses in today's fast-paced
                                                logistics environment. Our blog <br />
                                                covers a broad spectrum of topics, from the intricacies of
                                                freight forwarding.
                                            </p>
                                        </div>
                                        <div className="ca-ab-item-check ca-ab-item-check-2 ca-ab-item-check-3 caborder-top">
                                            {services.map((service) => (
                                                <div className="ca-ab-sngle-item" key={service.id}>
                                                    <div className="ca-ab-sngle-item-ic">
                                                        <span>{service.icon}</span>
                                                    </div>
                                                    <div className="ca-ab-sngle-item-content">
                                                        <h4 className="ca-item-ch-title">{service.title}</h4>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600">
                                            Domestic Freight Transport
                                        </h3>
                                        <p className="pt-20 pb-32">
                                            We aim to equip our readers with the information they need
                                            to make informed decisions, optimize their <br /> logistics
                                            operations, and stay competitive in a global marketplace.
                                            Each post is crafted by our team of <br />
                                            logistics experts who share their insights and experiences,
                                            offering you valuable perspectives on how.
                                        </p>
                                        <div className="ca-blog-tags-section">
                                            <div className="ca-blog-tag-section">
                                                <div className="ca-blg-tag-taile">
                                                    <h4 className="ca-title fnw-600 theme-black-3">
                                                        Our Tags:
                                                    </h4>
                                                </div>
                                                <div className="ca-blg-tag-list">
                                                    <ul>
                                                        {ourTag.map((tag) => (
                                                            <li key={tag.id}>
                                                                <Link to="#">{tag.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ca-blog-share">
                                                <h4 className="ca-title fnw-600 theme-black-3">Share:</h4>
                                                <div className="ca-footer-social ca-tag-social-3">
                                                    <ul>
                                                        {socialLinks.map((link, index) => (
                                                            <li key={index}>
                                                                <Link
                                                                    to={link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {link.icon}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ca-blg-comt-form pt-32">
                                            <h4 className="ca-title fnw-600 theme-black-3 pb-32">
                                                Blog Comments (2)
                                            </h4>
                                            {comments.map((comment) => (
                                                <div
                                                    className="ca-blg-single-comment ca-rep-cmt cream-bg-3 mb-30"
                                                    key={comment.id}
                                                >
                                                    <div className="ca-blg-cmt">
                                                        <div className="ca-blg-auth">
                                                            <div className="ca-blg-auth-img">
                                                                <img src={comment.image} alt={comment.author} />
                                                            </div>
                                                            <div className="ca-blg-auth-title">
                                                                <h4 className="ca-title fnw-600 theme-black-3">
                                                                    {comment.author}
                                                                </h4>
                                                                <span>{comment.date}</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" className="ca-rep-cmt">
                                                            <h4 className="ca-blg-rep-title">
                                                                <span>
                                                                    <img src={share} alt="" />
                                                                </span>
                                                                Reply
                                                            </h4>
                                                        </Link>
                                                    </div>
                                                    <p className="pt-16">{comment.content}</p>
                                                </div>
                                            ))}

                                            <div className="ca-blog-rep-form cream-bg-3">
                                                <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                    Leave a Reply
                                                </h4>
                                                <p className="pb-32">
                                                    Provide clear contact information, including phone
                                                    number, email, and address.
                                                </p>
                                                <div className="ca-cmt-from">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-lg-6 mb-20">
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-lg-6 mb-20">
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                            <div className="col-lg-6 mb-20">
                                                                <input type="email" placeholder="Email" />
                                                            </div>
                                                            <div className="col-lg-6 mb-20">
                                                                <input type="tel" placeholder="Phone" />
                                                            </div>
                                                            <div className="col-lg-12 mb-20">
                                                                <input type="text" placeholder="Subject" />
                                                            </div>
                                                            <div className="col-lg-12 mb-20">
                                                                <textarea
                                                                    name="message"
                                                                    id="message"
                                                                    placeholder="Message"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="ca-blg-sen-btn">
                                                            <button
                                                                type="submit"
                                                                className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                                            >
                                                                Send Now{" "}
                                                                <span>
                                                                    <BiChevronRight className="fs-2" />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ca-more-section pb-70">
                    <div className="container">
                        <h2 className="ca-more-title theme-black-3 fnw-600 text-center mb-60">
                            View More Blogs
                        </h2>
                        <Row>
                            {blogPosts.slice(0, 3).map((post, index) => (
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
                        </Row>
                    </div>
                </div>
            </main>
        </>
    );
};

export default index;
