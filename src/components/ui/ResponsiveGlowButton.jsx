import { motion } from "framer-motion";

export default function ResponsiveGlowButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        textShadow: "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff",
        boxShadow:
          "0 0 5px #40B0D8, 0 0 20px #40B0D8, 0 0 50px #40B0D8, 0 0 100px #40B0D8",
      }}
      transition={{ duration: 0.3 }}
      className="w-full sm:w-auto px-6 py-3 sm:px-4 sm:py-2 uppercase rounded-md text-base sm:text-lg font-medium text-white/50 bg-transparent border border-white/50 transition-all duration-500 hover:text-white hover:bg-[#40B0D8] hover:border-[#008cff] focus:outline-none"
    >
      Button
    </motion.button>
  );
}
