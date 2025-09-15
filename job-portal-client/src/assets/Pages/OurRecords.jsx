import React from 'react'
import { FaBriefcase } from "react-icons/fa6";
// import { TbBuildings } from "react-icons/tb";
// import { AiFillFileText } from "react-icons/ai";
// import { FaUsers } from "react-icons/fa";

export default function StatsSection() {
     const stats = [
    { number: "6540", label: "Jobs Posted", icon: <FaBriefcase size={28} /> },
    { number: "2653", label: "Companies", icon: <FaBriefcase size={28} /> },
    { number: "12000", label: "Resumes Uploaded", icon: <FaBriefcase size={28} /> },
    { number: "25532", label: "Candidates Registered", icon: <FaBriefcase size={28} /> },
  ];

   return (
    <section className="py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <p className="text-red-500 font-semibold uppercase tracking-wide">
        Our Records
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Numbers That <span className="text-purple-600">Speaks For Us</span>
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-sm py-8 flex flex-col items-center"
          >
            {/* Icon inside circle */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-b from-purple-400 to-blue-600 text-white mb-4">
              {item.icon}
            </div>

            {/* Number */}
            <h3 className="text-3xl font-bold text-purple-600">{item.number}</h3>

            {/* Label */}
            <p className="text-black font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );

}