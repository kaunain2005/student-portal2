import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const DeleteCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [deletedCourses, setDeletedCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/allcourses");
      const allCourses = response.data;
      setCourses(allCourses.filter((course) => !course.courseDeleted));
      setDeletedCourses(allCourses.filter((course) => course.courseDeleted));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      const deleteDate = new Date().toISOString();
      await axios.put(`http://localhost:5000/api/updatecourses/${courseId}`, {
        courseDeleted: true,
        deleteDate,
      });
      alert("Course marked as deleted!");
      fetchCourses();
    } catch (error) {
      console.error("Error marking course as deleted:", error);
      alert("Failed to mark course as deleted.");
    }
  };

  const handleRestoreCourse = async (courseId) => {
    try {
      await axios.put(`http://localhost:5000/api/updatecourses/${courseId}`, {
        courseDeleted: false,
        deleteDate: null,
      });
      alert("Course restored successfully!");
      fetchCourses();
    } catch (error) {
      console.error("Error restoring course:", error);
      alert("Failed to restore course.");
    }
  };

  return (
    <div className="container mx-auto p-20 bg-black">
      <h2 className="text-3xl text-white font-bold text-center mb-15">
        Manage Courses
      </h2>

      {/* Active Courses */}
      <h3 className="text-2xl text-white font-bold mb-8">Active Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <motion.div
              key={course._id || index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 20px rgba(71, 72, 237, 1)",
              }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-1 border-1 border-white"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <p className="text-indigo-600 font-semibold mb-2">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-500 mb-4">
                  {new Date(course.startDate).toLocaleDateString()} -{" "}
                  {new Date(course.endDate).toLocaleDateString()}
                </p>
                <motion.button
                  onClick={() => handleDeleteCourse(course._id)}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg transition hover:bg-red-700"
                >
                  Mark as Delete
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No active courses available.
          </p>
        )}
      </div>

      {/* Deleted Courses */}
      <h3 className="text-2xl text-white font-bold mb-8">Deleted Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deletedCourses.length > 0 ? (
          deletedCourses.map((course, index) => (
            <motion.div
              key={course._id || index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.7)",
              }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-1 border-1 border-red-500"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1 }}
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <p className="text-indigo-600 font-semibold mb-2">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-500 mb-4">
                  {new Date(course.startDate).toLocaleDateString()} -{" "}
                  {new Date(course.endDate).toLocaleDateString()}
                </p>
                <p className="text-red-600 font-bold mb-2">Deleted</p>
                <p className="text-gray-500 mb-4">
                  Deleted on:{" "}
                  {course.deleteDate
                    ? new Date(course.deleteDate).toLocaleDateString()
                    : "Unknown"}
                </p>
                <motion.button
                  onClick={() => handleRestoreCourse(course._id)}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg transition hover:bg-green-700"
                >
                  Restore Course
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No deleted courses available.
          </p>
        )}
      </div>
    </div>
  );
};

export default DeleteCoursePage;
