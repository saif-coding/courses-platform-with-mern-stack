import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    text: "This platform changed how I learn online. The teachers are amazing and the app is super easy to use!",
  },
  {
    name: "Ali Raza",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "My kids love the live classes! Their progress has been amazing since joining.",
  },
  {
    name: "Fatima Noor",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I can attend sessions on my phone anytime. It's so flexible and professional.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mb-12 text-lg md:text-xl">
          Hear from students and parents who love our platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
              <FaQuoteLeft className="text-pink-500 text-xl mb-2" />
              <p className="text-gray-700 text-base">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
