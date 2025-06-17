import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const Teachers = () => {
  const instructors = [
    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=500&q=80",
    },
    {
      name: "Michael Smith",
      subject: "Physics",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?fit=crop&w=500&q=80",
    },
    {
      name: "Emily Davis",
      subject: "Chemistry",
      image:
        "https://images.unsplash.com/photo-1621570071159-923b3c8d35de?fit=crop&w=500&q=80",
    },
    {
      name: "Daniel Martinez",
      subject: "Biology",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="py-16 bg-[#f9f9f9] text-gray-800" id="teachers">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          <FaChalkboardTeacher className="text-[#2c83f2] text-5xl" /> Meet Our
          Teachers
        </h2>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Our expert instructors bring years of classroom experience to deliver
          engaging and effective lessons.
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {instructors.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-4"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {teacher.name}
              </h3>
              <p className="text-[#2c83f2] font-medium">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
