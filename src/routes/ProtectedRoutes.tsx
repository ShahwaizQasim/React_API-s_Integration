import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/helpers";
import { ROUTES } from "../utils/constant";
import { setUser } from "../redux/appReducer";
import axiosInstance from "../config/api";

const ProtectedRoutes = ({ routeConfig }: any) => {
  const { protected: isProtected, element } = routeConfig;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state?.app);
  const token = getToken();

  const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

  const fetchUser = async () => {
    try {
      setLoading(true);
      // const res = await axios.get(`${PrivateVariables.Api_Url}api/UserInfo`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const res = await axiosInstance.get('api/UserInfo')
      dispatch(setUser(res?.data?.user));
      console.log("res", res.data.user);
        await delay(1000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //   console.log('token', token);
  //   console.log('user', user);

  useEffect(() => {
    if (token && !user) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (loading) return;
    // 1️⃣ User trying to access private route without token → redirect to login
    if (isProtected && (!token || !user)) {
      navigate(ROUTES.HOME, { replace: true });
    }

    // 2️⃣ User trying to access login/register page while logged in → redirect to home
    if (!isProtected && token && user) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [token, user, navigate, isProtected, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <span className="loader"></span>
      </div>
    );
  }

  return element; // JSX return kar rahe ho
};

export default ProtectedRoutes;
