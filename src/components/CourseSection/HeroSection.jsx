import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] bg-white text-black flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Particles */}
      {Array.from({ length: 18 }).map((_, index) => {
        const size = Math.random() * 20 + 2; // Generates a size between 2px and 6px
        return (
          <motion.div
            key={index}
            className="absolute bg-black rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3, // Different speed for each particle
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 z-10"
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Explore Our Courses
        </h1>
        <p className="text-lg text-gray-700 drop-shadow-md">
          Learn from the best instructors
        </p>
      </motion.div>

      {/* SVG Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="#000000"
            fillOpacity="1"
            d="M0,224L80,208C160,192,320,160,480,181.3C640,203,800,277,960,293.3C1120,309,1280,267,1360,245.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            animate={{
              d: [
                "M0,224L80,208C160,192,320,160,480,181.3C640,203,800,277,960,293.3C1120,309,1280,267,1360,245.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
                "M0,240L80,229.3C160,219,320,197,480,202.7C640,208,800,240,960,229.3C1120,219,1280,165,1360,138.7L1440,112L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
