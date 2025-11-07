import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleMenuToggler = () => setIsMenuOpen(!isMenuOpen);

  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about-us", title: "About Us" },
    { path: "/services", title: "Services" },
    ...(token ? [{ path: "/my-job", title: "My Jobs" }] : []),
    { path: "/training", title: "Training" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <header className="max-w-screen container mx-auto xl:px-[40px] px-3 fixed top-0 left-0 w-full z-50 bg-white h-25 shadow-sm">
      <nav className="flex justify-between items-center py-5">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src="/images/Logo.jpg" alt="Logo" className="w-40 h-10 object-contain" />
        </a>

        {/* NAV ITEMS (Desktop) */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block relative">
          {token ? (
            <div className="relative inline-block" ref={dropdownRef}>
              <Avatar
                sx={{ bgcolor: "#1976d2", cursor: "pointer" }}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {getInitials(userName)}
              </Avatar>

              {/* DROPDOWN MENU */}
              {showDropdown && (
                <div className="absolute right-[-30px] mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="py-2 px-8 border rounded">
                Login
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU TOGGLER */}
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

      {/* MOBILE MENU */}
      <div
        className={`px-4 bg-black py-5 rounded-sm transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white py-1">
              <NavLink to={path} onClick={() => setIsMenuOpen(false)}>
                {title}
              </NavLink>
            </li>
          ))}
          {token ? (
            <>
              <li className="text-white py-1">
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
              </li>
              <li className="text-white py-1">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="text-white py-1">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
