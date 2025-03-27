import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCarousel from "../../components/HomeSections/CourseCarousel";

const UpdateCoursePage = () => {
  return (
    <CourseCarousel
      buttonText="Update Course"
      onButtonClick={(course, buttonText) => {
        console.log(`${buttonText} triggered for`, course);
      }}
      modalContent={<p>Are you sure you want to update this course?</p>}
    />
  );
};

export default UpdateCoursePage;
