import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import ProtectedRoutes from "./ProtectedRoutes";
// import ProtectedRoutes from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        // If route has children (nested routes)
        if (route.children && route.children.length > 0) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<ProtectedRoutes routeConfig={route} />}
            >
              {route.children.map((child) => (
                <Route
                  key={child.path}
                  path={child.path}
                  element={child.element}
                />
              ))}
            </Route>
          );
        }

        // Simple route without children
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoutes routeConfig={route} />}
          />
        );
      })}
    </Routes>
  );
};
