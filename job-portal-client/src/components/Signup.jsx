import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../Utils/Api.utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!name || !email || !mobile || !password || !confirmPassword) {
      toast.error("Please enter all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }

    try {
      const userCredential = await signup({name, email, password, phone: mobile});
      const user = userCredential.user;
      toast.success("Signup Successful!");

      // Clear fields
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error) {
      console.error("Signup error:", error.message);
      toast.error("Signup error: " + error.message);
    }
  };

  const isFormValid =
    name && email && mobile && password && confirmPassword && password === confirmPassword;

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#E3684F]">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md space-y-4 bg-white px-8 py-6 rounded-[10px]"
      >
        <div className="text-center font-bold text-[20px] text-[#e45d43]">Sign Up</div>

        <div className="mb-2">
          <label htmlFor="name" className="text-gray-700 text-sm font-bold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow border rounded w-full py-2 px-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="number" className="text-gray-700 text-sm font-bold mb-1">
            Mobile Number
          </label>
          <input
            id="number"
            type="tel"
            placeholder="Enter your mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="shadow border rounded w-full py-2 px-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow border rounded w-full py-2 px-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="text-gray-700 text-sm font-bold mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow border rounded w-full py-2 px-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmpassword" className="text-gray-700 text-sm font-bold mb-1">
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow border rounded w-full py-2 px-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : "hover:from-purple-600 hover:to-indigo-600"
            }`}
          >
            Signup
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
