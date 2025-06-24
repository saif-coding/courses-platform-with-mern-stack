import {
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaCog,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen px-4 py-6 fixed">
      <h1 className="text-2xl font-bold mb-8">LMS Admin</h1>
      <nav className="space-y-4">
        <NavLink
          to="/admin"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaHome /> Dashboard
        </NavLink>
        <NavLink
          to="/admin/users"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaUsers /> Users
        </NavLink>
        <NavLink
          to="/admin/instructors"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaChalkboardTeacher /> Instructors
        </NavLink>
        <NavLink
          to="/admin/courses"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaBook /> All Courses
        </NavLink>
        <NavLink
          to="/dashboard/add "
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <IoMdAddCircle /> Add Course
        </NavLink>
        <NavLink
          to="/admin/settings"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <FaCog /> Settings
        </NavLink>
        <button className="flex items-center gap-3 text-red-400 hover:text-red-600 mt-4">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
