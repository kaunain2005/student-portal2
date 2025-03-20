import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/allcourses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-black">
      {courses.length > 0 ? (
        courses.map((course) => <CourseCard key={course._id} course={course} />)
      ) : (
        <p className="text-gray-600 text-center w-full">No courses available</p>
      )}
    </div>
  );
};

export default CourseList;
