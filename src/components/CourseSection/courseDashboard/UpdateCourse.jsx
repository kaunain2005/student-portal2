import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateCourse = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/allcourses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const updateCourse = async () => {
    try {
      await axios.put(`/api/updatecourses/${editingCourse._id}`, editingCourse);
      alert("Course updated successfully!");
      fetchCourses();
      setEditingCourse(null);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Update Course</h1>
      {courses.map((course) => (
        <div key={course._id} className="bg-white shadow-md p-4 rounded-md mb-4">
          <h2 className="font-bold text-gray-800">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <button
            onClick={() => setEditingCourse(course)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      ))}

      {editingCourse && (
        <div className="mt-6">
          <input
            type="text"
            value={editingCourse.title}
            onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
            className="border p-2 rounded w-full mb-4"
          />
          <textarea
            value={editingCourse.description}
            onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
            className="border p-2 rounded w-full mb-4"
          />
          <button
            onClick={updateCourse}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateCourse;
