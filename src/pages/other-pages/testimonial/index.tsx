import { testimonials } from "./data";
import { BiChevronRight, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import PageMeta from "@/components/PageMeta";

import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { Link } from "react-router-dom";
import Paginations from "../../../components/Paginations";

const page = () => {
    return (
        <>
            <PageMeta title="Testimonials" />
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
                            <h2 className="ca-breadcrumb-title fnw-600">Testimonials</h2>
                            <div className="it-breadcum-link">
                                <a href="/">Home</a>

                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a className="active" href="#">
                                    Testimonials
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="ca-testimonial-inner pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            {testimonials.map((testimonial, index) => (
                                <div className="col-xl-4 col-md-6 mb-30" key={index}>
                                    <div className="ca-testimonial-card-3 ca-testimonial-iner br-7">
                                        <div className="ca-test-3-rating">
                                            <div className="ca-ratings-3">
                                                {[...Array(5)].map((_, index) => {
                                                    if (index < Math.floor(testimonial.rating)) {
                                                        return <BiSolidStar key={index} />;
                                                    }

                                                    if (
                                                        index === Math.floor(testimonial.rating) &&
                                                        testimonial.rating % 1 !== 0
                                                    ) {
                                                        return <BiSolidStarHalf key={index} />;
                                                    }

                                                    return (
                                                        <span key={index} className="star-empty">
                                                            ☆
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                            <div className="ca-rating-num-3">
                                                <h4 className="ca-rating-title-3">
                                                    ({testimonial.rating})
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="ca-test-3-content">
                                            <h4 className="ca-test-title-3">{testimonial.title}</h4>
                                            <p>{testimonial.content}</p>
                                        </div>
                                        <div className="ca-test-3-user">
                                            <div className="ca-test-3-user-img">
                                                <span>
                                                    <img src={testimonial.image} alt={testimonial.name} />
                                                </span>
                                            </div>
                                            <div className="ca-test-3-user-name">
                                                <h4 className="test-3-title">
                                                    <Link to="#">{testimonial.name}</Link>
                                                </h4>
                                                <span>{testimonial.position}</span>
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
        </>
    );
};

export default page;
