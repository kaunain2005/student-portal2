import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CourseGallery() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/allcourses")
      .then((response) => response.json())
      .then((data) => {
        // Sort courses by start date (most recent first) and take the top 3
        const sortedCourses = data
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .slice(0, 3);
        setCourses(sortedCourses);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-20 bg-black">
      <h2 className="text-3xl text-white font-bold text-center mb-15">
        🚀 Explore & Level Up: Our Top Courses 🎯📚
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
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
                // Skeleton Placeholder
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
                // Actual Course Data
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
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                      Enroll Now
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
