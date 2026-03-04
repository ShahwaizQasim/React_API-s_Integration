import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import ProtectedRoutes from "./ProtectedRoutes";
// import ProtectedRoutes from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} key={route.path} element={<ProtectedRoutes routeConfig={route} /> } />
        // <Route path={route.path} key={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
