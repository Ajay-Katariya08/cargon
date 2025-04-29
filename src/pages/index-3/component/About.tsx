
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";

import aboutImg from "@/assets/img/about/about-1.1.png";
import aboutIc1 from "@/assets/img/icon/about-ic-1.2.svg";
import aboutIc2 from "@/assets/img/icon/about-ic-1.3.svg";
import { Link } from "react-router-dom";

interface CounterItem {
  value: number;
  label: string;
}

const counterData: CounterItem[] = [
  { value: 2400, label: "Successfully Delivery" },
  { value: 1800, label: "Supply Engineers" },
  { value: 199, label: "5 Star Reviews" },
  { value: 125000, label: "Countries Covered" },
];

interface IconBoxItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const iconBoxData: IconBoxItem[] = [
  {
    icon: aboutIc1,
    title: "Experts in Logistics Management",
    description:
      "We are driving success & creating opportunities for<br> growth. Discover the difference with a logistics",
    link: "/services/single",
  },
  {
    icon: aboutIc1,
    title: "Reliable and Efficient Logistics",
    description:
      "Our mission is to redefine excellence in transport and logistics.<br> With years of industry experience ",
    link: "/services/single",
  },
  {
    icon: aboutIc2,
    title: "Transforming Transport and Logistics",
    description:
      "Our dedicated team of experts works tirelessly to <br> ensure that your goods are transported safely",
    link: "/services/single",
  },
];

const About: React.FC = () => {
  return (
    <section className="ca-about-section pt-100 pb-70">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div
              className="ca-about-content mb-60 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h5 className="ca-section-subtitle subtitle-bg-1 p-relative theme-color-1 br-50">
                About Us
              </h5>
              <h2 className="ca-about-title theme-black-1 fnw-600 pt-16 ca-text-cap">
                Our Journey: Excellence in Transport & Logistics
              </h2>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="ca-about-desc mb-60 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <p>
                Our dedicated team of experts works tirelessly to <br />
                ensure that your goods are transported safely and <br /> on
                time, no matter the destination. We pride <br />
                ourselves on our global reach and local.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xl={3} md={6} className="mb-30">
            <div
              className="ca-counter-bg br-7 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {counterData.map((item, index) => (
                <div key={index} className="ca-counter-area text-center">
                  <h3 className="ca-counter-title fnw-700 pb-16">
                    {item.value >= 1000 ? (
                      <CountUp
                        end={item.value / 1000}
                        decimals={1}
                        duration={2.75}
                        suffix="K+"
                      />
                    ) : (
                      <CountUp end={item.value} duration={2.75} />
                    )}
                  </h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col xl={4} md={6} className="mb-30">
            <div
              className="ca-about-img aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={aboutImg} alt="" className="w-100 br-7" />
            </div>
          </Col>
          <Col
            xl={5}
            className="mb-30 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {iconBoxData.map((item, index) => (
              <div
                key={index}
                className="ca-about-icon-box d-flex align-items-center"
              >
                <div className="ca-about-icon">
                  <div className="ca-about-ic">
                    <img src={item.icon} alt="" />
                  </div>
                </div>
                <div className="ca-about-content">
                  <h4 className="ca-title fnw-700 theme-black-1 pb-16 ca-text-cap">
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
