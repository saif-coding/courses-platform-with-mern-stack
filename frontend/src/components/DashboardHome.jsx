import React, { useContext } from "react";
import Card from "../components/Card";
import RecentCourses from "../components/RecentCourses";
import RecentUsers from "../components/RecentUsers";
import { UserContext } from "./../context/UserContext";
function DashboardHome() {
  const { allUsers } = useContext(UserContext);
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="Users" value={allUsers.length} color="bg-blue-500" />
        <Card title="Courses" value="132" color="bg-green-500" />
        <Card title="Revenue" value="$23,500" color="bg-yellow-500" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <RecentCourses />
        <RecentUsers />
      </div>
    </div>
  );
}

export default DashboardHome;
