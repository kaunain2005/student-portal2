import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {
  const { id } = useParams(); // Get course ID from the URL
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(null); // Track the active module to allow only one open at a time

  useEffect(() => {
    alert(id); // Debugging the course ID
    axios.get(`http://localhost:5000/api/course/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course:', error);
      });
  }, [id]);

  // Handle the loading state
  if (!course) return <div>Loading...</div>;

  // Toggle active module (close the open module when another is clicked)
  const handleModuleToggle = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId); // Toggle visibility of the clicked module
  };

  return (
    <div className="course-detail max-w-4xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-5">{course.title}</h1>

      {/* Course Image */}
      <div className="text-center mb-5">
        <img
          src={course.image}
          alt={course.title}
          className="w-1/2 mx-auto rounded-lg shadow-md"
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
          <strong>Start Date:</strong> {new Date(course.startDate).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-700">
          <strong>End Date:</strong> {new Date(course.endDate).toLocaleDateString()}
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
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-2">Modules</h2>
        <ul className="space-y-4">
          {course.modules.map((module) => (
            <li key={module._id} className="border-b border-x pb-2 px-5">
              {/* Module Title */}
              <button
                onClick={() => handleModuleToggle(module._id)}
                className="w-full flex justify-between text-left font-semibold text-lg text-gray-800 focus:outline-none"
              >
                {module.title}
                <span>🔻</span>
              </button>

              {/* Module Content - Animated dropdown */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeModule === module._id ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {activeModule === module._id && (
                  <div className="mt-2 text-gray-700">
                    <p>{module.content}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailPage;
