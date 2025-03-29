import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    duration: "",
    startDate: "",
    endDate: "",
    fullInfo: "",
    modules: [],
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/allcourses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      image: course.image,
      duration: course.duration,
      startDate: new Date(course.startDate).toISOString().slice(0, 10),
      endDate: new Date(course.endDate).toISOString().slice(0, 10),
      fullInfo: course.fullInfo || "",
      modules: course.modules || [],
    });
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...formData.modules];
    updatedModules[index][field] = value;
    setFormData({ ...formData, modules: updatedModules });
  };

  const handleAddModule = () => {
    setFormData((prevState) => ({
      ...prevState,
      modules: [...prevState.modules, { title: "", content: "" }],
    }));
  };

  const handleRemoveModule = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      modules: prevState.modules.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/updatecourses/${selectedCourse._id}`,
        formData
      );
      alert("Course updated successfully!");
      fetchCourses();
      setSelectedCourse(null);
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update course.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-15">
      <h1 className="text-2xl font-bold mb-4">Update Course</h1>
      {selectedCourse ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-4">Edit Course: {selectedCourse.title}</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Duration</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <h3 className="text-lg font-bold mb-2">Modules</h3>
          {formData.modules.map((module, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <label className="block text-gray-700">Module Title</label>
              <input
                type="text"
                value={module.title}
                onChange={(e) => handleModuleChange(index, "title", e.target.value)}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <label className="block text-gray-700">Content</label>
              <textarea
                value={module.content}
                onChange={(e) => handleModuleChange(index, "content", e.target.value)}
                className="w-full p-2 border rounded"
                required
              ></textarea>
              <button
                type="button"
                onClick={() => handleRemoveModule(index)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
              >
                Remove Module
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddModule}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Module
          </button>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update Course
            </button>
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-4">Select a Course to Update</h2>
          <ul>
            {courses.map((course) => (
              <li
                key={course._id}
                className="p-4 border rounded mb-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectCourse(course)}
              >
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UpdateCoursePage;
