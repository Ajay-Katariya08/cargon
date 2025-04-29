import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import project21 from "@/assets/img/portfolio/project-2.1.png";
import caPort22 from "@/assets/img/portfolio/ca-port2.2.png";
import caPort23 from "@/assets/img/portfolio/ca-port2.3.png";
import project24 from "@/assets/img/portfolio/project-2.4.png";
import project25 from "@/assets/img/portfolio/prject-2.5.png";
import arrow21 from "@/assets/img/icon/arrow-2.1.svg";
import { Link } from "react-router-dom";

interface ProjectItem {
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

const projectsData: ProjectItem[] = [
  {
    image: project21,
    title: "Customs Clearance Excellence",
    description:
      "Explore our case studies achievements <br> to see how we have transformed.",
    category: "Transportation 2024",
    link: "projects/single",
  },
  {
    image: caPort22,
    title: "Customs Clearance Excellence",
    description:
      "Explore our case studies <br> to see how we have transformed.",
    category: "Transportation 2024",
    link: "projects/single",
  },
  {
    image: caPort23,
    title: "Customs Excellence",
    description:
      "Explore our case studies <br> to see how we have transformed.",
    category: "Transportation 2024",
    link: "projects/single",
  },
  {
    image: project24,
    title: "Customs Clearance Excellence",
    description:
      "Explore our case studies <br> to see how we have transformed.",
    category: "Transportation 2024",
    link: "projects/single",
  },
  {
    image: project25,
    title: "Customs Clearance Excellence",
    description:
      "Explore our case studies <br> to see how we have transformed.",
    category: "Transportation 2024",
    link: "projects/single",
  },
];

const OurProjects = () => {
  return (
    <section className="ca-portfilo-2 pt-100 pb-70">
      <Container>
        <div
          className="ca-portfolio-content-2 ca-sec-content-2 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-4 p-relative theme-color-2">
            Our Projects
          </h5>
          <h2 className="ca-section-title theme-black-2 fnw-600 pt-16 ca-text-cap">
            Innovative Solutions in Action
          </h2>
          <p className="pt-16">
            {" "}
            We take pride in delivering tailored solutions that meet the unique
            needs of our
            <br /> clients across various industries. From complex international
            shipments.
          </p>
        </div>
        <Row>
          <Col lg={4} className="mb-30">
            <div
              className="ca-portfolio-2-item p-relative z-index-1 fix aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="800"
            >
              <img
                className="w-100"
                src={projectsData[0].image}
                alt={projectsData[0].title}
              />
              <div className="ca-portfolio-2-overlay-content p-absolute">
                <Link to={projectsData[0].link} className="ca-port-2-icon">
                  <span>
                    <img src={arrow21} alt="" />
                  </span>
                </Link>
                <div className="ca-port-2-desg">
                  <p className="fnw-600 pt-24 pb-16">
                    {projectsData[0].category}
                  </p>
                </div>
                <div className="ca-port-2-content">
                  <h4 className="ca-title fnw-600 text-white pb-16">
                    <Link to={projectsData[0].link}>
                      {projectsData[0].title}
                    </Link>
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: projectsData[0].description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {projectsData.slice(1).map((project, index) => {
                let colSize = 6;
                if (index === 0) {
                  colSize = 7;
                } else if (index === 1) {
                  colSize = 5;
                }
                return (
                  <Col lg={colSize} md={6} className="mb-30" key={index}>
                    <div
                      className={`ca-portfolio-2-item item-1-img p-relative z-index-1 fix aos-init aos-animate`}
                      data-aos="zoom-out-down"
                      data-aos-duration={(index + 1) * 200 + 1000}
                    >
                      <img
                        className="w-100"
                        src={project.image}
                        alt={project.title}
                      />
                      <div className="ca-portfolio-2-overlay-content pitem2 p-absolute">
                        <Link to={project.link} className="ca-port-2-icon">
                          <span>
                            <img src={arrow21} alt="" />
                          </span>
                        </Link>
                        <div className="ca-port-2-desg">
                          <p className="fnw-600 pt-24 pb-16">
                            {project.category}
                          </p>
                        </div>
                        <div className="ca-port-2-content">
                          <h4 className="ca-title fnw-600 text-white pb-16">
                            <Link to={project.link}>{project.title}</Link>
                          </h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: project.description,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurProjects;
