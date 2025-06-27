import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserProfile from "../components/UserProfile";
import MainDashboard from "../pages/MainDashboard";
import AddCourse from "../pages/AddCourse";
import AllCourses from "../pages/AllCourses";
import SingleCourse from "../pages/SingleCourse";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/dashboard" element={<MainDashboard />} />
      <Route path="/dashboard/add" element={<AddCourse />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/single/:id" element={<SingleCourse />} />
    </Routes>
  );
}

export default Routing;
