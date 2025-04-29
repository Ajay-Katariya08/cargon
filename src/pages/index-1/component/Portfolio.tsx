
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ca_portfoli3_1 from "@/assets/img/portfolio/ca-portfoli3.1.png";
import ca_portfolio3_2 from "@/assets/img/portfolio/ca-portfolio3.2.png";
import ca_portfoli3_3 from "@/assets/img/portfolio/ca-portfoli3.3.png";
import ca_project3_4 from "@/assets/img/portfolio/ca-project3.4.png";
import ca_portfolio_3_5 from "@/assets/img/portfolio/ca-portfolio-3.5.png";
import ca_arow_3_1 from "@/assets/img/icon/ca-arow-3.1.svg";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  colClass: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      image: ca_portfoli3_1,
      title: "Customs Clearance Excellence",
      subtitle: "Transportation",
      description:
        "Explore our case studies achievements to see how we have transformed.",
      colClass: "col-lg-3 col-md-6",
    },
    {
      id: 2,
      image: ca_portfolio3_2,
      title: "Customs Clearance Excellence",
      subtitle: "Transportation",
      description:
        "Explore our case studies achievements to see how we have transformed.",
      colClass: "col-lg-4 col-md-6",
    },
    {
      id: 3,
      image: ca_portfoli3_3,
      title: "Customs Clearance Excellence",
      subtitle: "Transportation",
      description:
        "Explore our case studies achievements to see how we have transformed.",
      colClass: "col-lg-5 col-md-6",
    },
    {
      id: 4,
      image: ca_project3_4,
      title: "Customs Clearance Excellence",
      subtitle: "Transportation",
      description:
        "Explore our case studies achievements to see how we have transformed.",
      colClass: "col-lg-6 col-md-6",
    },
    {
      id: 5,
      image: ca_portfolio_3_5,
      title: "Customs Clearance Excellence",
      subtitle: "Transportation",
      description:
        "Explore our case studies achievements to see how we have transformed.",
      colClass: "col-lg-6 col-md-6",
    },
  ];

  return (
    <section className="ca-portfilo-2 pt-100 pb-70">
      <Container>
        <div
          className="ca-portfolio-content-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">
            Our Projects
          </h5>
          <h2 className="ca-section-title theme-black-3 fnw-600 pt-16">
            Showcasing Our Expertise
          </h2>
          <p className="pt-16">
            From complex international shipments to efficient domestic
            transport,
            <br />
            our success stories highlight our commitment to reliability.
          </p>
        </div>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} className={project.colClass}>
              <div className="ca-single-pro-img-3 mb-30">
                <img
                  className="w-100 fluid"
                  src={project.image}
                  alt={project.title}
                />
                <div className="ca-project-hover-item1">
                  <Link
                    to="/projects/single"
                    className="ca-project-hover-item1-icon"
                  >
                    <span>
                      <img src={ca_arow_3_1} alt="arrow" className="fluid" />
                    </span>
                  </Link>
                  <div className="ca-project-hover-item-content">
                    <h4 className="ca-project-hov-sub-title">
                      {project.subtitle}
                    </h4>
                    <h3 className="ca-project-hov-title">
                      <Link to="projects/single">{project.title}</Link>
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
