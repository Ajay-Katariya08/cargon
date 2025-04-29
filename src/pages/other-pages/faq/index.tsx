import { useState } from "react";
import thumb1 from "@/assets/img/faq/ca-faq-thumb-1.1.png";
import thumb2 from "@/assets/img/faq/ca-faq-sm1.2.png";
import {
    BiChevronRight,
    BiSolidChevronDown,
    BiSolidStar,
} from "react-icons/bi";
import { faqData } from "./data";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import ReactCountUp from "react-countup";
import PageMeta from "@/components/PageMeta";
import { Accordion, AccordionBody, AccordionButton, AccordionHeader, AccordionItem } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";

const index = () => {
    const [openFAQ, setOpenFAQ] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenFAQ((prev) => (prev === id ? null : id));
    };

    const star = <BiSolidStar />;

    const stardata = Array(5).fill(star);

    return (
        <>
            <PageMeta title="Faq" />
            <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                    <img src={breadCrumb} alt="" />
                </div>
                <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                    <img src={line} alt="" />
                </div>
                <div className="container">
                    <div className="ca-breadcrumb-content text-center">
                        <h2 className="ca-breadcrumb-title fnw-600">FAQ’s</h2>
                        <div className="it-breadcum-link">
                            <a href="/">Home</a>
                            <span>
                                {" "}
                                <BiChevronRight className="fs-2" />
                            </span>
                            <a className="active" href="#">
                                FAQ’s
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="ca-faq-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="ca-faq-iner-thumb p-relative mr-65">
                                <img className="w-100" src={thumb1} alt="" />
                                <div className="ca-fa-sm-thumb">
                                    <img src={thumb2} alt="" />
                                </div>

                                <div className="ca-iner-review-text ca-faq-iner-review p-absolute theme-bg-3">
                                    <h3 className="ca-counter-title fnw-700 pb-16">
                                        <span className="counter">
                                            <ReactCountUp
                                                start={2}
                                                end={28}
                                                duration={2}
                                                separator=" "
                                            ></ReactCountUp>
                                        </span>
                                        +
                                    </h3>
                                    <p>Years Of Experience</p>
                                    <div className="ca-test-3-rating ca-faq-rating">
                                        <div className="ca-ratings-3">
                                            <span className="fa fa-star checked star">
                                                {stardata.map((starElement, index) => (
                                                    <span key={index}>{starElement}</span>
                                                ))}
                                            </span>
                                        </div>
                                        <div className="ca-rating-num-3">
                                            <h4 className="ca-rating-title-3">
                                                (5) <span className="rat-title">Rating</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="ca-about-content-3 ca-sec-content-3 mb-48">
                                <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                                    FAQ'S
                                </h5>
                                <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                                    Frequently Asked Questions and Answers
                                </h2>
                            </div>
                            <div className="ca-faq-accordion-one">
                                <div className="accordion" id="accordionExample">
                                    {faqData[0].faqs.map((faq) => (
                                        <div className="ca-iner-one accordion-item" key={faq.id}>
                                            <h2 className="accordion-header" id={`heading-${faq.id}`}>
                                                <button
                                                    className={`accordion-button ${openFAQ === faq.id ? "" : "collapsed"
                                                        }`}
                                                    type="button"
                                                    onClick={() => toggleFAQ(faq.id)}
                                                >
                                                    <span>
                                                        <BiSolidChevronDown />
                                                    </span>{" "}
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse-${faq.id}`}
                                                className={`accordion-collapse collapse ${openFAQ === faq.id ? "show" : ""
                                                    }`}
                                                aria-labelledby={`heading-${faq.id}`}
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className="ca-faq-iner2 pt-100 pb-70">
                <div className="container">
                    <div className="ca-about-content-3 ca-sec-content-3 text-center mb-60">
                        <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                            FAQ'S
                        </h5>
                        <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                            Answers to Your Questions
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ca-faq-acc">
                                <div className="ca-accordion" id="accordionExample1">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="accordion" id="accordionExample2">
                                                {faqData[1].faqs.slice(0, 4).map((faq) => (
                                                    <div className="ca-iner-accordion-item" key={faq.id}>
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className={`accordion-button ${openFAQ === faq.id ? "" : "collapsed"
                                                                    }`}
                                                                type="button"
                                                                onClick={() => toggleFAQ(faq.id)}
                                                            >
                                                                {faq.question}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={`collapse-${faq.id}`}
                                                            className={`accordion-collapse collapse ${openFAQ === faq.id ? "show" : ""
                                                                }`}
                                                        >
                                                            <div className="accordion-body">
                                                                <p>{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="accordion" id="accordionExample3">
                                                {faqData[1].faqs.slice(4).map((faq) => (
                                                    <div className="ca-iner-accordion-item" key={faq.id}>
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className={`accordion-button ${openFAQ === faq.id ? "" : "collapsed"
                                                                    }`}
                                                                type="button"
                                                                onClick={() => toggleFAQ(faq.id)}
                                                            >
                                                                {faq.question}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={`collapse-${faq.id}`}
                                                            className={`accordion-collapse collapse ${openFAQ === faq.id ? "show" : ""
                                                                }`}
                                                        >
                                                            <div className="accordion-body">
                                                                <p>{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default index;



