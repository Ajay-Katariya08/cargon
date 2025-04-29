import About from "./component/About";
import PricingPlan from "./component/pricingPlans";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Blog from "./component/Blog";

import Sponsor from "./component/Sponsor";
import Hero from "./component/Hero";
import Service from "./component/Service";

import NavBar4 from "../../components/navbar/NavBar4";
import Footer from "../../components/Footer";
import BackToTop from "../../components/navbar/BackToTop";
import PageMeta from "../../components/PageMeta";
import favicon from "../../assets/img/icon/ca-fac4.svg";

const page = () => {
  return (
    <>
      <PageMeta title="Cargon-04" icon={favicon} />
      <NavBar4 />
      <main>
        <Hero />
        <About />
        <Service />
        <PricingPlan />
        <Testimonial />
        <Sponsor />
        <Contact />
        <Blog />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
