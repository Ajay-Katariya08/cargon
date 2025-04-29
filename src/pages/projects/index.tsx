import port1 from "@/assets/img/portfolio/portfolio-sm-1.1.png";
import port2 from "@/assets/img/portfolio/portfolio-big-1.1.png";
import port3 from "@/assets/img/portfolio/portfolio-big-1.1.png";
import port4 from "@/assets/img/portfolio/portfolio-sm-1.2.png";
import port5 from "@/assets/img/portfolio/portfolio-sm-1.3.png";
import port6 from "@/assets/img/portfolio/portfolio-big-1.3.png";
import port7 from "@/assets/img/portfolio/portfolio-sm-1.4.png";
import port8 from "@/assets/img/portfolio/portfolio-sm-1.5.png";
import port9 from "@/assets/img/portfolio/portfolio-sm-1.6.png";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { BiChevronRight } from "react-icons/bi";
import arrow from "@/assets/img/icon/ca-portfolio-arrow-1.1.svg";
import { Link } from "react-router-dom";
import Paginations from "../../components/Paginations";
import PageMeta from "@/components/PageMeta";

const page = () => {
    return (
        <>
            <PageMeta title="Projects" />
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
                            <h2 className="ca-breadcrumb-title fnw-600">Our Projects</h2>
                            <div className="it-breadcum-link">
                                <a href="/">Home</a>
                                <span>
                                    {" "}
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a className="active" href="/projects">
                                    Our Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="ca-projects-iner pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port1} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>

                                <div className="ca-single-portfolio-item big-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port2} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="ca-single-portfolio-item big-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port3} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>

                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port4} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port5} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>

                                <div className="ca-single-portfolio-item big-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port6} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port7} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port8} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={port9} alt="" />
                                    </div>
                                    <div className="ca-portfolio-link">
                                        <Link to="#" className="portfolio-link portfolio-link-2">
                                            <span>
                                                <img src={arrow} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ca-portfolio-content-meta theme-bg-3 br-7">
                                        <p>Transportation 2024</p>
                                        <h4 className="ca-por-title">
                                            <Link to="#">Experts in Logistics Management</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Paginations />
                </div>
            </main>
        </>
    );
};

export default page;
