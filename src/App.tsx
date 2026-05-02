import { useLocation } from "react-router-dom";
import Header from "./components/LandingPage/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/seller" ||
      location.pathname.startsWith("/seller/add-products") ||
      location.pathname.startsWith("/seller/products") ||
       location.pathname === "/admin/dashboard" ||
       location.pathname === "/admin/dashboard/get-products" ||
       location.pathname === "/admin/dashboard/get-sellers";

  return (
    <>
      {!hideHeader && <Header />}
      <AllRoutes />
    </>
  );
}

export default App;
