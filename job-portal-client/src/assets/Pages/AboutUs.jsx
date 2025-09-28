import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaCar,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";
import Footer from "./Footer";
 
const AboutUs = () => {
  return (
    <>
    <div className="max-w-screen container mx-auto xl:px-[40px] px-4">
      <div className="space-y-20 pb-20">
        {/* Hero Banner */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1350&q=80"
            alt="Teamwork Banner"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-orange-500 text-5xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-gray-200 max-w-xl text-lg">
              The Eu Consultancy is a leading European recruitment and training
              consultancy specializing in the IT and Automotive sectors.
            </p>
          </div>
        </div>
 
        {/* Who We Are */}
        <section className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg shadow-lg px-10 py-7">
          <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">
            Who We Are
          </h2>
 
          <div className="md:flex md:items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80"
              alt="Consultancy Team"
              className="w-full md:w-1/3 rounded-lg shadow"
            />
            <div className="md:w-2/3 space-y-5 text-gray-800">
              <p className="text-lg">
                Our candidates include professionals with expertise in:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-800">
                <li className="flex items-center space-x-3">
                  <FaLaptopCode className="text-blue-500 text-xl mr-2" /> Software
                  Development
                </li>
                <li className="flex items-center space-x-3">
                  <FaServer className="text-green-500 text-xl mr-2" /> System
                  Administration
                </li>
                <li className="flex items-center space-x-3">
                  <FaShieldAlt className="text-yellow-500 text-xl mr-2" />{" "}
                  Cybersecurity
                </li>
                <li className="flex items-center space-x-3">
                  <FaChartLine className="text-purple-500 text-xl mr-2" /> Data
                  Analysis
                </li>
                <li className="flex items-center space-x-3">
                  <FaCogs className="text-indigo-500 text-xl mr-2" /> Mechanical
                  Engineering
                </li>
                <li className="flex items-center space-x-3">
                  <FaCar className="text-red-500 text-xl mr-2" /> Automotive Design
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-500 text-xl mr-2" /> Quality
                  Assurance
                </li>
                <li className="flex items-center space-x-3">
                  <FaIndustry className="text-pink-500 text-xl mr-2" /> Production
                  Management
                </li>
              </ul>
              <p className="text-lg">
                Every candidate is screened via our rigorous evaluation process
                ensuring the right skills, motivation, and professionalism.
              </p>
            </div>
          </div>
        </section>
 
        {/* Mission & Vision */}
        <section className="text-center space-y-10">
          <h2 className="text-3xl font-semibold text-orange-600">
            Our Mission & Vision
          </h2>
          <div className="md:flex gap-10 justify-center">
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>
                Empower businesses and candidates by providing high-quality
                recruitment solutions, industry-specific training programs, and
                personalized career coaching, enabling long-term success.
              </p>
            </div>
            <div className="bg-orange-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>
                To be the most trusted consultancy across Europe for
                recruitment, skill development, and career advancement in the IT
                and Automotive industries.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};
 
export default AboutUs;