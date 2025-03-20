import { FaInstagram, FaLinkedin, FaTwitter, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80">
        <svg
          className="absolute bottom-0 left-0 w-full h-100"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,64C560,64,640,64,720,74.7C800,85,880,107,960,106.7C1040,107,1120,85,1200,64L1200,120L0,120Z"
            fill="#155DFC"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-80">
        <svg
          className="absolute bottom-0 left-0 w-full h-85"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,64C560,64,640,64,720,74.7C800,85,880,107,960,106.7C1040,107,1120,85,1200,64L1200,120L0,120Z"
            fill="#155DFC"
          ></path>
        </svg>
      </div>

      {/* Content Wrapper (Ensures all elements are above the wave) */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center z-10">
        <img
          src="/undraw_team-up_qeem.svg"
          alt="Team Up Illustration"
          className="w-40 md:w-56 mx-auto md:mx-0"
        />

        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Wisdom Academy</h2>
          <p className="mt-2 text-gray-400 max-w-xs">
            Empowering minds with quality education and knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#courses" className="hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Subscribe</h3>
          <p className="mt-2 text-gray-400">Stay updated with new courses.</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded border border-gray-600 text-white w-full sm:w-64"
            />
            <motion.button
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              whileHover={{ scale: 0.99 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative flex justify-center space-x-6 mt-6 z-10">
  <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300 cursor-pointer" />
  <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300 cursor-pointer" />
  <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300 cursor-pointer" />
  <FaGoogle className="text-2xl hover:text-red-500 transition duration-300 cursor-pointer" />
  {/* <FaFacebook className="text-2xl hover:text-blue-700 transition duration-300 cursor-pointer" /> */}
</div>

      {/* Quote */}
      <p className="relative text-center text-white mt-6 px-4 z-10">
        “Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today.” - Wisdom Academy
      </p>
      {/* Copyright */}
      <p className="relative text-center text-gray-300 mt-4 z-10 text-sm">
        © {new Date().getFullYear()} Wisdom Academy. All rights reserved.
        Developed with ❤️ by Kaunain.
      </p>
    </footer>
  );
}
