import React, { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";

const UpdateCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/allcourses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/updatecourses/${selectedCourse._id}`, selectedCourse);
      setShowToast(true);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Update Course</h1>

      <select
        className="block mb-4 border rounded px-4 py-2"
        onChange={(e) =>
          setSelectedCourse(
            courses.find((course) => course._id === e.target.value)
          )
        }
      >
        <option value="">Select a course to update</option>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>
            {course.title}
          </option>
        ))}
      </select>

      {selectedCourse && (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <input
            type="text"
            value={selectedCourse.title}
            onChange={(e) =>
              setSelectedCourse({ ...selectedCourse, title: e.target.value })
            }
            className="block mb-4 border rounded px-4 py-2"
          />
          <textarea
            value={selectedCourse.description}
            onChange={(e) =>
              setSelectedCourse({ ...selectedCourse, description: e.target.value })
            }
            className="block mb-4 border rounded px-4 py-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update Course
          </button>
        </div>
      )}

      {showToast && (
        <Toast
          message="Course updated successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default UpdateCoursePage;
