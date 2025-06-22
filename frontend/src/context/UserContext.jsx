import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);
  console.log(singleUser, "context api");
  const getSingleUser = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        { withCredentials: true }
      );
      setSingleUser(result.data);
      console.log(result.data, "context user");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ allUsers, setAllUsers, singleUser, setSingleUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
