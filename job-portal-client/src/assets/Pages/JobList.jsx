import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { allJobs } from "../../Utils/Api.utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConsentFormPopup from "../../components/ConsentForm";
 
export default function FeaturedJobs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All jobs");
  const [loading, setLoading] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [openConsent, setOpenConsent] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const token = localStorage.getItem("token");
  console.log("Jobs Data:", jobsData);
 
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
    setLoading(true);
    try {
      const jobs = await allJobs();
      console.log("Fetched Jobs:", jobs);
      const jobsArray = Array.isArray(jobs?.data?.data) ? jobs.data.data : [];
 
      setJobsData(jobsArray);
    } catch (error) {
      toast.error("Something went wrong while fetching jobs");
      setJobsData([]);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchAllJobs();
  }, []);
 
  const handleApplyClick = (job) => {
    if (!token) {
      toast.info("Please log in to apply for jobs.");
      navigate("/login");
      return;
    }
 
    setSelectedJob(job);
    setOpenConsent(true);
  };
 
  const handleConsentSubmit = () => {
    toast.info(`Application submitted for ${selectedJob?.label}!`);
    setOpenConsent(false);
   
    // navigate("/profile");
 
  };
 
  const categories = ["All jobs"];
 
  return (
    <section className="py-16  md:px-20 bg-gray-50 relative mt-20">
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
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
        {loading ? (
          [...Array(4)].map((_, index) => <ShimmerCard key={index} />)
        ) : jobsData.length > 0 ? (
          jobsData.slice(0, 4).map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg ${job.color}`}
                >
                  <img src={job.image} alt={job.subtitle} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{job.label}</h3>
                  <p className="text-gray-500 text-sm">{job.subtitle}</p>
                </div>
              </div>
 
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
 
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
                <button
                  onClick={() => handleApplyClick(job)}
                  className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
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
      <div className="flex justify-center mt-10">
        <button
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90"
          onClick={() => navigate("/jobList")}
        >
          SHOW ALL JOBS →
        </button>
      </div>
 
      <ConsentFormPopup
        open={openConsent}
        onClose={() => setOpenConsent(false)}
        onSubmit={handleConsentSubmit}
      />
      <ToastContainer  />
    </section>
  );
}