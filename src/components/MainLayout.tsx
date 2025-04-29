import { ReactNode, Suspense } from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";
import BackToTop from "./navbar/BackToTop";
import PlaceHolder from "./Loder";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense fallback={<PlaceHolder />}>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </Suspense>
    </>
  );
};

export default MainLayout;
