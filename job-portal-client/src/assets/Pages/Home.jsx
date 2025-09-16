import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import backgroundImage1 from "/images/background.png";
import image1 from "/images/right-image.png";
import JobCategories from "./JobCategories";
import RegisterStep from "./RegisterStep";
import ResumeUpload from "./uploadResume";
import JobList from "./JobList";
import Testimonials from "./Testimonials";
import BrandPartners from "./BrandPartners";
import OurRecords from "./OurRecords";
import NewsSection from "./NewsSection";
import Pricing from "./Pricing";
import FAQSection from "./Faq";
import Registration from "./Registration";
import Footer from "./Footer";

const Home = () => {
 return (
  <div>

  
  <div className='max-w-screen container mx-auto xl:px-[40px] px-4'>

  
    <div className="relative bg-gray-900 text-white rounded-2xl overflow-hidden mb-5">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
        {/* Left Side Text */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Browse. Apply. <br /> Prepare Your <br /> <span className="text-white">Future.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Millions of people are searching for jobs, salary information, company reviews, 
            and interview questions. See what others are looking on LeBonko today.
          </p>

          {/* Search Bar */}
          <div className="mt-6 bg-white rounded-xl flex flex-col md:flex-row items-center shadow-lg overflow-hidden">
            <div className="flex items-center px-3 py-3 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Job Title, Keywords"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center px-3 py-3 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
              <FaSearchLocation className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Location, Pincode"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <button className="w-full md:w-auto bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
              BROWSE JOBS
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-4">
            <p className="font-semibold">Popular Searches:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["All jobs", "Developer", "Finance", "Health care"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white text-gray-800 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Person */}
        <div className="relative mt-8 md:mt-0 md:ml-10">
          {/* Purple Diagonal Shape */}
          <div className="absolute -top-10 right-0 w-72 h-full  transform rotate-12 rounded-2xl opacity-80" />
          <img
            src={image1}
            alt="Businessman"
            className="relative z-10 max-h-[400px] object-contain"
          />

          {/* Quote Box */}
          <div className="absolute bottom-0 left-0 bg-white text-gray-800 p-4 rounded-xl shadow-md flex items-start gap-2 z-10">
            <FaQuoteLeft className="text-indigo-600 text-2xl" />
            <p className="text-sm">
              Engineering Excellence Meets Professional Growth.
            </p>
          </div>
        </div>
      </div>
    </div>

            {/* <JobCategories/> */}
            <RegisterStep/>
            <ResumeUpload/>
            
            
    </div>
    <JobList/>
    <Testimonials/>
    <BrandPartners/>
    <OurRecords/>
    <NewsSection/>
    <Pricing/>
    <FAQSection/>
    <Registration/> 
    <Footer/>
    </div>
  );
}

export default Home
