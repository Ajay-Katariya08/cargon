import AppRoutes from "./routes";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/typography.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import AppWrapper from "./components/AppWrapper";

function App() {
  return (
    <>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </>
  );
}

export default App;
