import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({email: "",password: "",});
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({...inputValue, [name]: value, });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left"});

  const handleSuccess = (msg) => toast.success(msg, {position: "bottom-left"});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 via-blue-300 to-cyan-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="form_container p-6 bg-white rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-cyan-500 mb-4 text-center">Login Account</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-lg text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                className="border-b border-gray-400 focus:outline-none p-2 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-lg text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                className="border-b border-gray-400 focus:outline-none p-2 text-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 text-white p-2 rounded-lg text-lg hover:bg-cyan-600 transition"
            >
              Submit
            </button>
            <span className="text-center text-gray-600">
              Don't have an account? <Link to="/signup" className="text-cyan-500">Signup</Link>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;