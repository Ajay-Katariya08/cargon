
import { BiCheck, BiRightArrowAlt } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { pricingPlans } from "../../other-pages/pricing/data";
import { Link } from "react-router-dom";

const PricingPlan: React.FC = () => {
  return (
    <section className="ca-pricing-plan pt-100 pb-70">
      <Container>
        <div
          className="ca-pricing-content-4 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-8 p-relative theme-black-4 br-50">
            Pricing Plan
          </h5>
          <h2 className="ca-section-title theme-black-4 fnw-600 pt-16 ca-text-cap">
            Flexible Pricing Options
          </h2>
          <p className="pt-16">
            we offer a diverse array of transport and logistics services
            tailored <br /> to meet the unique needs of businesses across
            various industries.
          </p>
        </div>
        <Row>
          {pricingPlans.map((plan, index) => (
            <Col xl={4} md={6} className="mb-30" key={index}>
              <div
                className={`ca-pricing-box br-7 aos-init aos-animate ${
                  plan.active ? "active" : ""
                }`}
                data-aos={
                  plan.active
                    ? "fade-up"
                    : index === 0
                    ? "fade-right"
                    : "fade-left"
                }
                data-aos-duration={
                  plan.active ? "1000" : index === 0 ? "800" : "1200"
                }
              >
                <div className="ca-pring-box-content">
                  <h2 className="ca-pricing-box-title fnw-600">{plan.title}</h2>
                  <p className="pt-16 pb-32">{plan.description}</p>
                  <h3 className="ca-price">
                    <span>${plan.price}</span> <cite>/ {plan.frequency}</cite>
                  </h3>
                </div>
                <div className="ca-price-list p-relative">
                  <div className="ca-price-btn p-absolute">
                    <Link
                      to="#"
                      className="ca-btn-primary ca-pricebtn ca-btn-primary-4 theme-bg-4 text-white br-50"
                    >
                      Get Started Now
                      <span>
                        <BiRightArrowAlt />
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
      </Container>
    </section>
  );
};

export default PricingPlan;
