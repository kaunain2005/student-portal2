import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      setMessage(res.data.message);
      window.location.href = "/login"; // Redirect to dashboard
    } catch (err) {
      setMessage(err.response?.data?.error || "Registration failed");
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
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-xl shadow-lg w-96 border border-white/20"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Welcome Back! 🚀
        </motion.h2>

        <form onSubmit={handleSubmit}  className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#4f46e5" }}
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            required
          />
          <motion.select
            whileFocus={{ scale: 1.05 }}
            name="role"
            onChange={handleChange}
            className="w-full p-3 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
          >
            <option value="student" className="bg-zinc-700">Student</option>
            <option value="teacher" className="bg-zinc-700">Teacher</option>
          </motion.select>
          <motion.button
            whileHover={{ scale: 0.99 }}
            className="w-full bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Register
          </motion.button>
        </form>

        {message && <p className="bg-white/10 rounded-2xl text-center text-indigo-500 font-bold mt-3">{message}</p>}

        <p className="text-center text-white mt-1">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
