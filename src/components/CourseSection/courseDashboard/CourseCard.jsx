import React from "react";

const CourseCard = ({ title, description, image, enrollHandler }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button
        onClick={enrollHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;
