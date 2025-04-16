import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import StudentChart from "../components/charts/SalesChart";
import StatsCard from "../components/dashboard/StatsCard";
import { FaCheckCircle, FaTimesCircle, FaUserGraduate } from "react-icons/fa";
import GrowthChart from "../components/dashboard/GrowthChart";

import Footer from "../components/Footer";

const Dashboard = () => {
  const [studentCount, setStudentCount] = useState(0);
  
  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/student-count");
        alert("Student count response:", response.data);
        setStudentCount(response.data.totalStudents);
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };
  
    fetchStudentCount();
  });
  
  return (
    <>
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
                value={studentCount.toLocaleString()}
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

          {/* Present Time */}
          <motion.div
            className="bg-gray-700 rounded-lg flex items-center justify-center text-white text-xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/dashboard/present-students" className="w-full h-full">
              <StatsCard
                title="Total Present"
                value="3,290"
                percentage={-3}
                icon={<FaTimesCircle className="text-green-500 text-2xl" />}
                color="border-green-500"
              />
            </Link>
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
            <Link to="/dashboard/course-dashboard" className="w-full h-full">
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
              <StudentChart />
            </Link>
          </motion.div>

          {/* section 3 */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg flex items-center justify-center text-white text-xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/dashboard/section3">3</Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
