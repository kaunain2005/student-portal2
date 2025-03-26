import React, { useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const AddCourse = () => {
  const [docFile, setDocFile] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setDocFile(e.target.files[0]);
  };

  const uploadDocument = async () => {
    if (!docFile) return alert("Please upload a document.");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", docFile);

    try {
      // Assuming Gemini API is available at this endpoint
      const response = await axios.post("https://gemini-api.com/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCourseData(response.data); // JSON with title, description, dates, etc.
    } catch (error) {
      console.error("Error analyzing document:", error);
      alert("Failed to analyze the document.");
    } finally {
      setLoading(false);
    }
  };

  const addCourseToDB = async () => {
    try {
      await axios.post("/api/addcourses", courseData);
      alert("Course added successfully!");
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add course.");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Add Course</h1>
      <div className="bg-white shadow-md p-6 rounded-md">
        <input
          type="file"
          accept=".doc,.docx"
          onChange={handleFileChange}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={uploadDocument}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>
      </div>

      {courseData && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Generated Course Details</h2>
          <CourseCard
            title={courseData.title}
            description={courseData.description}
            image={courseData.image}
            enrollHandler={() => alert("This is a preview!")}
          />
          <button
            onClick={addCourseToDB}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
          >
            Add Course
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
