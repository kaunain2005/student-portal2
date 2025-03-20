import React from "react";
import { motion } from "framer-motion";

const UICard = () => {
  return (
    <div className="relative w-60 h-80 bg-transparent shadow-lg rounded-2xl overflow-hidden mx-auto">
      {/* Background Animation using Framer Motion */}
      <motion.div
        className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-1/2 -mt-1/2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Card Content */}
      <div className="absolute top-24 left-0 right-0 text-center text-white font-semibold text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-12 mx-auto mb-2"
        >
          <path
            fill="currentColor"
            d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674..."
          ></path>
        </svg>
        UI / EX Designer
        <div className="text-sm font-light mt-1 lowercase">MikeAndrewDesigner</div>
      </div>
    </div>
  );
};

export default UICard;
