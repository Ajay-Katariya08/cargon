import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";

import breadcrumnShape from "@/assets/img/shape/breadcrumn-shape.png";
import lineShape from "@/assets/img/shape/ca-line-shape.png";
import phone from "@/assets/img/icon/ca-ph3.2.svg";
import location from "@/assets/img/icon/ca-map3.1.svg";
import Email from "@/assets/img/icon/ca-envelop3.3.svg";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const index = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    const contactInfo = [
        {
            image: location,
            title: "Our Address",
            content: "55 Street, 2nd block, 3rd Floor, Melbourne, Australia",
        },
        {
            image: phone,
            title: "Contact Us",
            content: (
                <>
                    <Link to="tel:+0221234568806">+022 (123) 456 88 06</Link> <br />
                    <Link to="tel:+47122109878">(+47) 1221 09 878</Link>
                </>
            ),
        },
        {
            image: Email,
            title: "Email Us",
            content: (
                <>
                    <Link to="mailto:infocargon@gmail.com">infocargon@gmail.com</Link>{" "}
                    <br />
                    <Link to="mailto:drmtech99.com">drmtech99.com</Link>
                </>
            ),
        },
    ];

    return (
        <>
            <PageMeta title="Contact" />
            <main>
                <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                        <img src={breadcrumnShape} alt="Breadcrumb Shape" />
                    </div>
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                        <img src={lineShape} alt="Line Shape" />
                    </div>
                    <div className="container">
                        <div className="ca-breadcrumb-content text-center">
                            <h2 className="ca-breadcrumb-title fnw-600">Contact Us</h2>
                            <div className="it-breadcum-link">
                                <Link to="/">Home</Link>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <Link className="active" to="#">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ca-contact-inner pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="col-xl-4 col-md-6 mb-30">
                                    <div className="ca-location-3">
                                        <div className="ca-location-icbox">
                                            <div className="ca-location-icbox-img">
                                                <span>
                                                    <img src={item.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="ca-location-icbox-text">
                                                <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                    {item.title}
                                                </h4>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="ca-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13879239.529449532!2d43.044947896897405!3d31.866193584077507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2sbd!4v1723948083378!5m2!1sen!2sbd"
                        className="contact-page__google-map"
                        allowFullScreen
                    ></iframe>
                </div>

                <section className="ca-conatct-form1 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="ca-con-rep-form cream-bg-3 text-center">
                                <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                    Send Us a Message
                                </h4>
                                <p className="pb-32">
                                    Your email address will not be published. Required fields are
                                    marked *
                                </p>

                                <div className="ca-cmt-from">
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6} className="mb-20">
                                                <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                            <Col lg={6} className="mb-20">
                                                <Form.Control
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                            <Col lg={6} className="mb-20">
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                            <Col lg={6} className="mb-20">
                                                <Form.Control
                                                    as="select"
                                                    className="nice-select wide ca-select"
                                                >
                                                    <option value="1">Service Type 1</option>
                                                    <option value="2">Service Type 2</option>
                                                    <option value="3">Service Type 3</option>
                                                </Form.Control>
                                            </Col>
                                            <Col lg={12} className="mb-20">
                                                <Form.Control
                                                    as="textarea"
                                                    name="message"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </Col>
                                        </Row>
                                        <div className="ca-radion-btn">
                                            <input
                                                type="radio"
                                                id="saveinfo"
                                                name="fav_language"
                                                value="saveinfo"
                                            />
                                            <label htmlFor="saveinfo">
                                                Save the information's in this browser for next time use
                                            </label>
                                        </div>

                                        <div className="ca-blg-sen-btn text-start">
                                            <button
                                                type="submit"
                                                className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                            >
                                                {" "}
                                                Submit Now{" "}
                                                <span>
                                                    <BiChevronRight className="fs-2" />
                                                </span>
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default index;
