import { useState } from "react";
import service from "@/assets/img/service/ca-servic-larg.png";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { BiCheck, BiChevronDown, BiChevronRight } from "react-icons/bi";
import { checkListData, faqData, servicesData } from "../data";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const page = () => {
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };
    return (
        <>
            <PageMeta title="Service Single" />
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
                                Supply Chain Management
                            </h2>
                            <div className="it-breadcum-link">
                                <Link to="/">Home</Link>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <Link to="/services">Service</Link>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <Link className="active" to="#">
                                    Supply Chain Management
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ca-service-lft-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-30 mx-auto">
                                <div className="ca-service-content-area">
                                    <div className="ca-servic-thumb br-7 mb-40">
                                        <img className="w-100" src={service} alt="" />
                                    </div>
                                    <div className="ca-servic-thumb-content">
                                        <h2 className="ca-service-thumb-title theme-black-3 fnw-600 ca-text-cap">
                                            Supply Chain Management
                                        </h2>
                                        <p className="pt-16">
                                            We pride ourselves on offering a comprehensive suite of
                                            logistics and transport services tailored to meet <br />
                                            the diverse needs of our clients. Our Freight Forwarding
                                            Services ensure your goods are transported <br />{" "}
                                            efficiently and safely across international borders,
                                            leveraging our extensive network and expertise.
                                        </p>
                                        <p className="pt-16">
                                            Our Warehousing Solutions provide secure storage with
                                            advanced inventory management systems to keep <br />
                                            your products organized and easily accessible. We
                                            specialize in Customs Clearance, navigating the
                                            <br /> complexities of international trade regulations to
                                            ensure smooth and timely shipments.
                                        </p>
                                        <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 pt-40 ca-text-cap">
                                            Comprehensive Service Overview
                                        </h3>
                                        <p className="pt-16 pb-40">
                                            Our Global Shipping Services connect you to markets
                                            worldwide, offering reliable & cost-effective solutions
                                            <br /> for your business. For domestic needs, our Domestic
                                            Transport Solutions guarantee fast and dependable <br />
                                            delivery across the country. Our Supply Chain Management
                                            services optimize every step of your logistics
                                        </p>
                                        <div className="ca-acordion-area">
                                            <div className="accordion" id="accordionExample">
                                                {faqData.map((faq) => (
                                                    <div
                                                        key={faq.id}
                                                        className="ca-accordion-item ca-accordion-item-2 mb-24"
                                                    >
                                                        <h2
                                                            className="ca-accordion-header"
                                                            id={faq.headerId}
                                                        >
                                                            <button
                                                                className={`accordion-button ${expandedFaq !== faq.id && "collapsed"
                                                                    }`}
                                                                type="button"
                                                                onClick={() => toggleAccordion(faq.id)}
                                                                aria-expanded={expandedFaq === faq.id}
                                                                aria-controls={faq.id}
                                                            >
                                                                {faq.question}
                                                                <span>
                                                                    <BiChevronDown />
                                                                </span>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={faq.id}
                                                            className={`accordion-collapse collapse ${expandedFaq === faq.id ? "show" : ""
                                                                }`}
                                                            aria-labelledby={faq.headerId}
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="ca-accordion-body">
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: faq.answer,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 pt-16 ca-text-cap">
                                            In-Depth Service Information
                                        </h3>
                                        <p className="pt-16 pb-40">
                                            Our Freight Forwarding Services are designed to handle
                                            complex international shipments, ensuring your <br />
                                            goods reach their destination safely & on time. Our
                                            Warehousing Solutions offer state-of-the-art facilities{" "}
                                            <br />
                                            equipped with advanced security & inventory management
                                            systems, allowing for efficient storage.
                                        </p>
                                        <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 ca-text-cap">
                                            Our Specialized Services
                                        </h3>
                                        <p className="pt-16 pb-40">
                                            With our Customs Clearance Expertise, we simplify process
                                            of navigating international trade regulations, <br />
                                            ensuring compliance and minimizing delays. Our Global
                                            Shipping Services provide comprehensive solutions <br />
                                            for transporting goods worldwide, backed by a network of
                                            reliable carriers and partners.
                                        </p>
                                        <h4 className="ca-thumb-title-4 theme-black-3 fnw-600 pb-16">
                                            Detailed Service Offerings Service Highlights
                                        </h4>
                                        <div className="ca-ab-item-check ca-ab-item-check-2">
                                            {checkListData.map((item, index) => (
                                                <div key={index} className="ca-ab-sngle-item">
                                                    <div className="ca-ab-sngle-item-ic">
                                                        <span>
                                                            <BiCheck />
                                                        </span>
                                                    </div>
                                                    <div className="ca-ab-sngle-item-content">
                                                        <h4 className="ca-item-ch-title">{item}</h4>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 pt-30">
                                            Our Services in Detail
                                        </h3>
                                        <p className="pt-16">
                                            For businesses requiring domestic transportation, our
                                            Domestic Transport Solutions offer fast, flexible, and
                                            <br /> cost-effective delivery options. Our Supply Chain
                                            Management services are tailored to optimize every <br />
                                            aspect of your logistics process, from procurement to
                                            final delivery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ca-more-section pb-70">
                    <div className="container">
                        <h2 className="ca-more-title theme-black-3 fnw-600 text-center mb-60">
                            More Services
                        </h2>

                        <Row>
                            {servicesData.slice(0, 3).map((service, idx) => (
                                <div className="col-xl-4 col-md-6 mb-30" key={idx}>
                                    <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                        <div className="ca-about-icon">
                                            <div className="ca-about-ic ca-ser-ic">
                                                <img src={service.image} alt={service.title} />
                                            </div>
                                            <div className="ca-num">
                                                <h4 className="overly-num overly-num2">
                                                    {service.id.toString().padStart(2, "0")}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="ca-service-content ca-service-content-iner">
                                            <h4 className="ca-title fnw-700 pb-16 pt-32">
                                                {service.title}
                                            </h4>
                                            <p className="pb-24">{service.description}</p>
                                            <li className="read-more">
                                                Read More{" "}
                                                <span>
                                                    <BiChevronRight className="fs-2" />
                                                </span>
                                            </li>
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

export default page;
