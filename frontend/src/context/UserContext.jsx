import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);
  const getSingleUser = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        { withCredentials: true }
      );
      setSingleUser(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/allusers`,
        { withCredentials: true }
      );
      setAllUsers(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUser();
    getAllUsers();
  }, []);

 
  return (
    <UserContext.Provider
      value={{ allUsers, setAllUsers, singleUser, setSingleUser,getSingleUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
