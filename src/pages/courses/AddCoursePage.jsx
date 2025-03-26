import React, { useState } from "react";
import axios from "axios";
import Toast from "../../components/CourseSection/courseDashboard/Toast";

const AddCoursePage = () => {
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleFileUpload = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleExtractContent = async () => {
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post("/api/extract-content", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCourse(data); // Data includes title, description, etc.
    } catch (error) {
      console.error("Error extracting content:", error);
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post("/api/addcourses", course);
      setShowToast(true);
      setCourse(null); // Reset after successful submission
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="p-6 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Add Course</h1>

      <input
        type="file"
        onChange={handleFileUpload}
        className="block mb-4 border rounded px-4 py-2"
      />
      <button
        onClick={handleExtractContent}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Extract Content
      </button>

      {course && (
        <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
          <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <button
            onClick={handleAddCourse}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Add Course
          </button>
        </div>
      )}

      {showToast && (
        <Toast
          message="Course added successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default AddCoursePage;
