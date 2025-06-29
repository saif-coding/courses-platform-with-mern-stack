import React, { useEffect, useContext, useState } from "react";
import { FaEnvelope, FaCalendarAlt, FaUser } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const UserProfile = () => {
  const { singleUser, setSingleUser } = useContext(UserContext);
  const navigate = useNavigate();
  const userLogout = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {},
        { withCredentials: true }
      );
      if (result.status === 200) {
        navigate("/");
        setSingleUser("");
        toast.success(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [enrollCoursesData, setEnrollCoursesData] = useState([]);
  console.log(enrollCoursesData, "courses");
  const getEnrollCourses = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/enrolls/my-courses`,
        { withCredentials: true }
      );
      setEnrollCoursesData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnrollCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Profile Image */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-6">
            <img
              src={
                singleUser?.profileImage || "https://i.pravatar.cc/150?img=67"
              }
              alt="User"
              className="w-40 h-40 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="col-span-2 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {singleUser?.name || "User Name"}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Role:{" "}
              <span className="text-blue-500 capitalize">
                {singleUser?.role || "user"}
              </span>
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-blue-500" />
                <span>{singleUser?.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-3 text-blue-500" />
                <span>
                  Joined: {new Date(singleUser?.createdAt).toDateString()}
                </span>
              </div>
              {/* Add more user details below */}
              <div className="flex items-center text-gray-600">
                <FaUser className="mr-3 text-blue-500" />
                <span>User ID: {singleUser?._id}</span>
              </div>
            </div>

            {/* Optional Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Edit Profile
              </button>
              <button
                onClick={() => userLogout()}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {enrollCoursesData.map((c) => (
          <div className="flex flex-col md:flex-row gap-6 mt-5 items-start">
            <img
              src={c.course.thumbnail}
              alt="Thumbnail"
              className="rounded-lg w-full md:w-32 h-20 object-cover shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-1xl font-bold text-gray-800 mb-5  ">
                {c.course.title}
              </h1>
              <p className="text-gray-600 mb-1">
                Category:{" "}
                <span className="font-semibold text-indigo-600">
                  {c.course.category}
                </span>
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 line-through text-sm">
                  ${c.course.coursePrice}
                </span>
                <span className="text-green-600 font-semibold text-lg">
                  ${c.course.offerPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
