import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [show, setShow] = useState(false);
  const [coursePrice, setCoursePrice] = useState("");
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/courses/single/${id}`,
          { withCredentials: true }
        );
        setCourse(res.data);
      } catch (error) {
        console.log("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course)
    return (
      <div className="text-center py-20 text-lg font-medium">
        Loading course...
      </div>
    );

  const addPrice = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/enrolls/add/${id}`,
        { coursePrice },
        { withCredentials: true }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={course.thumbnail}
          alt="Thumbnail"
          className="rounded-lg w-full md:w-100 h-52 object-cover shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-5  ">
            {course.title}
          </h1>
          <p className="text-gray-600 mb-1">
            Category:{" "}
            <span className="font-semibold text-indigo-600">
              {course.category}
            </span>
          </p>
          <p className="text-gray-600">
            Author:{" "}
            <span className="font-medium">
              {course.author?.name || "Unknown"}
            </span>
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Left: Description */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Course Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{course.description}</p>
        </div>

        {/* Right: Sidebar */}
        <div className="bg-white relative p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Enroll Now</h3>
          <div className="flex items-center gap-3">
            <span className="text-lg line-through text-red-400">
              Rs. {course.coursePrice}
            </span>
            <span className="text-2xl font-bold text-green-600">
              Rs. {course.offerPrice}
            </span>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded transition duration-200"
          >
            Enroll This Course
          </button>
          {show && (
            <div className=" w-76 bg-black rounded-lg h-72 -top-20 p-4 absolute ">
              <input
                onChange={(e) => setCoursePrice(e.target.value)}
                className=" bg-white w-full px-4 py-2 border rounded-xl mt-6"
                type="text"
                placeholder="Course Price"
              />
              <div className=" flex gap-4">
                <button
                  onClick={() => addPrice()}
                  className="w-full py-3 bg-indigo-500 mt-12 text-sm hover:bg-indigo-700 text-white font-semibold rounded transition duration-200"
                  disabled={!coursePrice}
                >
                  Send Payments
                </button>
                <button
                  onClick={() => setShow(!show)}
                  className="w-full py-3 bg-red-500 mt-12 text-sm hover:bg-red-700 text-white font-semibold rounded transition duration-200"
                >
                  Cancel Payments
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
