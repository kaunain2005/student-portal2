import HeroSection from "../components/CourseSection/HeroSection";
import CourseCarousel from "../components/HomeSections/CourseCarousel";

const CoursePage = () => {
  return (
    <div>
      <HeroSection />
      <CourseCarousel apiUrl="http://localhost:5000/api/allcourses" />
    </div>
  );
};

export default CoursePage;
