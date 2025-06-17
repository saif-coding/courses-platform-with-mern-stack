import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppDownload = () => {
  return (
    <section className="w-full bg-[#FDF6F1] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
            Download Our App & Start Learning
          </h2>
          <p className="text-[#4F4F4F] text-lg mb-6">
            Get instant access to live classes, expert teachers, and your
            learning dashboard anytime and anywhere on your mobile device.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-md hover:bg-[#333] transition">
              <FaApple size={24} />
              <span>Download on App Store</span>
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-[#00A86B] text-white rounded-md hover:bg-[#007F52] transition">
              <FaGooglePlay size={24} />
              <span>Get it on Google Play</span>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.dribbble.com/userupload/10766376/file/original-cd586845701ee9b24d6793df4d7f640a.png"
            alt="App Mockup"
            className="w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
