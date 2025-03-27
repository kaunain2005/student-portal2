import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCarousel from "../../components/HomeSections/CourseCarousel";

const DeleteCoursePage = () => {
  return (
    <CourseCarousel
  buttonText="Delete Course"
  onButtonClick={(course, buttonText) => {
    console.log(`${buttonText} triggered for`, course);
  }}
  modalContent={<p>Are you sure you want to delete this course?</p>}
/>

  );
};

export default DeleteCoursePage;
