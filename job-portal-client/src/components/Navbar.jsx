import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about-us", title: "About Us" },
    { path: "/services", title: "Services" },
    ...(token ? [{ path: "/my-job", title: "My Jobs" }] : []),
    { path: "/training", title: "Training" },
    { path: "/contact", title: "Contact" },
  ];
  return (
    <header className="max-w-screen container mx-auto xl:px-[40px] px-3 fixed top-0 left-0 w-full z-50 bg-white h-25">
      <nav className="flex justify-between items-center py-5">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img
            src="/images/Logo.jpg"
            alt="Logo"
            className="w-40 h-10 object-contain"
          />
        </a>

        {/* {NAV ITEMS FOR LARGE DEVICES} */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* SIGNUP AND LOGIN BUTTON */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          {token ? (
            <div className="py-2 px-5">Akanksha Gawade</div>
          ) : (
            <>
              <Link to="/login" className="py-2 px-8 border rounded">
                Login
              </Link>
              {/* <Link
                to="/sign-up"
                className="py-2 px-5 border rounded bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              >
                Sign up
              </Link>{" "} */}
            </>
          )}
          {/* <Link to = "/LogoutButton" className='py-2 px-5 border rounded bg-blue text-white'>Logout</Link> */}
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* NAV ITEMS FOR MOBILE */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-white py-1">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
