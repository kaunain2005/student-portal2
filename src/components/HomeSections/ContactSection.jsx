import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 py-40">
      {/* Outer Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          boxShadow: "0px 0px 20px rgba(37, 99, 235, 1)", // Teal glow effect
        }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-blue-600 to-blue-500 p-[2px] rounded-2xl w-full max-w-lg"
      >
        {/* Inner Card */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 rounded-2xl p-5 sm:p-12"
        >
          <motion.h2
          whileHover={{
            textShadow: "0px 0px 20px rgba(37, 99, 235, 0.8)", // Teal glow effect
          }}
           className="text-center text-blue-500 text-2xl font-bold mb-6">
            Get In Touch
          </motion.h2>

          <form className="flex flex-col gap-4">
            {/* Name Input */}
            <div className="flex items-center bg-gray-800 text-white font-bold p-3 rounded-lg shadow-inner">
              <input
                type="text"
                placeholder="Name"
                required
                className="bg-transparent border-none outline-none w-full text-blue-300 px-2"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center bg-gray-800 text-whitw font-bold p-3 rounded-lg shadow-inner">
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-transparent border-none outline-none w-full text-blue-300 px-2"
              />
            </div>

            {/* Subject Input */}
            <div className="flex items-center bg-gray-800 text-whitw font-bold p-3 rounded-lg shadow-inner">
              <input
                type="text"
                placeholder="Subject"
                required
                className="bg-transparent border-none outline-none w-full text-blue-300 px-2"
              />
            </div>

            {/* Message Input */}
            <div className="bg-gray-800 text-white font-bold p-3 rounded-lg shadow-inner">
              <textarea
                placeholder="Message"
                required
                rows="3"
                className="bg-transparent border-none outline-none w-full text-blue-300 px-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 0.99, boxShadow: "0px 0px 10px rgba(20, 184, 166, 0.8)" }}
              whileTap={{ scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent text-blue-400 border border-blue-400 rounded-lg p-3 font-bold hover:bg-blue-700 hover:text-white  transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
