import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { BiChevronRight } from "react-icons/bi";
import { servicesData } from "./data";
import Paginations from "../../components/Paginations";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const index = () => (
    <>
        <PageMeta title="Services" />
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
                        <h2 className="ca-breadcrumb-title fnw-600">Our Services</h2>
                        <div className="it-breadcum-link">
                            <Link to="/">Home</Link>
                            <span>
                                <BiChevronRight className="fs-2" />
                            </span>
                            <Link className="active" to="#">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ca-iner-servics pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div className="col-xl-4 col-md-6 mb-30" key={index}>
                                <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                                    <div className="ca-about-icon">
                                        <div className="ca-about-ic ca-ser-ic">
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                        <div className="ca-num">
                                            <h4 className="overly-num overly-num2">
                                                {service.id.toString().padStart(2, "0")}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="ca-service-content ca-service-content-iner">
                                        <h4 className="ca-title fnw-700 pb-16 pt-32">
                                            {service.title}
                                        </h4>
                                        <p className="pb-24">{service.description}</p>
                                        <Link
                                            className="read-more"
                                            to={"/services"}
                                            style={{ display: "flex", alignItems: "center" }}
                                        >
                                            Read More
                                            <BiChevronRight style={{ fontSize: "25px" }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Paginations />
                </div>
            </div>
        </main>
    </>
);

export default index;
