import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionPopup from "../components/SectionPopup";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { FaChevronDown, FaChevronUp, FaPlayCircle } from "react-icons/fa";

const SingleCourse = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { getEnrollCourses } = useContext(UserContext);
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [show, setShow] = useState(false);
  const [coursePrice, setCoursePrice] = useState("");
  const navigate = useNavigate();
  const [getSections, setGetSections] = useState([]);
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const getAllSections = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/sections/getall/${id}`,
        { withCredentials: true }
      );
      setGetSections(result.data);
      console.log(result.data, "section");
    } catch (error) {
      console.log(error);
    }
  };

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
  useEffect(() => {
    fetchCourse();
    getAllSections();
  }, []);

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
      if (result.status === 201) {
        toast.success(result.data.message);
        navigate(`/allvideos/${id}`);
        await getEnrollCourses();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  const sections = [
    {
      _id: "1",
      name: "Introduction to React",
      lectures: [
        { _id: "l1", title: "What is React?" },
        { _id: "l2", title: "JSX & Components" },
      ],
    },
    {
      _id: "2",
      name: "Advanced Concepts",
      lectures: [
        { _id: "l3", title: "Hooks in Depth" },
        { _id: "l4", title: "Context API" },
      ],
    },
  ];

  return (
    <div className=" md:flex">
      <div className="min-h-screen md:w-[70%] bg-gray-100 py-10 px-4 md:px-16">
        {/* Header */}
        <div className="xl:flex flex-col md:flex-row gap-6 items-start">
          <img
            src={course.thumbnail}
            alt="Thumbnail"
            className="rounded-lg w-full md:w-100 h-52 object-cover shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-1xl font-bold text-gray-800 mb-5  ">
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
            <p className="text-gray-700 leading-relaxed">
              {course.description}
            </p>
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
      <div className=" bg-gray-100 md:w-[30%] p-6">
        <p className=" text-center my-4">Upload the lectures here</p>
        <div className="w-full h-screen rounded-lg  flex relative flex-col items-center border border-gray-300 p-6">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="bg-green-500 px-3 py-2 text-white rounded-2xl content"
          >
            Create Sections
          </button>

          <div className="w-full max-w-2xl mx-auto mt-6 space-y-4">
            {getSections.map((section, index) => (
              <div
                key={section._id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition font-semibold text-gray-700"
                >
                  <span>{section.name}</span>
                  {openSectionIndex === index ? (
                    <FaChevronUp className="text-sm" />
                  ) : (
                    <FaChevronDown className="text-sm" />
                  )}
                </button>

                {/* Section Lectures (Dropdown) */}
                {openSectionIndex === index && (
                  <ul className="bg-white px-4 py-3 space-y-2 border-t">
                    {sections.lectures ? (
                      sections.lectures.map((lecture, idx) => (
                        <li
                          key={lecture._id}
                          className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
                        >
                          <FaPlayCircle className="text-indigo-500" />
                          <span>{lecture.title}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 text-sm italic">
                        No lectures added. +
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {showPopup && <SectionPopup pop={setShowPopup} id={id} />}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
