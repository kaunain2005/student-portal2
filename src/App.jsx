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
// import ProfileCard from "./components/ProfileCard";
import CoursePage from "./pages/CoursePage";
import Dashboard from "./pages/Dashboard";
import HomeDashboard from "./pages/CourseDashboard";
// Course Manangement
import AddCoursePage from "./pages/courses/AddCoursePage";
import UpdateCoursePage from "./pages/courses/UpdateCoursePage";
import DeleteCoursePage from "./pages/courses/DeleteCoursePage";
import ProfilePage from "./components/ProfilePage";
import AboutPage from "./pages/AboutPage";
import CourseDetailPage from "./pages/CourseDetailPage";

const Layout = ({ children }) => {
  const location = useLocation();

  //Ensures page start from top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Runs whenever the route changes

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
        {/* <Route path="/profile" element={<ProfileCard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetailPage />
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
        {/* Course Management start */}
        <Route
          path="/dashboard/course-dashboard/add-course"
          element={
            <ProtectedRoute>
              <AddCoursePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/course-dashboard/update-course"
          element={
            <ProtectedRoute>
              <UpdateCoursePage />
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
