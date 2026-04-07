import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      {!hideHeader && <Header />}
      <AllRoutes />
    </>
  );
}

export default App;
