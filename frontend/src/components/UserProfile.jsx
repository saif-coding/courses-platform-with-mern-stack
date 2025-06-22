import React from "react";
import { FaEnvelope, FaCalendarAlt, FaUser } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
const UserProfile = ({ user }) => {
  const { singleUser } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Profile Image */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-6">
            <img
              src={user?.profileImage || "https://i.pravatar.cc/150?img=67"}
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
                {user?.role || "user"}
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
                <span>User ID: {user?._id}</span>
              </div>
            </div>

            {/* Optional Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Edit Profile
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
