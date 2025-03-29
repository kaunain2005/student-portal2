import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { getUser } from "../utils/auth";

// Example SVG placeholder if no profilePic is provided
const DefaultStudentSVG = () => (
  <svg
    className="w-24 h-24 text-gray-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
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

  // --------------------------
  // Fetch Profile Data
  // --------------------------
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user || !user._id) {
          setError("No user data available");
          return;
        }
        const res = await axios.get(
          `http://localhost:5000/api/profile?userId=${user._id}`
        );
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

  // --------------------------
  // Handle Form Changes
  // --------------------------
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // --------------------------
  // Submit Profile Updates
  // --------------------------
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
      const res = await axios.put(
        `http://localhost:5000/api/update-profile?userId=${user._id}`,
        updatedData
      );
      setMessage("Profile updated successfully!");
      setProfile(res.data.user);
      setEditMode(false);
    } catch (err) {
      console.error("Profile update failed:", err.response || err);
      setError("Profile update failed.");
    }
  };

  // --------------------------
  // Render Logic
  // --------------------------
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
    <div className="min-h-screen bg-gray-100 p-6 pt-15">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-700 text-center mb-6 "
      >
        My Profile Dashboard
      </motion.h2>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-">
        {/* LEFT CARD: MY PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow p-6 relative"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">My profile</h3>
            {editMode ? null : (
              <button
                onClick={() => setEditMode(true)}
                className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition"
              >
                Edit
              </button>
            )}
          </div>

          {editMode ? (
            <form onSubmit={handleUpdate} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobNumber"
                  value={formData.mobNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Class */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Class
                </label>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* College */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  College Name
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Profile Pic */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Profile Picture URL
                </label>
                <input
                  type="text"
                  name="profilePic"
                  value={formData.profilePic}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Enrolled Courses */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Enrolled Courses (comma separated)
                </label>
                <input
                  type="text"
                  name="enrolledCourses"
                  value={formData.enrolledCourses}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="flex flex-col items-center mb-4">
                {profile.profilePic ? (
                  <img
                    src={profile.profilePic}
                    alt="Student Profile"
                    className="w-20 h-20 rounded-full mb-2 object-cover"
                  />
                ) : (
                  <DefaultStudentSVG />
                )}
                <p className="text-gray-700 font-medium">{profile.name}</p>
                <p className="text-sm text-gray-500">{profile.email}</p>
              </div>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>
                  <strong>Mobile:</strong> {profile.mobNumber || "Not Provided"}
                </li>
                <li>
                  <strong>Class:</strong> {profile.class || "Not Provided"}
                </li>
                <li>
                  <strong>College:</strong>{" "}
                  {profile.collegeName || "Not Provided"}
                </li>
                <li>
                  <strong>Courses:</strong>{" "}
                  {profile.enrolledCourses && profile.enrolledCourses.length > 0
                    ? profile.enrolledCourses.join(", ")
                    : "None"}
                </li>
              </ul>
              {message && (
                <p className="text-sm text-green-600 mt-2">{message}</p>
              )}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default StudentProfile;
