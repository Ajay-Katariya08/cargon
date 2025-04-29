import ChooseUs from "./component/ChooseUs";
import OurServices from "./component/Services";
import OurProjects from "./component/Projects";
import Testimonials from "./component/Testimonial";
import FAQSection from "./component/FAQ";
import ContactSection from "./component/Contact";
import BlogSection from "./component/Blog";
import FooterSection from "./component/Footer";
import Hero from "./component/Hero";
import BackToTop from "../../components/navbar/BackToTop";
import NavBar2 from "../../components/navbar/NavBar2";
import PageMeta from "../../components/PageMeta";
import favicon from "../../assets/img/icon/ca-fav2.svg";

const index = () => {
  return (
    <>
      <PageMeta title="Cargon-02" icon={favicon} />
      <NavBar2 />
      <main>
        <Hero />
        <ChooseUs />
        <OurServices />
        <OurProjects />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <BlogSection />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
};

export default index;
