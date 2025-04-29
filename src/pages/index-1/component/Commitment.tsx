import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import about3 from "@/assets/img/about/ca-about3.1.png";
import ca_delivery3_1 from "@/assets/img/icon/ca-delivery3.1.svg";
import ca_sm_about_3_2 from "@/assets/img/about/ca-sm-about-3.2.png";
import ca_about_3_3 from "@/assets/img/about/ca-about-3.3.png";
import { BiCheck, BiChevronRight } from "react-icons/bi";

const Commitment = ({
  deliveredGoodsCount = "11K+",
  whyWeAreSubtitle = "Why We Are",
  commitmentTitle = "Our Commitment: Reliable and Efficient Logistics",
  commitmentDescription = "With years of industry experience and a commitment to innovation, we have <br /> become leaders in providing comprehensive, reliable, and efficient logistics <br /> solutions. Our dedicated team of experts works tirelessly to ensure.",
  checkItems = [
    "Experts in Logistics Management",
    "Leaders in Global Logistics",
    "Transforming Transport & Logistics",
    "Driving Logistics Success",
  ],
  successDescription = "We are driving success and creating opportunities for growth. Discover <br /> difference with a logistics partner that is truly invested in your success.",
  buttonText = "Transpires",
  buttonIcon = <BiChevronRight className="fs-2" />,
  image1 = about3,
  image2 = ca_sm_about_3_2,
  image3 = ca_sm_about_3_2,
  image4 = ca_about_3_3,
  deliveryIcon = ca_delivery3_1,
}) => {
  return (
    <section className="ca-about-3 pt-100 pb-70">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="ca-abo-item-1">
              <Row>
                <Col lg={6} md={6}>
                  <div className="ca-abo-single-item mb-30">
                    <img className="w-100 lar-img-1" src={image1} alt="" />
                    <div className="ca-abo-hover-item">
                      <div className="ca-abo-content">
                        <div className="ca-abo-icon">
                          <span>
                            <img src={deliveryIcon} alt="" />
                          </span>
                        </div>
                        <h3 className="ca-abo-hover-title">
                          <span className="counter">{deliveredGoodsCount}</span>
                        </h3>
                        <p>Delivered Goods</p>
                      </div>
                    </div>
                  </div>

                  <div className="ca-abo-single-item mb-30">
                    <img className="w-100 sm-img-1" src={image2} alt="" />
                    <div className="ca-abo-hover-item">
                      <div className="ca-abo-content">
                        <div className="ca-abo-icon">
                          <span>
                            <img src={deliveryIcon} alt="" />
                          </span>
                        </div>
                        <h3 className="ca-abo-hover-title">
                          <span className="counter">{deliveredGoodsCount}</span>
                        </h3>
                        <p>Delivered Goods</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6}>
                  <div className="ca-abo-single-item mb-30">
                    <img className="w-100 sm-img-2" src={image3} alt="" />
                    <div className="ca-abo-hover-item">
                      <div className="ca-abo-content">
                        <div className="ca-abo-icon">
                          <span>
                            <img src={deliveryIcon} alt="" />
                          </span>
                        </div>
                        <h3 className="ca-abo-hover-title">
                          <span className="counter">{deliveredGoodsCount}</span>
                        </h3>
                        <p>Delivered Goods</p>
                      </div>
                    </div>
                  </div>

                  <div className="ca-abo-single-item mb-30">
                    <img className="w-100 lar-img-2" src={image4} alt="" />
                    <div className="ca-abo-hover-item">
                      <div className="ca-abo-content">
                        <div className="ca-abo-icon">
                          <span>
                            <img src={deliveryIcon} alt="" />
                          </span>
                        </div>
                        <h3 className="ca-abo-hover-title">
                          <span className="counter">{deliveredGoodsCount}</span>
                        </h3>
                        <p>Delivered Goods</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={6} className="mb-30">
            <div className="ca-ab-content3">
              <div className="ca-about-content-3 ca-sec-content-3">
                <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
                  {whyWeAreSubtitle}
                </h5>
                <h2 className="ca-section-title theme-black-3 fnw-600 pt-16 ca-text-cap">
                  {commitmentTitle}
                </h2>
                <p
                  className="pt-16 pb-32"
                  dangerouslySetInnerHTML={{ __html: commitmentDescription }}
                ></p>
              </div>
              <div className="ca-ab-item-check">
                {checkItems.map((item, index) => (
                  <div className="ca-ab-sngle-item" key={index}>
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
              <div className="ca-about-item3 cream-bg-3 p-relative">
                <p dangerouslySetInnerHTML={{ __html: successDescription }}></p>
              </div>
              <div className="ca-about-3-btn">
                <Button className="ca-btn-primary-3 theme-bg-3 text-white br-50">
                  {buttonText}
                  <span>{buttonIcon}</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Commitment;
