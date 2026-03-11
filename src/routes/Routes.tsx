import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import About from "../pages/UserPages/About";
import Home from "../pages/UserPages/Home";
import ProductsPage from "../pages/UserPages/Products";
import AddProducts from "../pages/UserPages/AddProducts";
import { ROUTES } from "../utils/constant";

export const routes = [
  {
    path: ROUTES.HOME,
    element: <Home />,
    protected: true,
  },
  {
    path: ROUTES.SIGNUP,
    element: <Signup />,
    protected: false,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
    protected: false,
  },
  //     {
  //     path: '/dashboard',
  //     element: <Dashboard />,
  //     protected: true,
  //     redirectTo: ROUTES.LOGIN,
  //   },
  {
    path: ROUTES.ABOUT,
    element: <About />,
    protected: true,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <ProductsPage />,
    protected: true,
  },
  {
    path: ROUTES.ADDPRODUCTS,
    element: <AddProducts/>,
    protected: true,
  },
];
