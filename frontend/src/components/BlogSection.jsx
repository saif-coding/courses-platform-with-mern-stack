import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const BlogSection = () => {
  return (
    <section className="bg-[#FFF9F1] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Blog
          </h2>
          <button className="text-sm md:text-base text-[#F78C40] font-semibold flex items-center gap-1 hover:underline">
            View All <FaArrowRight className="text-xs mt-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
                alt="Blog Thumbnail"
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-1">Aug 24, 2024</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  Why Online Learning is the Future of Education
                </h3>
                <p className="text-sm text-gray-600">
                  Discover how digital platforms are transforming the way we
                  gain knowledge.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
