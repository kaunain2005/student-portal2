import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import SalesChart from "../components/charts/SalesChart";
import StatsCard from "../components/dashboard/StatsCard";
import { FaCheckCircle, FaTimesCircle, FaUserGraduate } from "react-icons/fa";
import GrowthChart from "../components/dashboard/GrowthChart";

const HomeDashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-900 p-6 pt-15">
      {/* Grid Layout */}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 0.95 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-4 grid-rows-4 gap-4"
      >
        {/* Total Students */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-md relative flex flex-col justify-between overflow-hidden border-l-4 border-indigo-600"
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-full h-full opacity-10"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="4" cy="4" r="2" fill="currentColor"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
            <img
              src="/c-icon.png"
              alt="Badge"
              className="w-10 h-10 object-cover"
            />
          </div>

          {/* Organizational Label */}
          <p className="text-sm text-gray-700 font-medium mb-4">
            Wisdom Academy
          </p>

          {/* Title */}
          <h2 className="text-3xl font-bold text-violet-800 mb-2">
            ➕Add Course
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-700 text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐⭐⭐ </span>
            </div>
            <div className="flex items-center space-x-1">
              <FaUserGraduate className="text-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-blue-50 rounded-lg p-6 shadow-md relative flex flex-col justify-between overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 400"
              className="w-full h-full opacity-20"
            >
              <rect fill="#E0F7FA" width="800" height="400" />
              <circle cx="400" cy="200" r="180" fill="#B2EBF2" />
            </svg>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-white p-2 shadow-sm">
            <img
              src="/u-course.png"
              alt="Badge"
              className="w-10 h-10 object-cover"
            />
          </div>

          {/* Organizational Label */}
          <p className="text-sm text-gray-700 font-medium mb-4">
            Learning Center
          </p>

          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-800 mb-2">
            📚 Manage Courses
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-700 text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaUserGraduate className="text-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-green-50 rounded-lg p-6 shadow-md relative flex flex-col justify-between overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-full h-full opacity-10"
            >
              <defs>
                <pattern
                  id="lines"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="20"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lines)" />
            </svg>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-white p-2 shadow-sm">
            <img
              src="/r-course.png"
              alt="Badge"
              className="w-10 h-10 object-cover"
            />
          </div>

          {/* Organizational Label */}
          <p className="text-sm text-gray-700 font-medium mb-4">
            Course Catalog
          </p>

          {/* Title */}
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            🎓 View All Courses
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-700 text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">⭐⭐⭐</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaUserGraduate className="text-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* Section 4 - Growth Chart */}
        <motion.div
          className="bg-white p-5 rounded-lg row-span-2 shadow-lg flex flex-col items-center cursor-pointer"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/dashboard/section1" className="w-full h-full">
            {/* <SalesChart /> */}
            <h2 className="text-gray-600 text-lg md:text-3xl font-semibold">
              Courses
            </h2>
            <GrowthChart />
          </Link>
        </motion.div>

        {/* section 5 */}
        <motion.div
          className="bg-gray-700 rounded-lg col-span-3 row-span-2 flex flex-col items-center justify-center text-white font-bold w-full h-full"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/section1" className="w-full h-full">
            <SalesChart />
          </Link>
        </motion.div>

        {/* section 3 */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/section3">3</Link>
        </motion.div>
        <motion.div
          className="bg-gray-700 p-6 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/section4">4</Link>
        </motion.div>
        <motion.div
          className="bg-gray-700 p-6 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/section5">5</Link>
        </motion.div>
        <motion.div
          className="bg-gray-700 p-6 rounded-lg col-span-2 flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/section6">6</Link>
        </motion.div>
      </motion.div>

      {/* Nested Routes */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeDashboard;
