import About from "./component/About";
import OurServices from "./component/Service";
import OurPortfolio from "./component/Portfolio";
import Testimonial from "./component/Testimonial";
import OurTeam from "./component/Team";
import ContactUs from "./component/ContactUs";
import OurBlog from "./component/Blog";
import Footer from "./component/Footer";

import Hero from "./component/Hero";
import TopBar from "../../components/navbar/TopBar";
import NavBar3 from "../../components/navbar/NavBar3";
import BackToTop from "../../components/navbar/BackToTop";
import PageMeta from "../../components/PageMeta";
import favicon from "../../assets/img/icon/ca-fav1.svg";

const index = () => {
  return (
    <>
      <PageMeta title="Cargon-03" icon={favicon} />
      <TopBar />
      <NavBar3 />

      <main>
        <Hero />
        <About />
        <OurServices />
        <OurPortfolio />
        <Testimonial />
        <OurTeam />
        <ContactUs />
        <OurBlog />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default index;
