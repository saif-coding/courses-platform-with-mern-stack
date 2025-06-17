import React from "react";

const GetStarted = () => {
  return (
    <section className="py-16 bg-[#f7f8f9]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Pick a <span className="text-blue-600">Class</span> to Get Started
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-[300px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="class1"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Design Basics
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn design fundamentals and elevate your creativity.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">
                Join Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[300px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="class2"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Python for Everyone
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Master Python with our expert instructors.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">
                Join Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[300px] bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="class3"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Web Development
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn HTML, CSS, and JavaScript from scratch.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
