import { useState } from "react";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FeaturedJobs() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("All jobs");

  const jobs = [
    {
      id: 1,
      title: "Junior UI/UX Designer",
      company: "Amilia Software",
      logo: "https://via.placeholder.com/40x40.png?text=A",
      description:
        "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
      tags: ["Bengaluru", "Fulltime", "Design", "On site"],
      salary: "$47k Annually",
      applicants: "23 Applicants",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      title: "General Ledger Accountant",
      company: "Shopify E-commerce",
      logo: "https://via.placeholder.com/40x40.png?text=S",
      description:
        "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
      tags: ["Bengaluru", "Fulltime", "Development", "On site"],
      salary: "$47k Annually",
      applicants: "23 Applicants",
      color: "bg-green-100 text-green-600",
    },

    {
      id: 3,
      logo: <FaFacebookF className="text-white text-2xl" />,
      title: "Profiling Assistant",
      company: "Metaverse Corporation",
      description:
        "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
      tags: ["Scotland", "Fulltime", "Development", "On site"],
      salary: "$47k Annually",
      applicants: "23 Applicants",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      logo: <FaPinterestP className="text-white text-2xl" />,
      title: "Product Sale Specialist",
      company: "Pinterest Corporation",
      description:
        "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
      tags: ["Munich", "Fulltime", "Development", "On site"],
        salary: "$47k Annually",
      applicants: "23 Applicants",
      color: "bg-green-100 text-green-600",
    },
  ];

  const categories = ["All jobs"];

  return (
    <section className="py-16  md:px-20 bg-gray-50 relative mt-20">
      <p className="text-red-500 font-semibold uppercase tracking-wide text-center">
        Featured Jobs
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Look Into Our <span className="text-purple-600">Featured Jobs</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center items-center text-center mb-12 ">
  <div className="flex gap-4  rounded-xl p-2 w-full md:w-auto">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveTab(cat)}
        className={`px-10 py-2 rounded-lg font-medium transition ${
          activeTab === cat
            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>


      {/* Job Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${job.color}`}
              >
                <img src={job.logo} alt={job.company} className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.company}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-sm">{job.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex flex-col text-sm text-gray-600 gap-1">
                <span className="flex items-center gap-2">
                  <AiOutlineDollar /> {job.salary}
                </span>
                <span className="flex items-center gap-2">
                  <FaUsers /> {job.applicants}
                </span>
              </div>
              <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90"
        onClick={() => navigate("/jobList")}
        >
          SHOW ALL JOBS →
        </button>
      </div>
    </section>
  );
}
