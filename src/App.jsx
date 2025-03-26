import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Quizzes from "./pages/Quizzes";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import StudyLoader from "./components/StudyLoader";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileCard from "./components/ProfileCard";
import CoursePage from "./pages/CoursePage";
import Dashboard from "./pages/Dashboard";
import HomeDashboard from "./pages/CourseDashboard";
import AddCoursePage from "./pages/courses/AddCoursePage";
import DeleteCoursePage from "./pages/courses/DeleteCoursePage";


const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Navbar on Login and Register pages
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulating API loading time
    }, 2000);
  }, []);

  if (loading) {
    return <StudyLoader />;
  }


  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<CoursePage />} />

        {/* Protected Routes */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <Quizzes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/course-dashboard"
          element={
            <ProtectedRoute>
              <HomeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/course-dashboard/add-course"
          element={
            <ProtectedRoute>
              <AddCoursePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/course-dashboard/delete-course"
          element={
            <ProtectedRoute>
              <DeleteCoursePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
