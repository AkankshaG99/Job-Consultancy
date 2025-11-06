import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { FaUsers } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {allJobs} from "../../Utils/Api.utils"

const AllJobs = () => {
  const locationHook = useLocation();
  const queryParams = new URLSearchParams(locationHook.search);
  const [loading, setLoading] = useState(true);
  const [jobsData, setJobsData] = useState([]);

  const title = queryParams.get("title")?.toLowerCase() || "";
  const loc = queryParams.get("location")?.toLowerCase() || "";

  const ShimmerCard = () => (
   
      <div className="animate-pulse p-4 bg-gray-200 rounded-lg w-full flex gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          <div className="h-3 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    
);

  const fetchAllJobs = async () => {
    setLoading(true)
    try{
        const jobs = await allJobs(title, loc)
        console.log(jobs?.data?.data, "ooooooooooooo")
        const jobsArray = Array.isArray(jobs?.data?.data)
        ? jobs.data.data
        : [];

      setJobsData(jobsArray);
    }catch (error){
        toast.error("Something went wrong while fetching jobs");
        setJobsData([]);
    }finally{
    setLoading(false);
    }
  }

//   const jobs = [
//     {
//       id: 1,
//       title: "Junior UI/UX Designer",
//       company: "Amilia Software",
//       logo: "https://via.placeholder.com/40x40.png?text=A",
//       description:
//         "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
//       tags: ["Bengaluru", "Fulltime", "Design", "On site"],
//       salary: "$47k Annually",
//       applicants: "23 Applicants",
//       color: "bg-red-100 text-red-600",
//     },
//     {
//       id: 2,
//       title: "General Ledger Accountant",
//       company: "Shopify E-commerce",
//       logo: "https://via.placeholder.com/40x40.png?text=S",
//       description:
//         "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
//       tags: ["Bengaluru", "Fulltime", "Development", "On site"],
//       salary: "$47k Annually",
//       applicants: "23 Applicants",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       id: 3,
//       logo: <FaFacebookF className="text-white text-2xl" />,
//       title: "Profiling Assistant",
//       company: "Metaverse Corporation",
//       description:
//         "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
//       tags: ["Scotland", "Fulltime", "Development", "On site"],
//       salary: "$47k Annually",
//       applicants: "23 Applicants",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       id: 4,
//       logo: <FaPinterestP className="text-white text-2xl" />,
//       title: "Product Sale Specialist",
//       company: "Pinterest Corporation",
//       description:
//         "We are looking for a talented designer to help us create beautiful and functional interfaces for our company. Your role requires you to understand users very well.",
//       tags: ["Munich", "Fulltime", "Development", "On site"],
//       salary: "$47k Annually",
//       applicants: "23 Applicants",
//       color: "bg-green-100 text-green-600",
//     },
//     // ✅ More Jobs Added:
//     {
//       id: 5,
//       title: "Frontend React Developer",
//       company: "Google LLC",
//       logo: "https://via.placeholder.com/40x40.png?text=G",
//       description:
//         "Looking for a skilled React developer with experience in Tailwind and REST APIs.",
//       tags: ["Hyderabad", "Fulltime", "Development", "Remote"],
//       salary: "$80k Annually",
//       applicants: "45 Applicants",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       id: 6,
//       title: "Backend Node.js Engineer",
//       company: "Amazon Web Services",
//       logo: "https://via.placeholder.com/40x40.png?text=AWS",
//       description:
//         "Responsible for building scalable backend services using Node.js and MongoDB.",
//       tags: ["Pune", "Fulltime", "Backend", "Hybrid"],
//       salary: "$95k Annually",
//       applicants: "30 Applicants",
//       color: "bg-yellow-100 text-yellow-600",
//     },
//     {
//       id: 7,
//       title: "Data Analyst",
//       company: "Microsoft Corp.",
//       logo: "https://via.placeholder.com/40x40.png?text=M",
//       description:
//         "Analyze datasets, create dashboards and assist teams in data-driven decision making.",
//       tags: ["Delhi", "Fulltime", "Analytics", "On site"],
//       salary: "$70k Annually",
//       applicants: "19 Applicants",
//       color: "bg-purple-100 text-purple-600",
//     },
//     {
//       id: 8,
//       title: "Human Resource Manager",
//       company: "Tesla Inc.",
//       logo: "https://via.placeholder.com/40x40.png?text=T",
//       description:
//         "Seeking an HR Manager with great communication and employee management skills.",
//       tags: ["California", "Fulltime", "HR", "On site"],
//       salary: "$65k Annually",
//       applicants: "12 Applicants",
//       color: "bg-pink-100 text-pink-600",
//     },
//     {
//       id: 9,
//       title: "DevOps Engineer",
//       company: "Netflix",
//       logo: "https://via.placeholder.com/40x40.png?text=N",
//       description:
//         "Responsible for CI/CD pipelines, Docker, Kubernetes, AWS cloud deployments.",
//       tags: ["Remote", "Fulltime", "DevOps", "Remote"],
//       salary: "$110k Annually",
//       applicants: "28 Applicants",
//       color: "bg-indigo-100 text-indigo-600",
//     },
//     {
//       id: 10,
//       title: "Flutter Mobile Developer",
//       company: "Adobe Systems",
//       logo: "https://via.placeholder.com/40x40.png?text=AD",
//       description:
//         "Build cross-platform apps using Flutter and Firebase with pixel-perfect UI.",
//       tags: ["Mumbai", "Fulltime", "Mobile", "Hybrid"],
//       salary: "$75k Annually",
//       applicants: "21 Applicants",
//       color: "bg-orange-100 text-orange-600",
//     },
//   ];

  useEffect(() => {
  fetchAllJobs()
}, [title, loc]);

console.log(jobsData, "llllllllllllllllllllllllllllll")


  return (
    <>
      <section className="py-8 px-6 md:px-20 bg-gray-50 relative">
        <div className="mb-8">
          <p className="text-red-500 font-semibold uppercase tracking-wide text-center">
            Featured Jobs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
        {loading ? (
            [...Array(5)].map((_, index) => <ShimmerCard key={index} />)
          ) : jobsData.length > 0 ? (
            jobsData.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg ${job.color}`}
                    >
                      <img
                        src={job.image}
                        alt={job.subtitle}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{job.label}</h3>
                      <p className="text-gray-500 text-sm">{job.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm">
                    {job.description}
                  </p>

                  {/* Tags */}
                  {/* {Array.isArray(job.tags) && job.tags.length > 0 && ( */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* {job.tags.map((tag, idx) => ( */}
                      <span
                        // key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                      >
                        {job.location}
                      </span>
                    {/* ))} */}
                  </div>
                {/* )} */}
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
              ))
            ) : (
                // ✅ When no jobs found
                <p className="text-center text-gray-500 col-span-2">
                  No jobs available.
                </p>
              )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllJobs;
