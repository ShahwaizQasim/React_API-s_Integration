import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/appReducer";
import { ROUTES } from "../../utils/constant";

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-6">
      Home Page
      <Link to={ROUTES.ABOUT}>Go To About Page</Link>
      <Link to={ROUTES.ADDPRODUCTS}>Go To Add Products</Link>
      <Link to={ROUTES.PRODUCTS}>Go To Products Page</Link>
      <button
        onClick={handleLogout}
        className="border border-gray-400 p-3 transform hover:scale-95 transition active:scale-95"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
