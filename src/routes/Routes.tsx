import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import About from "../pages/UserPages/About";
import Home from "../pages/UserPages/Home";
import ProductsPage from "../pages/UserPages/Products";
import AddProducts from "../pages/SellerDashboard/AddProducts";
import { ROUTES } from "../utils/constant";
import ProductDetail from "../pages/UserPages/ProductDetail";
import { Success } from "../pages/UserPages/Sucess";
import Cancel from "../pages/UserPages/Cancel";
import SellerDashboard from "../pages/SellerDashboard/SelllerDashboard";
import Dashboard from "../pages/SellerDashboard/Dasboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

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
    element: <AddProducts />,
    protected: true,
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: <ProductDetail />,
    protected: true,
  },
  {
    path: ROUTES.SUCCESS,
    element: <Success />,
    protected: true,
  },
  {
    path: ROUTES.CANCEL,
    element: <Cancel />,
    protected: true,
  },
  {
    path: "/seller",
    element: <SellerDashboard />,
    protected: true,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    protected: true,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "get-products",
        element: <ProductsPage />,
      },
      {
        path: "get-sellers",
        element: <AddProducts />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>
      </div>
    ),
    protected: false,
  },
];
