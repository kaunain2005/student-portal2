import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import SalesChart from "../components/charts/SalesChart";
import StatsCard from "../components/dashboard/StatsCard";
import { FaCheckCircle, FaTimesCircle, FaUserGraduate } from "react-icons/fa";
import GrowthChart from "../components/dashboard/GrowthChart";

const Dashboard = () => {
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
          className="bg-gray-700 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/total-students" className="w-full h-full">
            <StatsCard
              title="Total Students"
              value="19,626"
              percentage={12}
              icon={<FaUserGraduate className="text-yellow-500 text-2xl" />}
              color="border-yellow-500"
            />
          </Link>
        </motion.div>

        {/* Present Students */}
        <motion.div
          className="bg-gray-700 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/present-students" className="w-full h-full">
            <StatsCard
              title="Total Present"
              value="3,290"
              percentage={-3}
              icon={<FaCheckCircle className="text-green-500 text-2xl" />}
              color="border-green-500"
            />
          </Link>
        </motion.div>

        {/* Absent Students */}
        <motion.div
          className="bg-gray-700 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/dashboard/absent-students" className="w-full h-full">
            <StatsCard
              title="Total Absent"
              value="322"
              percentage={2}
              icon={<FaTimesCircle className="text-blue-500 text-2xl" />}
              color="border-blue-500"
            />
          </Link>
        </motion.div>

        {/* Section 4 - Growth Chart */}
        <motion.div
          className="bg-white p-5 rounded-lg row-span-3 shadow-lg flex flex-col items-center"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/dashboard/section1" className=" flex flex-col text-center w-full h-full align-middle">
          <h2 className="text-gray-600 text-lg font-semibold">Courses</h2>
          <p className="text-sm text-gray-400">Insights</p>

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

export default Dashboard;
