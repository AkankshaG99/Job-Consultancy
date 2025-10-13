import React, { useState, useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {login} from "../Utils/Api.utils"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login({ email, password })
      if (response?.status == 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful!");
        navigate("/"); 
      } else {
        toast.error( response.data.message || "Invalid credentials",);
      }
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong. Please try again later.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "null") {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, []);
  

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#E3684F]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      {userLoggedIn  ? ( // Conditionally render logout button if user is logged in
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold mb-4 text-center">
            Logged in as: {userLoggedIn.displayName || userLoggedIn.email}
          </p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md space-y-3 bg-white px-9 py-7 rounded-[10px]"
        >
          <div className="flex items-center justify-center font-[700] text-[20px] text-[#e45d43]">
            Login
          </div>
          <div className="mb-2">
            <label
              className="flex items-center  text-gray-700 text-sm font-bold mb-2"
              to="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="flex items-center  text-gray-700 text-sm font-bold mb-2"
              to="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700  leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
          <div className="flex items-center justify-center pt-4">
          <button
          onClick={handleLogin}
          disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline "
          >
            {loading ? "Logging in..." : "Login"}
          </button></div>

          <div className="text-gray-500 flex justify-center pt-2 gap-1">Don't have an account? <a href="/sign-up" className="font-semibold text-[#E3684F] underline"> Register here </a></div>
        </div> 
      )}
    </div>
  );
};

export default Login;
