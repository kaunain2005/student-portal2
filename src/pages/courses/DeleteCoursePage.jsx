import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/CourseSection/courseDashboard/Modal";
import Toast from "../../components/CourseSection/courseDashboard/Toast";

const DeleteCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/allcourses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/deletecourses/${selectedCourse._id}`);
      setCourses(courses.filter((course) => course._id !== selectedCourse._id));
      setShowModal(false);
      setShowToast(true);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Delete Course</h1>

      <ul className="space-y-4">
        {courses.map((course) => (
          <li
            key={course._id}
            className="bg-gray-100 p-4 rounded shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
            <button
              onClick={() => {
                setSelectedCourse(course);
                setShowModal(true);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Confirm Deletion"
        onConfirm={handleDelete}
      >
        Are you sure you want to delete "{selectedCourse?.title}"?
      </Modal>

      {showToast && (
        <Toast
          message="Course deleted successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default DeleteCoursePage;
