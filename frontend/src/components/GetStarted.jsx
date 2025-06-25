import React from "react";
import { useContext } from "react";
import { CourseContext } from "./../context/CourseContext";

const GetStarted = () => {
  const { courseData } = useContext(CourseContext);
  return (
    <section className="py-16 bg-[#f7f8f9]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Pick a <span className="text-blue-600">Class</span> to Get Started
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {courseData.map((c) => (
            <div
              key={c._id}
              className="w-full sm:w-[300px] bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={c.thumbnail}
                alt="class1"
                className="w-full h-[180px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {c.title}
                </h3>
                <h2>{c.category}</h2>
                <p className="text-sm text-gray-600 mb-3">{c.description}</p>
                <p>offer Price {c.offerPrice}</p>
                <p> course Price {c.coursePrice}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
