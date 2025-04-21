import React, { useState } from "react";
import axios from "axios";

const AddCoursePage = () => {
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
      await axios.post("http://localhost:5000/api/addcourses", formData);
      alert("Course added successfully!");
      // Clear form
      setFormData({
        title: "",
        description: "",
        image: "",
        duration: "",
        startDate: "",
        endDate: "",
        fullInfo: "",
        modules: [],
      });
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add course.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-15">
      <h1 className="text-2xl font-bold mb-6">Add New Course</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
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
        <div className="mb-4">
          <label className="block text-gray-700">Full Info</label>
          <textarea
            value={formData.fullInfo}
            onChange={(e) => setFormData({ ...formData, fullInfo: e.target.value })}
            className="w-full p-2 border rounded"
          ></textarea>
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
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoursePage;
