import HeroSection from "../components/CourseSection/HeroSection";
import CourseCarousel from "../components/HomeSections/CourseCarousel";

const CoursePage = () => {
  return (
    <div>
      <HeroSection />
      <CourseCarousel
        buttonText="Enroll Now"
        onButtonClick={(course) => {
          console.log("Enroll clicked for", course);
        }}
      />
    </div>
  );
};

export default CoursePage;
