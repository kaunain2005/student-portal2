// src/components/FeaturesSection.jsx
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="py-16 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-700">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">Interactive Courses</h3>
          <p className="text-gray-600 mt-2">Engage with structured courses designed for easy learning.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">Real-time Quizzes</h3>
          <p className="text-gray-600 mt-2">Participate in live quizzes and track your progress.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">Profile Management</h3>
          <p className="text-gray-600 mt-2">Keep your personal details updated and track your learning.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;