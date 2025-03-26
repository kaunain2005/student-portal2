import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCarousel from "../../components/HomeSections/CourseCarousel";

const UpdateCoursePage = () => {
  return (
    <CourseCarousel
      buttonText="Enroll Now"
      onButtonClick={(course) => {
        console.log("Enroll clicked for", course);
      }}
    />
  );
};

export default UpdateCoursePage;
