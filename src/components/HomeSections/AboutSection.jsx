import React from "react";
import { motion } from "framer-motion";

// Example SVG icon for info items
const DarkInfoIcon = () => (
  <svg
    className="w-16 h-16 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" 
    />
  </svg>
);

// Decorative SVG - Top Left
const TopLeftSVG = () => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
    whileInView={{ opacity: 0.08, scale: 1.4, rotate: -30 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="absolute top-5 left-5 w-48 h-48"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    fill="#fff"
  >
    <path d="M100 10L20 190h160L100 10z" />
  </motion.svg>
);

// Decorative SVG - Bottom Left (unchanged)
const BottomLeftSVG = () => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
    whileInView={{ opacity: 0.05, scale: 1.2, rotate: -45 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="absolute bottom-10 left-10 w-48 h-48"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    fill="#fff"
  >
    <circle cx="100" cy="100" r="100" />
  </motion.svg>
);

// Decorative SVG - Bottom Right
const BottomRightSVG = () => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
    whileInView={{ opacity: 0.06, scale: 1.3, rotate: 30 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="absolute bottom-10 right-10 w-40 h-40"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    fill="#fff"
  >
    <path d="M50 50h100v100H50z" />
  </motion.svg>
);

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-800 to-black py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Decorative SVG Elements */}
      <TopLeftSVG />
      <BottomLeftSVG />
      <BottomRightSVG />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl font-bold text-white mb-4 cursor-pointer hover:scale-105 transition-transform">
          About Our Academy
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We are passionate about transforming education with innovative,
          interactive, and engaging content that prepares you for a digital future.
        </p>
      </motion.div>

      {/* Info Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Mission Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-gray-900 p-8 rounded-xl shadow-xl cursor-pointer"
        >
          <DarkInfoIcon />
          <h3 className="text-2xl font-bold text-blue-400 mt-4 mb-2">Our Mission</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Interactive, project-based learning</li>
            <li>State-of-the-art technology</li>
            <li>Empowering future leaders</li>
          </ul>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-gray-900 p-8 rounded-xl shadow-xl cursor-pointer"
          transition={{ delay: 0.2 }}
        >
          <DarkInfoIcon />
          <h3 className="text-2xl font-bold text-blue-400 mt-4 mb-2">Our Vision</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Innovate educational experiences</li>
            <li>Build a thriving community</li>
            <li>Lead with creativity and purpose</li>
          </ul>
        </motion.div>

        {/* Values Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-gray-900 p-8 rounded-xl shadow-xl cursor-pointer"
          transition={{ delay: 0.4 }}
        >
          <DarkInfoIcon />
          <h3 className="text-2xl font-bold text-blue-400 mt-4 mb-2">Our Values</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Integrity and accountability</li>
            <li>Diversity and inclusivity</li>
            <li>Continuous growth and innovation</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Additional Info with Scroll Interaction */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center mt-16"
      >
        <p className="text-lg text-gray-300">
          Our academy is built on the principles of innovation, excellence, and
          integrity. Join us to unlock your potential and transform your future.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
