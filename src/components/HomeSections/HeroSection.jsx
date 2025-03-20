// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";
import GradientButton from "../ui/GradientButton";

const HeroSection = () => {
  const sentence = "Welcome to Wisdom Academy";

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-black text-white bg-[url('/bg-img2.png')] bg-cover bg-center bg-no-repeat">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content (Ensuring It Stays Above the Overlay) */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="relative text-3xl sm:mt-25 md:mt-0 font-semibold z-10"
      >
        {sentence.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-5xl md:text-6xl font-semibold"
          >
            {char}
          </motion.span>
        ))}
        <motion.div className="my-5 text-xl md:text-2xl">
          {/* Animated Text */}
          <Typewriter
            words={[
              "Expand your knowledge with expert-led courses.",
              "Unlock the power of wisdom through learning.",
              "Enroll in top courses and shape your future.",
              "Master new skills with interactive lessons.",
              "Empower your mind with lifelong learning.",
              "Transform education into your superpower.",
              "Discover, learn, and grow every day.",
            ]}
            loop={0} // Infinite Loop
            cursor
            cursorStyle="🖋️"
            typeSpeed={60} // Typing speed
            deleteSpeed={40} // Deleting speed
            delaySpeed={1000} // Delay before deleting
          />
        </motion.div>

        <motion.div>
          <GradientButton />
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative md:w-1/2 flex justify-center mt-10 md:mt-0 z-10  sm:hidden"
      >
        <img
          src="heroImage.png"
          alt="Hero"
          className="w-[70%] md:w-[100%] rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
