import phone from "@/assets/img/icon/ca-ser-phone.svg";
import images from "@/assets/img/portfolio/ca-pro-thumb1.1.png";
import {
    BiCheck,
    BiChevronRight,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiSearch,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import image1 from "@/assets/img/portfolio/portfolio-sm-1.4.png";
import arrow from "@/assets/img/icon/ca-portfolio-arrow-1.1.svg";
import image2 from "@/assets/img/portfolio/portfolio-sm-1.6.png";
import image3 from "@/assets/img/portfolio/portfolio-sm-1.5.png";
import breadCrumb from "@/assets/img/shape/breadcrumn-shape.png";
import line from "@/assets/img/shape/ca-line-shape.png";
import { tags } from "../../blog/left/data";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const socialLinks = [
    { icon: <BiLogoInstagram />, url: "#" },
    { icon: <BiLogoFacebook />, url: "#" },
    { icon: <BiLogoLinkedin />, url: "#" },
    { icon: <FaXTwitter />, url: "#" },
];

const services = [
    { id: 1, title: "Secure Warehousing", icon: <BiCheck /> },
    { id: 2, title: "Customs Brokerage", icon: <BiCheck /> },
    { id: 3, title: "E-commerce Fulfillment", icon: <BiCheck /> },
    { id: 4, title: "Heavy Lift and Project Cargo", icon: <BiCheck /> },
    { id: 5, title: "Rapid Express Delivery", icon: <BiCheck /> },
    { id: 6, title: "Inventory Optimization", icon: <BiCheck /> },
];

const projectDetails = [
    { label: "Category", value: "Branding & Profile" },
    { label: "Location", value: "73 Bridge St Brooklyn, USA." },
    { label: "Client", value: "Transport & Logistics" },
    { label: "Date", value: "20/06/2024" },
];

const index = () => {
    return (
        <>
            <PageMeta title="Project Left" />
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
                                Customs Clearance Excellence
                            </h2>
                            <div className="it-breadcum-link">
                                <a href="/">Home</a>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a href="/projects">Project</a>
                                <span>
                                    <BiChevronRight className="fs-2" />
                                </span>
                                <a className="active" href="#">
                                    Customs Clearance Excellence
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ca-service-lft-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-30">
                                <div className="ca-sidebar-area mr-50">
                                    <div className="ca-search ca-padding cream-bg-3 br-7 mb-30">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                            Search
                                        </h4>
                                        <div className="ca-search-box p-relative z-index-1">
                                            <input type="text" placeholder="Search.." />
                                            <div className="ca-sea-icon">
                                                <span>
                                                    <BiSearch />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ca-servic-list ca-padding cream-bg-3 br-7 mb-30">
                                        <h4 className="ca-title ca-servic-list-title fnw-600 theme-black-3 pb-24">
                                            If You Need Any Help <br /> Contact With Us
                                        </h4>
                                        <div className="ca-ph-content">
                                            <div className="ca-ph-ic">
                                                <span>
                                                    {" "}
                                                    <img src={phone} alt="" />{" "}
                                                </span>
                                            </div>
                                            <div className="ca-ph-title">
                                                <h4 className="ph-title">
                                                    <Link to="tel:1234567890">+123 456 7890</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ca-tags ca-padding cream-bg-3 br-7 mb-30">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                            Popular Tags
                                        </h4>
                                        <div className="ca-tags-list">
                                            <ul>
                                                {tags.map((tag) => (
                                                    <li key={tag.id}>
                                                        <Link to="#">{tag.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="ca-search ca-padding cream-bg-3 br-7 mb-30">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-24">
                                            Follow Us
                                        </h4>
                                        <div className="ca-footer-social ca-footer-social-3">
                                            <ul>
                                                {socialLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            to={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {link.icon}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ca-search ca-padding cream-bg-3 br-7 mb-30">
                                        <h4 className="ca-title fnw-600 theme-black-3 pb-24">
                                            Get A Free Quote
                                        </h4>
                                        <div className="ca-sidebar-form">
                                            <form action="#">
                                                <input type="text" placeholder="Your Name" />
                                                <input type="email" placeholder="Email Address" />
                                                <input type="tel" placeholder="Phone Number" />
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    rows={10}
                                                    cols={4}
                                                    placeholder="Your Message"
                                                ></textarea>
                                            </form>
                                            <div className="ca-sidebar-form-btn text-end">
                                                <Link
                                                    to="#"
                                                    className="ca-btn-primary-3 theme-bg-3 text-white br-50"
                                                >
                                                    Contact Now{" "}
                                                    <span>
                                                        <BiChevronRight className="fs-2" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mb-30">
                                <div className="ca-project-content-area">
                                    <div className="ca-pro-thumb-content">
                                        <h2 className="ca-project-thumb-title theme-black-3 fnw-600 ca-text-cap">
                                            Customs Clearance Excellence
                                        </h2>
                                        <p className="pt-16 pb-40">
                                            We provide a full spectrum of logistics & transport services
                                            designed to meet the specific needs businesses <br /> in
                                            various industries. Our Freight Forwarding Services utilize
                                            a vast network of carriers to ensure your <br />
                                            international shipments are managed efficiently and
                                            cost-effectively.
                                        </p>
                                        <div className="ca-servic-thumb br-7">
                                            <img className="w-100" src={images} alt="" />
                                        </div>
                                        <div className="ca-project-cat">
                                            {projectDetails.map((item, index) => (
                                                <div key={index} className="ca-single-cat-item mb-30">
                                                    <h4 className="ca-title fnw-600 theme-black-3 pb-16">
                                                        {item.label}
                                                    </h4>
                                                    <span>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600 ca-text-cap">
                                            Consolidation and Deconsolidation Services
                                        </h3>
                                        <p className="pt-16">
                                            Our Warehousing Solutions offer secure, climate-controlled
                                            storage with advanced inventory tracking to <br /> keep your
                                            goods safe & easily accessible. We excel in Customs
                                            Clearance, simplifying the complexities of <br />{" "}
                                            international trade and ensuring your shipments comply with
                                            all regulations.
                                        </p>
                                        <p className="pt-20">
                                            Our Global Shipping Services guarantee that your products
                                            reach global markets on time, leveraging our <br />{" "}
                                            strategic partnerships and logistical expertise. For
                                            domestic logistics, our Domestic Transport Solutions <br />
                                            provide reliable, flexible delivery options across the
                                            country.
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
                                            {services.map((service) => (
                                                <div className="ca-ab-sngle-item" key={service.id}>
                                                    <div className="ca-ab-sngle-item-ic">
                                                        <span>{service.icon}</span>
                                                    </div>
                                                    <div className="ca-ab-sngle-item-content">
                                                        <h4 className="ca-item-ch-title">{service.title}</h4>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className="ca-project-thumb-title-2 theme-black-3 fnw-600">
                                            Domestic Freight Transport
                                        </h3>
                                        <p className="pt-16">
                                            Our expertise in Customs Clearance navigates the
                                            complexities of global trade regulations, ensuring your
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
                </div>
                <div className="ca-more-section pb-70">
                    <div className="container">
                        <h2 className="ca-more-title theme-black-3 fnw-600 text-center mb-60">
                            More Projects
                        </h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={image1} alt="" />
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
                            <div className="col-lg-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={image2} alt="" />
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
                            <div className="col-lg-4 col-md-6">
                                <div className="ca-single-portfolio-item sm-img p-relative z-index-1 fix mb-30">
                                    <div className="ca-portfolio-img">
                                        <img className="w-100 br-7" src={image3} alt="" />
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
                </div>
            </main>
        </>
    );
};

export default index;
