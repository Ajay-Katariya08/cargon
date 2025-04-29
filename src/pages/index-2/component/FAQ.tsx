
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import faqImage from "@/assets/img/faq/ca-faq-2.1.png";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What should I do if my shipment is delayed?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br> answers you need quickly and easily. Whether you're curious about our range of<br> services, need information on tracking your shipment, or want to understand.",
  },
  {
    question: "What is your policy on damaged or lost goods?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br> answers you need quickly and easily. Whether you're curious about our range of<br> services, need information on tracking your shipment, or want to understand.",
  },
  {
    question: "Can you handle oversized or special cargo?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br> answers you need quickly and easily. Whether you're curious about our range of<br> services, need information on tracking your shipment, or want to understand.",
  },
  {
    question: "What types of goods can you transport?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br> answers you need quickly and easily. Whether you're curious about our range of<br> services, need information on tracking your shipment, or want to understand.",
  },
  {
    question: "How can I get a quote for my shipment?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br> answers you need quickly and easily. Whether you're curious about our range of<br> services, need information on tracking your shipment, or want to understand.",
  },
  {
    question: "How do you ensure the safety and security of my goods?",
    answer:
      "That's why we've compiled a list of frequently asked questions to help you get the <br> answers you need quickly and easily. Whether you're curious about our range of<br> services, need information on tracking your shipment, or want to understand.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="ca-faq-area pt-100 pb-70">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={5}
            className="mb-30 aos-init aos-animate"
            data-aos="zoom-out"
            data-aos-duration="800"
          >
            <div className="ca-faq-content ca-sec-content-2">
              <h5 className="ca-section-subtitle subtitle-bg-4 p-relative theme-color-2">
                Asked Questions
              </h5>
              <h2 className="ca-about-title theme-black-2 fnw-600 pt-16 ca-text-cap">
                Everything You Need to Know Help & Support
              </h2>
              <p className="pt-22 pb-32">
                Our clients satisfaction is the cornerstone of our success at
                Cargon
                <br /> We take immense pride in the positive feedback we receive
                from businesses worldwide who rely on our expertise for their.
              </p>
            </div>
            <div className="ca-faq-img-2 mr-50">
              <img className="w-100" src={faqImage} alt="" />
            </div>
          </Col>
          <Col lg={7} className="mb-30">
            <div
              className="ca-acordion-area ml-50 aos-init aos-animate"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
            >
              <div className="accordion" id="accordionExample">
                {faqData.map((item, index) => (
                  <div className="ca-accordion-item mb-24" key={index}>
                    <h2 className="ca-accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div
                        className="ca-accordion-body"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
