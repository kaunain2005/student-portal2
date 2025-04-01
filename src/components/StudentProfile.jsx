import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { getUser } from "../utils/auth";

// SVG placeholder if no profilePic is provided
const DefaultStudentSVG = () => (
  <svg
    className="w-32 h-32 text-gray-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const [enrolledCoursesData, setEnrolledCoursesData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobNumber: "",
    class: "",
    collegeName: "",
    profilePic: "",
    enrolledCourses: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const user = getUser();

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user || !user._id) {
          setError("No user data available");
          return;
        }
        const res = await axios.get(`http://localhost:5000/api/profile?userId=${user._id}`);
        setProfile(res.data);
        if (!editMode) {
          setFormData({
            name: res.data.name || "",
            mobNumber: res.data.mobNumber || "",
            class: res.data.class || "",
            collegeName: res.data.collegeName || "",
            profilePic: res.data.profilePic || "",
            enrolledCourses: res.data.enrolledCourses
              ? res.data.enrolledCourses.join(", ")
              : "",
          });
        }
      } catch (err) {
        console.error("Failed to fetch student profile:", err.response || err);
        setError("Failed to load profile.");
      }
    };

    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch enrolled courses details using a separate endpoint
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      if (profile && profile.enrolledCourses && profile.enrolledCourses.length > 0) {
        try {
          // Convert course IDs to comma-separated string
          const ids = profile.enrolledCourses.join(",");
          const res = await axios.get(`http://localhost:5000/api/coursesbyids?ids=${ids}`);
          setEnrolledCoursesData(res.data);
        } catch (err) {
          console.error("Failed to fetch enrolled courses:", err.response || err);
        }
      } else {
        setEnrolledCoursesData([]);
      }
    };

    fetchEnrolledCourses();
  }, [profile]);

  // Handle form changes in edit mode
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit profile updates
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        enrolledCourses: formData.enrolledCourses
          .split(",")
          .map((course) => course.trim())
          .filter((course) => course !== ""),
      };
      const res = await axios.put(`http://localhost:5000/api/update-profile?userId=${user._id}`, updatedData);
      setMessage("Profile updated successfully!");
      setProfile(res.data.user);
      setEditMode(false);
    } catch (err) {
      console.error("Profile update failed:", err.response || err);
      setError("Profile update failed.");
    }
  };

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );

  if (!profile)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-500 animate-pulse">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-700 text-center mb-8"
      >
        Profile Dashboard
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg"
      >
        {editMode ? (
          <motion.form
            onSubmit={handleUpdate}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
              <input
                type="text"
                name="mobNumber"
                value={formData.mobNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Class</label>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">College Name</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Profile Picture URL</label>
              <input
                type="text"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Enrolled Courses (comma separated)
              </label>
              <input
                type="text"
                name="enrolledCourses"
                value={formData.enrolledCourses}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="md:col-span-2 flex justify-end space-x-6 mt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition"
              >
                Save Changes
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setEditMode(false)}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-400 text-white px-8 py-3 rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-gray-800"
          >
            <div className="flex flex-col items-center text-center">
              {profile.profilePic ? (
                <img
                  src={profile.profilePic}
                  alt="Student Profile"
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
              ) : (
                <DefaultStudentSVG />
              )}
              <p className="text-xl font-semibold">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.email}</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 text-gray-700">
              <div>
                <span className="font-medium">Mobile Number: </span>
                <span>{profile.mobNumber || "Not Provided"}</span>
              </div>
              <div>
                <span className="font-medium">Class: </span>
                <span>{profile.class || "Not Provided"}</span>
              </div>
              <div>
                <span className="font-medium">College Name: </span>
                <span>{profile.collegeName || "Not Provided"}</span>
              </div>
            </div>
            {/* Display enrolled courses as cards */}
            {enrolledCoursesData.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {enrolledCoursesData.map((course) => (
                    <div
                      key={course._id}
                      className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-32 object-cover rounded"
                      />
                      <h4 className="text-lg font-bold mt-2">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-center mt-8">
              <motion.button
                onClick={() => setEditMode(true)}
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition"
              >
                Edit Profile
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default StudentProfile;
