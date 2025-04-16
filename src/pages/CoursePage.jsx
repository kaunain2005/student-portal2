import HeroSection from "../components/CourseSection/HeroSection";
import CourseCarousel from "../components/CourseSection/CourseCarousel";
import Footer from "../components/Footer";

const CoursePage = () => {
  return (
    <>
      <HeroSection />
      <CourseCarousel
        buttonText="Enroll Now"
        onButtonClick={(course, buttonText) => {
          console.log(`${buttonText} clicked for`, course);
        }}
      />
      <Footer />
    </>
  );
};

export default CoursePage;
