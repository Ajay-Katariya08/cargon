import { BiCheck, BiChevronRight } from "react-icons/bi";
import ca_portfolio_arrow_1_1 from "@/assets/img/icon/ca-portfolio-arrow-1.1.svg";
import thumb1 from "@/assets/img/portfolio/ca-pro-thumb1.1.png";
import { projectData } from "../data";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const index = () => {
    return (
        <>
            <PageMeta title="Project Single" />
            <main>
                <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                        <img src={breadCrumb} alt="" />
                    </div>
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                        <img src={line} alt="" />
                    </div>
                    <div className="container">
                        <div className="ca-breadcrumb-content text-center">
                            <h2 className="ca-breadcrumb-title fnw-600">
                                Supply Chain Management
                            </h2>
                            <div className="it-breadcum-link">
                                <Link to="/">Home</Link>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <Link to="/services">Service</Link>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <Link className="active" to="#">
                                    Supply Chain Management
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="ca-service-lft-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-30 mx-auto">
                                <div className="ca-project-content-area">
                                    <div className="ca-pro-thumb-content">
                                        <h2 className="ca-project-thumb-title theme-black-3 fnw-600 ca-text-cap">
                                            {projectData.title}
                                        </h2>
                                        <p className="pt-16 pb-40">{projectData.description.main}</p>
                                        <div className="ca-servic-thumb br-7" />
                                        <img className="w-100" src={thumb1} alt="" />
                                    </div>
                                    <div className="ca-project-cat">
                                        <div className="ca-single-cat-item mb-30">
                                            <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                Category{" "}
                                            </h4>
                                            <span>{projectData.details.category}</span>
                                        </div>

                                        <div className="ca-single-cat-item mb-30">
                                            <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                Location{" "}
                                            </h4>
                                            <span>{projectData.details.location}</span>
                                        </div>

                                        <div className="ca-single-cat-item mb-30">
                                            <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                Client{" "}
                                            </h4>
                                            <span>{projectData.details.client}</span>
                                        </div>

                                        <div className="ca-single-cat-item mb-30">
                                            <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                Date
                                            </h4>
                                            <span>{projectData.details.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600 ca-text-cap">
                                        Consolidation and Deconsolidation Services
                                    </h3>
                                    <p className="pt-16">{projectData.description.consolidation}</p>
                                    <p className="pt-20">
                                        {projectData.description.domesticFreight}
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="ca-projrct-iner-box cream-bg-3 br-7">
                                                <h4 className="ca-title fnw-600 theme-black-3 pb-16 ca-text-cap">
                                                    Reverse Logistics Management
                                                </h4>
                                                <p>
                                                    We optimize every aspect of your supply <br /> chain
                                                    through Supply Chain Management
                                                    <br /> services, from procurement to delivery,
                                                    <br /> enhancing operational efficiency.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ca-projrct-iner-box cream-bg-3 br-7">
                                                <h4 className="ca-title fnw-600 theme-black-3 pb-16 ca-text-cap">
                                                    Heavy Lift and Project Cargo
                                                </h4>
                                                <p>
                                                    Our E-commerce Logistics Solutions are <br /> designed
                                                    to streamline your online order <br />
                                                    fulfillment, offering seamless integration <br /> with
                                                    your e-commerce platform
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ca-about-item3 cream-bg-3 p-relative">
                                        <p>
                                            Our Express Delivery Services offer fast and reliable
                                            shipping options to meet urgent delivery <br /> needs, and
                                            our Inventory Management solutions help you maintain
                                            accurate stock levels, reduce <br /> costs, and improve
                                            customer satisfaction. Partner with Cargon for innovative
                                            and tailored
                                        </p>
                                    </div>
                                    <div className="ca-ab-item-check ca-ab-item-check-2 caborder-top">
                                        {projectData.services.map((service, index) => (
                                            <div className="ca-ab-sngle-item" key={index}>
                                                <div className="ca-ab-sngle-item-ic">
                                                    <span>
                                                        <i>
                                                            <BiCheck />
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="ca-ab-sngle-item-content">
                                                    <h4 className="ca-item-ch-title ca-text-cap">
                                                        {service}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600 ca-text-cap">
                                        Domestic Freight Transport
                                    </h3>
                                    <p className="pt-16">
                                        Our expertise in Customs Clearance navigates the complexities
                                        of global trade regulations, ensuring your
                                        <br /> shipments comply with all necessary requirements and
                                        minimizing delays. Our Global Shipping Services <br />
                                        connect you to international markets, utilizing optimized
                                        routes and reliable carriers to enhance
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ca-more-section pb-70">
                    <div className="container">
                        <h2 className="ca-more-title theme-black-3 fnw-600 text-center mb-60">
                            More Projects
                        </h2>
                        <div className="row">
                            {projectData.moreProjects.map((project, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                        <div className="ca-portfolio-img">
                                            <img className="w-100 br-7" src={project.image} alt="" />
                                        </div>
                                        <div className="ca-portfolio-link">
                                            <Link to="#" className="portfolio-link portfolio-link-2">
                                                <span>
                                                    <img src={ca_portfolio_arrow_1_1} alt="" />
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                            <p>{project.category}</p>
                                            <h4 className="ca-por-title">
                                                <Link to="#">{project.title}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default index;
