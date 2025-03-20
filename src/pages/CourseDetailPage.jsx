import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!course) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6"
    >
      <img src={course.image} alt={course.title} className="w-full h-60 object-cover rounded-md" />
      <h2 className="text-3xl font-bold mt-4">{course.title}</h2>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
        Enroll Now
      </button>
    </motion.div>
  );
};

export default CourseDetailPage;
