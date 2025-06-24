import React, { useContext } from "react";
import { UserContext } from "./../context/UserContext";
function RecentUsers() {
  const { allUsers } = useContext(UserContext);
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recent Users</h3>
      {allUsers.map((user) => (
        <ul key={user._id} className="space-y-2">
          <li className="border-b pb-2">
            👤 {user.email}{" "}
            <span className=" ml-12">
              Joined: {new Date(user.createdAt).toDateString()}
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default RecentUsers;
