import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Example SVG icon for information
const InfoIcon = () => (
  <svg
    className="w-16 h-16 text-indigo-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"></path>
  </svg>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with background image and overlay */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url("/aboutbg.jpeg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl font-bold text-white mb-4">About Our Academy</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We are committed to empowering students and educators through innovation,
            technology, and a passion for excellence.
          </p>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Mission</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our mission is to provide an innovative, inclusive, and transformative
            learning environment that equips every student with the skills they need
            to excel in a rapidly changing world.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/3 p-4"
            >
              <div className="bg-indigo-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <InfoIcon />
                <h3 className="text-2xl font-bold text-indigo-600 mt-4 mb-2">Innovation</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Cutting-edge technology</li>
                  <li>Creative curriculum</li>
                  <li>Future-ready skills</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/3 p-4"
              transition={{ delay: 0.2 }}
            >
              <div className="bg-indigo-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <InfoIcon />
                <h3 className="text-2xl font-bold text-indigo-600 mt-4 mb-2">Excellence</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>High academic standards</li>
                  <li>Continuous improvement</li>
                  <li>Quality education</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/3 p-4"
              transition={{ delay: 0.4 }}
            >
              <div className="bg-indigo-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <InfoIcon />
                <h3 className="text-2xl font-bold text-indigo-600 mt-4 mb-2">Integrity</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Ethical practices</li>
                  <li>Transparent methods</li>
                  <li>Trust and accountability</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the dedicated professionals behind our academy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src="/images/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Alice Johnson</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </motion.div>
            {/* Team Member 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src="/images/team2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Bob Smith</h3>
              <p className="text-gray-600">CTO</p>
            </motion.div>
            {/* Team Member 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src="/images/team3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Carol White</h3>
              <p className="text-gray-600">Lead Designer</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
              <li>Commitment to student success</li>
              <li>Innovation in teaching and learning</li>
              <li>Integrity and transparency</li>
              <li>Inclusivity and diversity</li>
              <li>Continuous improvement and growth</li>
            </ul>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
