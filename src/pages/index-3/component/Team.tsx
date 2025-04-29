

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import team1 from "@/assets/img/team/ca-team-1.1.png";
import team2 from "@/assets/img/team/ca-team-1.2.png";
import team3 from "@/assets/img/team/ca-team-1.3.png";
import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiPlus,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


interface TeamMember {
    name: string;
    designation: string;
    image: string;
    link: string;
}

const teamData: TeamMember[] = [
    {
        name: "Shane Watson",
        designation: "Chief Engineer",
        image: team1,
        link: "/pages/team",
    },
    {
        name: "Dwayne Bravo",
        designation: "Worker",
        image: team2,
        link: "/pages/team",
    },
    {
        name: "Roston Chase",
        designation: "Manager",
        image: team3,
        link: "/pages/team",
    },
];

const OurTeam: React.FC = () => {
    return (
            <section className="ca-team pt-100 pb-70">
                <Container>
                    <div
                        className="ca-team-content ca-sec-content text-center mb-60 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h5 className="ca-section-subtitle subtitle-bg-1 p-relative theme-color-1 br-50 ca-text-cap">
                            Our Team
                        </h5>
                        <h2 className="ca-section-title theme-black-1 fnw-600 pt-16 ca-text-cap">
                            Our Track Record of Success
                        </h2>
                        <p className="pt-16">
                            We take pride in delivering tailored solutions that meet the unique
                            needs of our <br /> clients across various industries. From complex
                            international shipments.
                        </p>
                    </div>
                    <Row>
                        {teamData.map((member, index) => (
                            <Col key={index} lg={4} md={6}>
                                <div
                                    className="ca-single-team-box mb-30 aos-init aos-animate"
                                    data-aos={`fade-${index === 0 ? "right" : index === 1 ? "up" : "left"
                                        }`}
                                    data-aos-duration={`${(index + 1) * 200 + 600}`}
                                >
                                    <div className="ca-single-team-content">
                                        <h3 className="ca-team-title">
                                            <Link to={member.link}>{member.name}</Link>
                                        </h3>
                                        <span>{member.designation}</span>
                                    </div>
                                    <div className="ca-single-team-img">
                                        <img src={member.image} alt="" className="w-100" />
                                    </div>
                                    <div className="ca-team-sc-icon">
                                        <div className="team-left">
                                            <Link to="#">
                                                <BiLogoFacebook />
                                            </Link>
                                            <Link to="#">
                                                <BiLogoLinkedin />
                                            </Link>
                                        </div>
                                        <div className="team-center">
                                            <span>
                                                <BiPlus />
                                            </span>
                                        </div>
                                        <div className="team-right">
                                            <Link to="#">
                                                <BiLogoInstagram />
                                            </Link>
                                            <Link to="#">
                                                <FaXTwitter />
                                            </Link>
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

export default OurTeam;
