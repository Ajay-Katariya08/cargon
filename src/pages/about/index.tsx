import { Container } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import Commitment from "./session/Commitment";
import WhyChoos from "./session/WhyChoos";
import OurValues from "./session/OurValues";
import OurTeam from "./session/OurTeam";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";

const index = () => {
    return (
        <>
            <PageMeta title="About Us"/>
            <main>
                <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                        <img src={breadCrumb} alt="Breadcrumb Shape" />
                    </div>
                    <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                        <img src={line} alt="Line Shape" />
                    </div>
                    <Container>
                        <div className="ca-breadcrumb-content text-center">
                            <h2 className="ca-breadcrumb-title fnw-600">About Us</h2>
                            <div className="it-breadcum-link">
                                <Link to="/">Home</Link>
                                <span>
                                    <FaAngleRight />
                                </span>
                                <Link className="active" to="#">
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                <Commitment />
                <WhyChoos />
                <OurValues />
                <OurTeam />
            </main>
        </>
    );
};

export default index;
