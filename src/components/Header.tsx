import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { logout } from "../redux/appReducer";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
        <div className="">
          <ul className="flex gap-8 items-center">
            <li>
              <Link to={ROUTES.HOME}>Home </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={ROUTES.PRODUCTS}>Products</Link>
            </li>
            <li>
              <Link to={ROUTES.ADDPRODUCTS}>Add Products</Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="border border-gray-400 p-3 transform hover:scale-95 transition active:scale-95"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
