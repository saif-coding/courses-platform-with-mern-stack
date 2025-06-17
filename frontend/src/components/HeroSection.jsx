import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImage from "../assets/images/hero.jpg";
const HeroSection = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-24">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
            Top <span className="text-blue-600">Online</span>
            <br /> Training Program
          </h1>
          <p className="mt-4 text-gray-600">
            Learn online and earn valuable credentials from top instructors &
            institutions.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start items-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
              Find Courses
            </button>
            <div className="flex items-center gap-2">
              <FaPlay className="text-blue-600" />
              <span className="text-blue-600 font-medium cursor-pointer">
                How It Works
              </span>
            </div>
          </div>
          <div className="avatar-group -space-x-6 flex mt-6">
            <div className="avatar">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  className=" rounded-full w-full h-full object-cover"
                  src="https://images.pexels.com/photos/31200092/pexels-photo-31200092.jpeg"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  className=" rounded-full w-full h-full object-cover"
                  src="https://images.pexels.com/photos/31529034/pexels-photo-31529034.jpeg"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 overflow-hidden h-12">
                <img
                  className=" rounded-full w-full h-full object-cover"
                  src="https://images.pexels.com/photos/10793261/pexels-photo-10793261.jpeg"
                />
              </div>
            </div>
            <div className="avatar avatar-placeholder">
              <div className="bg-black w-12 h-12 rounded-full overflow-hidden">
                <h1 className=" text-white w-full h-full flex items-center justify-center ">
                  +99
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="hero"
            className="w-full max-w-md rounded-2xl border"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
