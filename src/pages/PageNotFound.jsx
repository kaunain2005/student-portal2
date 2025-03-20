import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSatellite, FaUserAstronaut, FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      {/* Floating 404 Error Sign */}
      <motion.div
        initial={{ x: -50, y: 50, rotate: -10, opacity: 0 }}
        animate={{ x: 50, y: -50, rotate: 10, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "mirror" }}
        className="absolute text-yellow-400 text-5xl top-1/4 left-1/4"
      >
        <FaExclamationTriangle />
      </motion.div>
      
      {/* Floating Satellite */}
      <motion.div
        initial={{ x: "-10vw", y: "20vh", rotate: 0 }}
        animate={{ x: "110vw", y: "-10vh", rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute text-gray-500 text-6xl"
      >
        <FaSatellite />
      </motion.div>
      
      {/* Floating Astronaut */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "mirror" }}
        className="absolute bottom-20 right-1/4 text-6xl text-white"
      >
        <FaUserAstronaut />
      </motion.div>
      
      {/* 404 Text */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-9xl font-extrabold tracking-wide text-red-500 drop-shadow-lg"
      >
        404
      </motion.h1>
      
      {/* Lost in Space Message */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
        className="text-lg mt-10 mb-10 text-gray-300"
      >
        Oops! Looks like you’re lost in space.
      </motion.p>
      
      {/* Floating Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 200 - 100 }}
            animate={{ opacity: 1, y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: Math.random() * 3 + 2 }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>
      
      {/* Home Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          to="/"
          className="mt-6 px-6 py-3 text-lg font-semibold bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
