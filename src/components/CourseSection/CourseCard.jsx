import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      className="bg-white shadow-md rounded-xl overflow-hidden transform transition-all duration-300"
    >
      {/* Course Image */}
      <div className="relative w-full h-44 overflow-hidden">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Course Info */}
      <div className="mt-4 p-4">
        <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {course.description.slice(0, 80)}...
        </p>
      </div>

      {/* View Details Button */}
      <Link
        to={`/course/${course._id}`}
        className="m-4  inline-block text-white bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300"
      >
        Explore →
      </Link>
    </motion.div>
  );
};

export default CourseCard;
