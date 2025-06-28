import React from "react";
import { CourseContext } from "./../context/CourseContext";
import { useContext } from "react";
const RecentCourses = () => {
  const { courseData } = useContext(CourseContext);
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Recent Courses</h3>

      {courseData.map((course) => (
        <ul className="space-y-2">
          <li className="border-b pb-2">{course.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default RecentCourses;
