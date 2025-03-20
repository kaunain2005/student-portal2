import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const StudyLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {/* Book Animation */}
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="text-6xl"
      >
        <FaBookOpen />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-4 text-lg font-semibold"
      >
        Loading Knowledge...
      </motion.p>
    </div>
  );
};

export default StudyLoader;
