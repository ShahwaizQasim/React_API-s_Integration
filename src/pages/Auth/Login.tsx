import axios from "axios";
import React, { useState } from "react";
import { PrivateVariables } from "../../config/PrivateVariable";
import { setToken } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setLoginData, setUser } from "../../redux/appReducer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `${PrivateVariables.Api_Url}api/login`,
        formData,
      );
      // Cookies.set("token", token, { expires: 1 })
      dispatch(setLoginData(res?.data?.data))
      dispatch(setUser(res?.data?.data))
      navigate(ROUTES.HOME);
      setToken(res?.data?.token);
      console.log("res", res?.data.data);

      setFormData({
        email: "",
        password: "",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    console.log(formData);
    console.log("function run");
  };
  // console.log("fo  rmData+++",formData);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-80">
        <input
          type="email"
          name="email"
          className="border border-gray-300 p-2 "
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <input
            type={`${hidePassword ? "password" : "text"}`}
            name="password"
            className="border border-gray-300 p-2 "
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p
            className="border border-red-200 p-2 transform active:scale-100 cursor-pointer"
            onClick={() => {
              setHidePassword(!hidePassword);
            }}
          >
            {hidePassword ? "Hide" : "Show"}
          </p>
        </div>

        <button
          type="submit"
          className="border border-gray-400 p-2 transform hover:scale-95 transition"
        >
          {loading ? "loading...." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
