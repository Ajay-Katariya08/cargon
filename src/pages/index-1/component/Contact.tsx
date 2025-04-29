import { useState, type ChangeEvent } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  FormSelect,
} from "react-bootstrap";
import location from "@/assets/img/icon/ca-location3.1.svg";
import phone from "@/assets/img/icon/ca-location3.2.svg";
import email from "@/assets/img/icon/ca-location3.3.svg";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

interface ServiceOption {
  value: string;
  label: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const contactInfo: ContactInfo = {
    address: "198 West 21th Street, New York NY City 1010",
    email: "freightexpress@mail.com",
    phone: "123-456-7890",
  };

  const serviceOptions: ServiceOption[] = [
    { value: "1", label: "Service 01" },
    { value: "2", label: "Service 02" },
    { value: "3", label: "Service 03" },
    { value: "4", label: "Service 04" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="contact-3-area cream-bg-3 pt-100 pb-70">
      <Container>
        <div className="ca-blog-content-3 ca-sec-content-3 text-center mb-60">
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Contact Us
          </h5>
          <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
            Trusted by Industry Leaders
          </h2>
          <p className="pt-16">
            Gain insights into effective warehouse management strategies that
            maximize space, improve accuracy, and boost productivity.
          </p>
        </div>
        <Row className="align-items-center">
          <Col xl={6} className="mb-30">
            <div className="ca-contact-from w-bg ca-contact-from-3">
              <div className="ca-contact-content-3">
                <h4 className="ca-contact-title-2 theme-black-2 fnw-600">
                  Send Us A Message
                </h4>
                <p className="pt-16 pb-24">
                  As a fellow small business owner, we know the fulfillment that
                  an a best to comes from running & own business contact our
                  service to Cargon.
                </p>
              </div>
              <Form>
                <Row>
                  <Col md={6} className="mb-20">
                    <FormControl
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={handleChange}
                      value={formData.firstName}
                    />
                  </Col>
                  <Col md={6} className="mb-20">
                    <FormControl
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={handleChange}
                      value={formData.lastName}
                    />
                  </Col>
                  <Col md={6} className="mb-20">
                    <FormControl
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mb-20">
                    <FormControl
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={12} className="mb-20">
                    <FormSelect
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Service Type</option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </FormSelect>
                  </Col>
                  <Col md={12} className="mb-20">
                    <FormControl
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Col>
                  <div className="submit-btn">
                    <div className="submit-btn">
                      <button
                        className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                        type="submit"
                        value="submit"
                      >
                        Send Message
                        <span>
                          <i>
                            <BiChevronRight className="fs-2" />
                          </i>
                        </span>
                      </button>
                    </div>
                  </div>
                </Row>
              </Form>
            </div>
          </Col>
          <Col xl={6} className="mb-30">
            <div className="ca-form-loca-3 ml-50">
              <div className="ca-location-3 mb-20">
                <div className="ca-location-icbox">
                  <div className="ca-location-icbox-img">
                    <span>
                      <img src={location} alt="Location Icon" />
                    </span>
                  </div>
                  <div className="ca-location-icbox-text">
                    <h4 className="ca-title fnw-600 theme-black-3 pb-12">
                      Contact Us
                    </h4>
                    <p>
                      {contactInfo.address} <br /> {contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ca-location-3 mb-20">
                <div className="ca-location-icbox">
                  <div className="ca-location-icbox-img">
                    <span>
                      <img src={phone} alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="ca-location-icbox-text">
                    <h4 className="ca-title fnw-600 theme-black-3 pb-12">
                      Call or Text
                    </h4>
                    <Link to={`tel:${contactInfo.phone}`}>
                      {contactInfo.phone}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="ca-location-3 mb-20">
                <div className="ca-location-icbox">
                  <div className="ca-location-icbox-img">
                    <span>
                      <img src={email} alt="Email Icon" />
                    </span>
                  </div>
                  <div className="ca-location-icbox-text">
                    <h4 className="ca-title fnw-600 theme-black-3 pb-12">
                      Send Email
                    </h4>
                    <Link to={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
