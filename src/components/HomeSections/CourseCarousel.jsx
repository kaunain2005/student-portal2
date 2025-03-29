import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CourseCarousel({
  fetchTopCourses = false,
  apiUrl,
  buttonText = "Enroll Now", // Default button text
  onButtonClick = () => {}, // Function to handle button actions
}) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  // Dynamically set button colors based on text
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
  // Dynamically set page title based on the button text
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
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-1 border-1 border-white"
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
                    <button
                      onClick={() => onButtonClick(course, buttonText)}
                      className={`${getButtonColor(
                        buttonText
                      )} text-white px-4 py-2 rounded-lg transition`}
                    >
                      {buttonText}
                    </button>
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
