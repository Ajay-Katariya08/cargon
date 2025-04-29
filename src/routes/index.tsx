import { Route, Routes } from "react-router-dom";
import { landingRoutes, pageRoutes } from "./Routes";
import MainLayout from "../components/MainLayout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {landingRoutes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}

        {pageRoutes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
