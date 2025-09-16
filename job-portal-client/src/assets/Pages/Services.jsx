import React from "react";
import {
  FaBriefcase,
  FaUserTie,
  FaSearch,
  FaUniversity,
  FaLaptopCode,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "./Footer";
 
const OurServices = () => {
  const services = [
    {
      icon: <FaBriefcase className="text-white text-3xl" />,
      title: "Vast Talent Pool",
      description:
        "Tap into our large network of experienced engineers across Europe.",
    },
    {
      icon: <FaUserTie className="text-white text-3xl" />,
      title: "Sourcing & Screening",
      description:
        "Detailed CV reviews and technical assessments to present only the most qualified profiles.",
    },
    {
      icon: <FaCheckCircle className="text-white text-3xl" />,
      title: "Fitment Analysis",
      description:
        "Matching candidate skills and experience to your job role and company culture.",
    },
    {
      icon: <FaChartLine className="text-white text-3xl" />,
      title: "Interview & Salary Support",
      description:
        "Market insights to streamline hiring and negotiate the right terms.",
    },
    {
      icon: <FaBriefcase className="text-white text-3xl" />,
      title: "Fast-track Recruitment",
      description: "Delivering quality candidates within tight deadlines.",
    },
    {
      icon: <FaSearch className="text-white text-3xl" />,
      title: "Job Search Across Europe",
      description:
        "IT & Automotive job openings in UK, Ireland, Germany, France, Netherlands, Italy, Spain, Poland, and more.",
    },
    {
      icon: <FaUniversity className="text-white text-3xl" />,
      title: "Career Support Services",
      description:
        "CV Writing, Mock Interviews, Salary Coaching, Personalized Career Planning.",
    },
    {
      icon: <FaLaptopCode className="text-white text-3xl" />,
      title: "Specialized Training Programs",
      description:
        "IT & Automotive training delivered by industry experts to build job-ready skills.",
    },
  ];
 
  return (
    <>
      <div className="max-w-screen container mx-auto xl:px-[40px] px-4">
        <div className="bg-gray-50 mx-auto px-6 py-12 mb-10 rounded-md">
          <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-12">
            Our Services
          </h1>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="mx-auto bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <Footer />
    </>
  );
};
 
export default OurServices;