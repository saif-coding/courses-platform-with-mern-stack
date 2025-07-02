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
    } catch (error) {
      console.log(error);
    }
  };
  const getAllLectures = async (id) => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/lectures/get/${id}`
        // { withCredentials: true }
      );
      console.log(result.data, "all lecture");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <CourseContext.Provider
      value={{ courseData, setCourseData, getAllLectures }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export default CourseContextProvider;
