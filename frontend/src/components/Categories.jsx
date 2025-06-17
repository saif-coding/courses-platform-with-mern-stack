import React from "react";
import {
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaProjectDiagram,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";

const categories = [
  {
    title: "Programming",
    icon: <FaLaptopCode />,
    desc: "Code With Confidence",
  },
  {
    title: "Graphic Design",
    icon: <BiCodeAlt />,
    desc: "Creative Digital Programming",
  },
  { title: "Web Designing", icon: <FaPalette />, desc: "Mastering Web Design" },
  { title: "Digital Marketing", icon: <FaBullhorn />, desc: "Grow Your Brand" },
  { title: "Coding", icon: <MdOutlineComputer />, desc: "Power Up With Logic" },
  {
    title: "Project Management",
    icon: <FaProjectDiagram />,
    desc: "Manage Like a Pro",
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          High-Demand <span className="text-blue-600">Categories</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col items-center bg-gray-50"
            >
              <div className="text-3xl text-blue-600 mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600">{cat.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View All Categories
        </button>
      </div>
    </section>
  );
};

export default Categories;
