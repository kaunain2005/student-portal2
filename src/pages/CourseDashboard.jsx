import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import SalesChart from "../components/charts/SalesChart";
import StatsCard from "../components/dashboard/StatsCard";
import { FaCheckCircle, FaTimesCircle, FaUserGraduate } from "react-icons/fa";
import GrowthChart from "../components/dashboard/GrowthChart";

const cardsData = [
  {
    id: 1,
    bgColor: "bg-white",
    borderColor: "border-indigo-600",
    textColor: "text-violet-800",
    pattern: {
      id: "dots",
      type: "circle",
      attrs: { cx: 4, cy: 4, r: 2 },
    },
    badgeSrc: "/c-icon.png",
    label: "Wisdom Academy",
    title: "➕ Add Course",
    rating: "⭐⭐⭐",
    link: "/dashboard/course-dashboard/add-course",
  },
  {
    id: 2,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-600",
    textColor: "text-blue-800",
    pattern: {
      id: "circle",
      type: "circle",
      attrs: { cx: 400, cy: 200, r: 180 },
    },
    badgeSrc: "/u-course.png",
    label: "Learning Center",
    title: "📚 Update Course",
    rating: "⭐⭐⭐⭐",
    link: "/dashboard/course-dashboard/update-course",
  },
  {
    id: 3,
    bgColor: "bg-green-50",
    borderColor: "border-green-600",
    textColor: "text-green-800",
    pattern: {
      id: "lines",
      type: "line",
      attrs: { x1: 0, y1: 10, x2: 20, y2: 10 },
    },
    badgeSrc: "/r-course.png",
    label: "Course Catalog",
    title: "🎓 Delete Courses",
    rating: "⭐⭐⭐",
    link: "/dashboard/course-dashboard/delete-course",
  },
];

const HomeDashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-900 p-6 pt-15">
      {/* Grid Layout */}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 0.95 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {cardsData.map((card) => (
          <Link to={card.link} key={card.id} className="block h-full">
            <motion.div
              className={`${card.bgColor} ${card.borderColor} rounded-lg p-6 shadow-md relative flex flex-col justify-between overflow-hidden h-full ${card.borderColor ? "border-l-4" : ""}`}
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
                      id={card.pattern.id}
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      {card.pattern.type === "circle" && (
                        <circle {...card.pattern.attrs} fill="currentColor" />
                      )}
                      {card.pattern.type === "line" && (
                        <line {...card.pattern.attrs} stroke="currentColor" strokeWidth="1" />
                      )}
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#${card.pattern.id})`} />
                </svg>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
                <img
                  src={card.badgeSrc}
                  alt="Badge"
                  className="w-10 h-10 object-cover"
                />
              </div>

              {/* Organizational Label */}
              <p className="text-sm text-gray-700 font-medium mb-4">{card.label}</p>

              {/* Title */}
              <h2 className={`text-xl md:text-2xl font-bold ${card.textColor} my-8`}>{card.title}</h2>

              {/* Stats */}
              <div className="flex items-center justify-between text-gray-700 text-md">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">{card.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaUserGraduate className="text-gray-500" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}

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
