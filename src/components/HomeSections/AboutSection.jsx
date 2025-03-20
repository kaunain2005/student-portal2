import { motion } from "framer-motion";
import CodingIllustration from "../../assets/undraw_coding_joxb.svg";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gray-200">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-4">
          Wisdom Academy offers interactive courses to help you master modern technology with hands-on learning.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <img src={CodingIllustration} alt="About Us" className="w-[80%] md:w-[60%]" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
