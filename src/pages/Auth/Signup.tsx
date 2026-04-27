import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import axiosInstance from "../../config/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      const res = await axiosInstance.post("api/register", formData);
      navigate(ROUTES.LOGIN);
      setFormData({
        userName: "",
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
      <h1 className="text-3xl">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="userName"
          className="border border-gray-300 p-2 "
          placeholder="Enter UserName"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="border border-gray-300 p-2 "
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="border border-gray-300 p-2 "
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border border-gray-400 p-2 transform hover:scale-95 transition"
        >
          {loading ? "loading...." : "SignUp"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
