import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const CourseDetailPage = () => {
  const { id } = useParams(); // Get course ID from the URL
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(null); // Track the active module to allow only one open at a time

  useEffect(() => {
    // alert(id); // Debugging the course ID
    axios
      .get(`http://localhost:5000/api/course/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
      });
  }, [id]);

  // Handle the loading state
  if (!course) return <div>Loading...</div>;

  // Toggle active module (close the open module when another is clicked)
  const handleModuleToggle = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId); // Toggle visibility of the clicked module
  };

  return (
    <>
    <div className="course-detail max-w-4xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-5">{course.title}</h1>

      {/* Course Image */}
      <div className="text-center mb-5">
        <img
          src={course.image}
          alt={course.title}
          className="w-1/3 mx-auto rounded-lg shadow-md"
        />
      </div>

      {/* Course Description */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold mb-2">Course Description</h2>
        <p className="text-lg text-gray-700">{course.description}</p>
      </div>

      {/* Course Duration */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-2">Duration</h2>
        <p className="text-lg text-gray-700">{course.duration}</p>
      </div>

      {/* Course Start and End Dates */}
      <div className="mb-5">
        <p className="text-lg text-gray-700">
          <strong>Start Date:</strong>{" "}
          {new Date(course.startDate).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-700">
          <strong>End Date:</strong>{" "}
          {new Date(course.endDate).toLocaleDateString()}
        </p>
      </div>

      {/* Full Course Information */}
      {course.fullInfo && (
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">Course Information</h2>
          <p className="text-lg text-gray-700">{course.fullInfo}</p>
        </div>
      )}

      {/* Course Modules - Dropdown View with Animation */}
      <div id="accordion-collapse" data-accordion="collapse" className="mb-5">
        <h2 className="text-xl font-semibold mb-4">Modules</h2>
        {course.modules.map((module) => (
          <div key={module._id}>
            <h2 id={`accordion-heading-${module._id}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 mt-3 font-medium text-gray-900 border rounded-t-2xl focus:ring-4 dark:border-gray-700 hover:bg-gray-100 gap-3 transition-transform duration-3000 ease-linear"
                onClick={() => handleModuleToggle(module._id)}
                aria-expanded={activeModule === module._id}
                aria-controls={`accordion-body-${module._id}`}
              >
                <span>{module.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transform transition-transform duration-1000 ${
                    activeModule === module._id ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            <div
              id={`accordion-body-${module._id}`}
              className={`transition-all duration-3000 ease-linear overflow-hidden border rounded-b-2xl ${
                activeModule === module._id ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby={`accordion-heading-${module._id}`}
            >
              {activeModule === module._id && (
                <div className="transition-all duration-1000 ease-linear p-5 dark:bg-gray-300">
                  <p className="mb-2 text-gray-700">
                    {module.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default CourseDetailPage;
