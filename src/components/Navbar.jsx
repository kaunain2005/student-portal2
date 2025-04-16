import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { getToken, logout, getUser } from "../utils/auth";

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, []);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const user = getUser();
  const userRole = user?.role || "user";

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ backdropFilter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-15 z-50 bg-black/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-15" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Course", path: "/course" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Dashboard Link for Admins */}
            {userRole === "admin" && (
              <Link to="/dashboard" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
            )}

            {/* Profile Icon with Dropdown */}
            {isAuthenticated && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center focus:outline-none"
                >
                  {user?.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="w-8 h-8 text-white" />
                  )}
                </button>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                    >
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
                      >
                        <FaUserEdit className="mr-2" /> Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200 transition"
                      >
                        <FaSignOutAlt className="mr-2" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-b from-blue-900 to-indigo-800 shadow-lg rounded-lg mt-2 p-2"
            >
              <div className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-white hover:bg-indigo-600 px-3 py-2 rounded-md transition duration-300"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Courses Dropdown */}
                <div className="relative">
                  <motion.button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    whileHover={{ scale: 1.05 }}
                    className="w-full text-left text-white hover:bg-indigo-600 px-3 py-2 rounded-md transition duration-300"
                  >
                    Courses
                  </motion.button>
                  <AnimatePresence>
                    {isCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {courses.map((course, index) => (
                          <Link
                            key={index}
                            to={course.path}
                            className="block text-white hover:bg-indigo-600 px-3 py-2 rounded-md transition duration-300"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Profile & Logout */}
                {isAuthenticated && (
                  <div className="mt-4">
                    <Link
                      to="/profile"
                      className="flex items-center text-white hover:bg-indigo-600 px-3 py-2 rounded-md transition duration-300"
                    >
                      {user?.profilePic ? (
                        <img
                          src={user.profilePic}
                          alt="Profile"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      ) : (
                        <FaUserCircle className="w-8 h-8 text-white mr-2" />
                      )}
                      Profile
                    </Link>
                  </div>
                )}

                {!isAuthenticated && (
                  <Link
                    to="/login"
                    className="w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 block"
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
