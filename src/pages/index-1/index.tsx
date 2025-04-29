import Commitment from "./component/Commitment";
import Service from "./component/Service";
import Portfolio from "./component/Portfolio";
import VideoPlaySection from "./component/VideoPlay";

import TestimonialSection from "./component/Testimonial";
import ContactSection from "./component/Contact";
import BlogSection from "./component/Blog";
import Hero from "./component/Hero";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import BackToTop from "../../components/navbar/BackToTop";
import WorkingProcess from "./component/WorkingProcess";
import PageMeta from "../../components/PageMeta";

const index = () => {
  return (
    <>
      <PageMeta />
      <NavBar />
      <main>
        <Hero />
        <Commitment />
        <Service />
        <Portfolio />
        <VideoPlaySection />
        <WorkingProcess />
        <TestimonialSection />
        <ContactSection />
        <BlogSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default index;
