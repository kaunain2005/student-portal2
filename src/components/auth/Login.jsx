import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    gsap.from(".form-container", { opacity: 1, y: 50, duration: 1 });
    gsap.to(".form-container", { opacity: 1, y: 0, duration: 3 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      localStorage.setItem("token", res.data.token); // Store token
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user details
      setMessage("Login successful!");
      window.location.href = "/"; // Redirect to dashboard
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center h-screen bg-gray-900 bg-[url('/bg2.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Glassmorphic Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8, backdropFilter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black/30 backdrop-blur-lg text-white p-8 rounded-xl shadow-lg w-96 border border-white/30"
      >
        {/* Floating Animation Effect */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-center mb-1"
        >
          Login
        </motion.h2>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Welcome Back! 🚀
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            whileFocus={{ scale: 1.05, borderColor: "#4f46e5" }}
            className="w-full p-3 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
          />

          {/* Password Input with Show/Hide */}
          <div className="relative w-full">
            <motion.input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              whileFocus={{ scale: 1.05, borderColor: "#4f46e5" }}
              className="w-full p-3 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
            {/* Eye Icon for Show/Hide Password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-white transition-all duration-300"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-500 mt-3 font-semibold"
          >
            {message}
          </motion.p>
        )}

        {/* Sign Up Link */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:underline hover:text-indigo-300 transition-all duration-300"
          >
            Sign up here
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
