import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../utils/auth";

const TeacherProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const user = getUser();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user || !user._id) {
          setError("No user data available");
          return;
        }
        const res = await axios.get(`http://localhost:5000/api/profile?userId=${user._id}`);
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch teacher profile:", err.response || err);
        setError("Failed to load profile.");
      }
    };

    fetchProfile();
  }, [user]);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Teacher Profile</h2>
      <img
        src={profile.profilePic || "/default-teacher.png"}
        alt="Teacher Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      {/* Additional teacher details can be added here */}
    </div>
  );
};

export default TeacherProfile;
