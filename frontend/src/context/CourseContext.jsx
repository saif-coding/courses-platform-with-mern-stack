import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CourseContext = createContext();
function CourseContextProvider({ children }) {
  const [courseData, setCourseData] = useState([]);

  const getAllCourses = async () => {
    try {
      const resutl = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/courses/getall`,
        { withCredentials: true }
      );
      setCourseData(resutl.data);
      console.log(resutl.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseContextProvider;
