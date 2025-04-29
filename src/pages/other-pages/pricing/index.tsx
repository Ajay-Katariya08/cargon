import { Col, Row } from "react-bootstrap";
import { BiCheck, BiChevronRight } from "react-icons/bi";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { pricingPlans } from "./data";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const index = () => {
    return (
        <>
            <PageMeta title="Pricing" />
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
                            <h2 className="ca-breadcrumb-title fnw-600">Pricing Plan</h2>
                            <div className="it-breadcum-link">
                                <a href="/">Home</a>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a className="active" href="#">
                                    Pricing Plan
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ca-pricing-plan pt-100 pb-70">
                    <div className="container">
                        <div className="ca-about-content-3 ca-sec-content-3 text-center mb-60">
                            <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                Pricing Plan
                            </h5>
                            <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                                Flexible Pricing Options
                            </h2>
                            <p className="pt-16">
                                We offer a diverse array of transport and logistics services
                                tailored
                                <br /> to meet the unique needs of businesses across various
                                industries.
                            </p>
                        </div>

                        <Row>
                            {pricingPlans.map((plan, index) => (
                                <Col xl={4} md={6} mb={30} key={index}>
                                    <div
                                        className={`ca-pricing-box ca-pricing-box-2 ${plan.active ? "active" : ""
                                            } cream-bg-3 br-7`}
                                    >
                                        <div className="ca-pring-box-content">
                                            <h2 className="ca-pricing-box-title fnw-600">
                                                {plan.title}
                                            </h2>
                                            <p className="pt-16 pb-32">{plan.description}</p>
                                            <h3 className="ca-price">
                                                <span>${plan.price}</span> <cite>/ {plan.frequency}</cite>
                                            </h3>
                                        </div>
                                        <div className="ca-price-list ca-price-list-2 p-relative">
                                            <div className="ca-price-btn p-absolute">
                                                <Link to="#" className="ca-price-btn-4 text-white br-50">
                                                    Get Started Now
                                                    <span>
                                                        <BiChevronRight />
                                                    </span>
                                                </Link>
                                            </div>
                                            <ul>
                                                {plan.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>
                                                        <span>
                                                            <BiCheck />
                                                        </span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            </main>
        </>
    );
};

export default index;
