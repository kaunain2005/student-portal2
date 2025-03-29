import React, { useState, useEffect } from "react";
import { getUser } from "../utils/auth";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();
    setUser(userData);
  }, []);

  if (!user) return <div className="mt-10 text-2xl">Loading...</div>;

  return <div>{user.role === "teacher" ? <TeacherProfile /> : <StudentProfile />}</div>;
};

export default ProfilePage;
