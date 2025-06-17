import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c1a29] text-white py-10 px-5 md:px-20">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">EduGrow</h2>
          <p className="text-sm leading-6 text-gray-400">
            EduGrow is a platform where learning meets innovation. Explore
            courses, live classes, expert teachers, and much more.
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="text-xl hover:text-blue-500" />
            <FaTwitter className="text-xl hover:text-blue-400" />
            <FaInstagram className="text-xl hover:text-pink-500" />
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest updates and offers.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded text-black"
            />
            <button className="bg-[#fcaa17] text-black px-4 py-2 rounded hover:bg-[#e09915]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} EduGrow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
