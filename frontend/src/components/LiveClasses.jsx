import React from "react";
import { FaRegClock, FaVideo } from "react-icons/fa";

const LiveClasses = () => {
  return (
    <section className="py-16 bg-[#F8F9FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#090E23] mb-4">
          Live Classes
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Experience real-time learning with interactive sessions led by expert
          teachers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Class Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#090E23]">
                Math Basics
              </h3>
              <FaVideo className="text-[#5842BC] text-xl" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              A beginner-friendly session focusing on arithmetic and algebra.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <FaRegClock className="mr-1" />
              Starts at 10:00 AM
            </div>
          </div>

          {/* Class Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#090E23]">
                Science Lab
              </h3>
              <FaVideo className="text-[#5842BC] text-xl" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Explore fun experiments and science principles in action.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <FaRegClock className="mr-1" />
              Starts at 12:30 PM
            </div>
          </div>

          {/* Class Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#090E23]">
                English Grammar
              </h3>
              <FaVideo className="text-[#5842BC] text-xl" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Improve your writing and speaking skills with expert tips.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <FaRegClock className="mr-1" />
              Starts at 3:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClasses;
