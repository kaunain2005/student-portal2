// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HomeSections/HeroSection";
import AboutSection from "../components/HomeSections/AboutSection";
import CourseCarousel from "../components/HomeSections/CourseCarousel";
import TestimonialSection from "../components/HomeSections/TestimonialSection";
import QuizSection from "../components/HomeSections/QuizSection";
import ContactSection from "../components/HomeSections/ContactSection";

import Footer from "../components/Footer";

import ScrollVelocity from '../components/ui/ScrollVelocity'
import UICard from "../components/ui/UICard";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className=" py-10 bg-black border-y-1 border-y-white">
      <ScrollVelocity
        texts={["Wisdome Academy", "Wisdome Academy"]}
        velocity={50}
        className="text-white bg-black py-1"
      />
      </section>
      <AboutSection />
      <CourseCarousel fetchTopCourses={true} />
      <TestimonialSection />
      <QuizSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;