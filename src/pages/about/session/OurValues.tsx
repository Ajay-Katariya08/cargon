import { Button, Col, Container, Row } from "react-bootstrap";
import value1 from "@/assets/img/about/ca-value1.1.png";
import ReactCountUp from "react-countup";
import { BiChevronRight } from "react-icons/bi";

const OurValues = () => {
  const data = {
    title: "Mission Vision & Values Of Your Transport & Logistics",
    description:
      "Our dedicated team of experts works tirelessly to ensure that your goods are transported safely and on time, no matter the destination.",
    counters: [
      { value: "2.4", unit: "K+", label: "Successfully Delivery" },
      { value: "1800", unit: "+", label: "Supply Engineers" },
      { value: "199", unit: "+", label: "5 Star Reviews" },
      { value: "125", unit: "+", label: "Countries Covered" },
    ],
    imageUrl: value1,
  };
  return (
    <section className="ca-about-3 pt-100 pb-70">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6} className="mb-30">
            <div
              className="ca-value-img mr-50 wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <img
                className="w-100 br-7"
                src={data.imageUrl}
                alt="Value Image"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="ca-value-content3">
              <div className="ca-about-content-3 ca-sec-content-3">
                <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                  Our Values
                </h5>
                <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                  {data.title}
                </h2>
                <p className="pt-16 pb-40">{data.description}</p>
              </div>
              <Row>
                {data.counters.map((counter, index) => (
                  <Col lg={6} md={6} className="mb-20" key={index}>
                    <div className="ca-value-cbox w-bg text-center br-7">
                      <h3 className="ca-counter-title theme-black-3 fnw-700 pb-16">
                        <span className="counter">
                          <ReactCountUp
                            start={0}
                            end={parseFloat(
                              counter.value.replace(/[^0-9.-]+/g, "")
                            )}
                            duration={2.5}
                            separator=","
                          />
                        </span>
                        {counter.unit}
                      </h3>
                      <span className="v-text">{counter.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="ca-about-3-btn">
                <Button
                  href="#"
                  className="ca-btn-primary-3 theme-bg-3 text-white br-50 mt-12"
                >
                  Learn More{" "}
                  <span>
                    <BiChevronRight className="fs-2" />
                  </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurValues;
