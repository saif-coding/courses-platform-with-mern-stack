import React, { useContext } from "react";
import { CourseContext } from "./../context/CourseContext";
import { Link } from "react-router-dom";

function AllCourses() {
  const { courseData } = useContext(CourseContext);

  return (
    <>
      <section className="py-16 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Pick a <span className="text-blue-600">Course</span> to Get Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.map((course) => (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg w-76 md:w-86 max-w-md mx-auto">
                {/* Thumbnail */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Category */}
                  <span className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
                    {course.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {course.title.substring(0, 30)}...
                  </h2>

                  {/* description */}
                  <p className="text-sm text-gray-500">
                    {course.description.substring(0, 110)}...
                  </p>

                  {/* Author */}
                  <p className="text-sm text-gray-500">
                    By {course.author?.name || "Instructor"}
                  </p>

                  {/* Price Section */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-sm">
                      ${course.coursePrice}
                    </span>
                    <span className="text-green-600 font-semibold text-lg">
                      ${course.offerPrice}
                    </span>
                  </div>

                  {/* Button */}
                  <Link to={`/single/${course._id}`}>
                    <button className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllCourses;
