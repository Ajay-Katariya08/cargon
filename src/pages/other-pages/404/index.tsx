import image from "@/assets/img/blog/ca-eror.png";
import { BiChevronRight } from "react-icons/bi";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const index = () => {
    return (
        <>
            <PageMeta title="Error 404" />
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
                            <h2 className="ca-breadcrumb-title fnw-600">404 Error</h2>
                            <div className="it-breadcum-link">
                                <a href="/">Home</a>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <Link className="active" to="/pages/404">
                                    404 Error
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ca-eror pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 text-center mx-auto mb-30">
                                <div className="ca-eror-content">
                                    <div className="ca-eror-img mb-60">
                                        <img className="w-100" src={image} alt="" />
                                    </div>
                                    <div className="ca-eror-heading">
                                        <h2 className="ca-section-title theme-black-3 fnw-600">
                                            {" "}
                                            Sorry, Page Not Found!
                                        </h2>
                                        <p className="pt-16 pb-24">
                                            Sorry, the page you are looking for doesn’t exist or has
                                            <br /> been moved. Here are some helpful links.
                                        </p>
                                        <div className="ca-eror-btn">
                                            <Link
                                                to="/"
                                                className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                            >
                                                Take Me Home{" "}
                                                <span>
                                                    <BiChevronRight />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default index;
