import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { getUser } from "../../utils/auth";

export default function CourseCarousel({
  fetchTopCourses = false,
  apiUrl,
  buttonText = "Enroll Now", // Default button text for enrollment
  onButtonClick = () => {},
}) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const user = getUser();
  
  // Ensure enrolledIds are stored as strings from user data
  const [enrolledIds, setEnrolledIds] = useState(
    user.enrolledCourses ? user.enrolledCourses.map((id) => id.toString()) : []
  );
  const [confettiCourse, setConfettiCourse] = useState(null);

  useEffect(() => {
    fetch(apiUrl || "http://localhost:5000/api/allcourses")
      .then((response) => response.json())
      .then((data) => {
        const sortedCourses = fetchTopCourses
          ? data
              .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
              .slice(0, 3)
          : data;
        setCourses(sortedCourses);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [fetchTopCourses, apiUrl]);

  // Dynamically set button colors based on text.
  const getButtonColor = (text) => {
    switch (text.toLowerCase()) {
      case "update course":
        return "bg-yellow-600 hover:bg-yellow-700";
      case "delete course":
        return "bg-red-600 hover:bg-red-700";
      case "explore":
        return "bg-blue-600 hover:bg-blue-700";
      default:
        return "bg-indigo-600 hover:bg-indigo-700"; // Default for "Enroll Now"
    }
  };

  // Dynamically set page title based on the button text.
  const getPageTitle = (text) => {
    switch (text.toLowerCase()) {
      case "update course":
        return (
          <>
            <h2 className="text-3xl text-white font-bold text-center mb-5">
              🪄 Update Course
            </h2>
            <hr />
          </>
        );
      case "delete course":
        return (
          <>
            <h2 className="text-3xl text-red-600 font-bold text-center mb-5">
              🗑️ Delete Course
            </h2>
            <hr />
          </>
        );
      case "explore":
        return (
          <>
            <h2 className="text-3xl text-blue-600 font-bold text-center mb-5">
              🔍 Explore Courses
            </h2>
            <hr />
          </>
        );
      case "enroll now":
        return (
          <>
            <h2 className="text-3xl text-blue-600 font-bold text-center mb-5">
              🎓 Discover All Our Courses
            </h2>
            <hr />
          </>
        );
      default:
        return (
          <h2 className="text-3xl text-indigo-600 font-bold text-center mb-15">
            🚀 Explore & Level Up: Our Top Courses 🎯📚
          </h2>
        );
    }
  };

  // Enrollment: POST enroll if not enrolled, DELETE if already enrolled.
  const handleEnroll = async (course) => {
    try {
      // Ensure the user is logged in before allowing enrollment
      if (!user || !user._id) {
        alert("You must be logged in to enroll in a course.");
        return;
      }
  
      // Call the enrollment API
      const res = await axios.post("http://localhost:5000/api/enroll", {
        userId: user._id,
        courseId: course._id,
      });
  
      // Show success message and update local storage
      alert("Enrolled successfully!");
  
      // Update enrolled courses in state
      const updatedUser = res.data.user;
      localStorage.setItem("user", JSON.stringify(updatedUser));
  
      // Update the enrolled IDs list and trigger re-render
      setEnrolledIds(updatedUser.enrolledCourses.map((id) => id.toString()));
  
      // Trigger additional behavior like confetti animation if needed
      setConfettiCourse(course._id.toString());
      
      // Call the onButtonClick callback if needed
      onButtonClick(course, buttonText);
  
      // Clear confetti effect after a short delay
      setTimeout(() => setConfettiCourse(null), 2000);
    } catch (error) {
      console.error("Enrollment failed:", error.response || error);
      alert("Enrollment failed. Please try again.");
    }
  };
  
  

  const handleUnenroll = async (course) => {
    try {
      if (!user || !user._id) {
        alert("You must be logged in to unenroll from a course.");
        return;
      }
      
      const res = await axios.delete("http://localhost:5000/api/enroll", {
        data: { userId: user._id, courseId: course._id },
      });
  
      alert("Unenrolled successfully!");
  
      // Update enrolledIds in state
      const updatedEnrolledIds = enrolledIds.filter(
        (id) => id.toString() !== course._id.toString()
      );
      setEnrolledIds(updatedEnrolledIds);
  
      // Update the user object in localStorage
      const updatedUser = { ...user, enrolledCourses: updatedEnrolledIds };
      localStorage.setItem("user", JSON.stringify(updatedUser));
  
      onButtonClick(course, buttonText);
    } catch (error) {
      console.error("Unenrollment failed:", error.response || error);
      alert("Unenrollment failed. Please try again.");
    }
  };  

  return (
    <div className="container mx-auto p-20 bg-black">
      <h2 className="text-3xl text-white font-bold text-center mb-15">
        {fetchTopCourses
          ? "🚀 Explore & Level Up: Our Top Courses 🎯📚"
          : getPageTitle(buttonText)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(loading || error ? Array(3).fill({}) : courses).map(
          (course, index) => (
            <motion.div
              key={course._id || index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 20px rgba(71, 72, 237, 1)",
              }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-1 border border-white relative"
            >
              {loading || error ? (
                <>
                  <div className="w-full h-48 bg-gray-500 animate-pulse rounded-2xl"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-500 animate-pulse rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-500 animate-pulse rounded w-5/6 mb-2"></div>
                    <div className="h-4 bg-gray-500 animate-pulse rounded w-2/3 mb-2"></div>
                    <div className="h-10 bg-gray-600 animate-pulse rounded w-full mt-4"></div>
                  </div>
                </>
              ) : (
                <>
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileHover={{
                      scale: 1,
                      boxShadow: "0px 0px 20px rgba(71, 72, 237, 1)",
                    }}
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{course.description}</p>
                    <p className="text-indigo-600 font-semibold mb-2">
                      Duration: {course.duration}
                    </p>
                    <p className="text-gray-500 mb-4">
                      {new Date(course.startDate).toLocaleDateString()} -{" "}
                      {new Date(course.endDate).toLocaleDateString()}
                    </p>
                    <div className="flex items-center space-x-3">
                      {enrolledIds.includes(course._id.toString()) ? (
                        <div className="relative inline-block">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg transition"
                            onClick={() => handleUnenroll(course)}
                          >
                            Enrolled
                          </motion.button>
                          <AnimatePresence>
                            {confettiCourse === course._id.toString() && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1.2 }}
                                exit={{ opacity: 0 }}
                                className="absolute -top-3 -right-3"
                              >
                                <div className="text-2xl">🎉</div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.button
                          onClick={() => handleEnroll(course)}
                          whileTap={{ scale: 0.95 }}
                          className={`${getButtonColor(
                            buttonText
                          )} text-white px-4 py-2 rounded-lg transition`}
                        >
                          {buttonText}
                        </motion.button>
                      )}
                      <Link
                        to={`/course/${course._id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
