import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const CourseLecturePage = () => {
  const { id } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [enrollCourses, setEnrollCourses] = useState([]);
  console.log(enrollCourses, "lecture");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/courses/single/${id}`,
          { withCredentials: true }
        );
        setEnrollCourses(res.data);
      } catch (error) {
        console.log("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [id]);

  // const course = {
  //   title: "Mastering Node.js",
  //   category: "Backend",
  //   author: { name: "John Doe" },
  //   sections: [
  //     {
  //       title: "Introduction",
  //       lectures: [
  //         {
  //           title: "What is Node.js?",
  //           videoUrl: "https://example.com/vid1.mp4",
  //         },
  //         { title: "Setup & Tools", videoUrl: "https://example.com/vid2.mp4" },
  //       ],
  //     },
  //     {
  //       title: "Advanced Topics",
  //       lectures: [
  //         { title: "Streams", videoUrl: "https://example.com/vid3.mp4" },
  //         { title: "Performance", videoUrl: "https://example.com/vid4.mp4" },
  //       ],
  //     },
  //   ],
  // };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      {/* Course Header */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 mb-10">
        <img className=" w-32 h-16 object-cover rounded-xl" src={enrollCourses.thumbnail} alt="" />
        <h1 className="text-1xl font-bold text-gray-800 mb-2">
          {enrollCourses.title}
        </h1>
        <div className="text-gray-600 mb-2">
          Category:{" "}
          <span className="text-indigo-600 font-semibold">
            {enrollCourses.category}
          </span>
        </div>
        <div className="text-gray-600">
          Author:{" "}
          <span className="text-gray-800 font-medium">
            {enrollCourses.author?.name}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Sidebar: Sections & Lectures */}
        {/* <div className="bg-white shadow rounded-lg p-4 col-span-1 overflow-auto max-h-[75vh]">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Course Content
          </h2>
          {enrollCourses.sections && enrollCourses.sections.length > 0 ? (
            enrollCourses.sections.map((section, secIndex) => (
              <div key={secIndex} className="mb-6">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2 pl-2">
                  {section.lectures.map((lecture, lecIndex) => (
                    <li
                      key={lecIndex}
                      onClick={() => setActiveVideo(lecture.videoUrl)}
                      className="cursor-pointer hover:bg-indigo-100 p-2 rounded text-gray-700 flex items-center gap-2"
                    >
                      <span className="text-sm font-medium">
                        {lecture.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No lectures uploaded yet.</p>
          )}
        </div> */}

        {/* Main Content: Video Player */}
        <div className="col-span-2 bg-white shadow rounded-lg p-4">
          {activeVideo ? (
            <video
              controls
              src={activeVideo}
              className="w-full h-96 rounded"
              autoPlay
            ></video>
          ) : (
            <div className="h-96 flex items-center justify-center text-gray-500 text-lg">
              Select a lecture to start watching
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseLecturePage;
