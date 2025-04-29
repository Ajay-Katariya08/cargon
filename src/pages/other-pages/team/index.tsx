import { Container, Row, Col } from "react-bootstrap";
import {
    BiChevronRight,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
} from "react-icons/bi";
import share from "@/assets/img/icon/ca-share.svg";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { BsTwitterX } from "react-icons/bs";
import { teamMembers } from "./data";
import { Link } from "react-router-dom";
import Paginations from "../../../components/Paginations";
import PageMeta from "@/components/PageMeta";

const index = () => {
    return (
        <>
            <PageMeta title="Team" />

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
                            <h2 className="ca-breadcrumb-title fnw-600">Our Teams</h2>
                            <div className="it-breadcum-link">
                                <a href="/">Home</a>

                                <span>
                                    {" "}
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a className="active" href="#">
                                    Our Teams
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="ca-teams-inner pt-100 pb-100">
                    <Container>
                        <Row>
                            {teamMembers.map((member, index) => (
                                <Col lg={3} md={6} className="mb-30" key={index}>
                                    <div
                                        className="ca-team-inner p-relative z-index-1 wow tpFadeInUp"
                                        data-wow-duration="1.5s"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="ca-team-inner-content p-relative fix">
                                            <div className="ca-team-iner-img">
                                                <img
                                                    className="w-100"
                                                    src={member.image}
                                                    alt={member.name}
                                                />
                                            </div>
                                            <div className="ca-team-iner-social">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <span>
                                                                <BsTwitterX />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <span>
                                                                <BiLogoLinkedin />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <span>
                                                                <BiLogoInstagram />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <span>
                                                                <BiLogoFacebook />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="ca-iner-content-team">
                                            <div className="ca-team-iner-content br-7">
                                                <div className="ca-team-iner-heading">
                                                    <h4 className="ca-team-iner-title">
                                                        <Link to="/pages/team">Alex Fargusion</Link>
                                                    </h4>
                                                    <span>Specialist</span>
                                                </div>
                                                <div className="ca-team-iner-share">
                                                    <Link to="#">
                                                        <img src={share} alt="Share" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                        <Paginations />
                    </Container>
                </div>
            </main>
        </>
    );
};

export default index;
