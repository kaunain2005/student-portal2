import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteCourse = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/allcourses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`/api/deletecourses/${id}`);
      alert("Course deleted successfully!");
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Delete Course</h1>
      {courses.map((course) => (
        <div key={course._id} className="bg-white shadow-md p-4 rounded-md mb-4">
          <h2 className="font-bold text-gray-800">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <button
            onClick={() => deleteCourse(course._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCourse;
