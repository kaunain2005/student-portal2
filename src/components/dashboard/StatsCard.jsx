import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ title, value, percentage, icon, color }) => {
  return (
    <motion.div
      className={`bg-white w-full h-full rounded-lg p-5 shadow-lg flex items-center space-x-4 border-l-4 ${color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <motion.div
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100"
        whileHover={{ rotate: 10 }}
      >
        {icon}
      </motion.div>

      {/* Text Content */}
      <div>
        <motion.h2
          className="text-gray-600 text-lg font-semibold"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h2>
        <motion.p className="text-2xl text-zinc-600 font-bold" whileHover={{ scale: 1.02 }}>
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StatsCard;
