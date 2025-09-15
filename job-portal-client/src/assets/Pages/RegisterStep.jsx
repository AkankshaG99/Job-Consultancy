import { useState } from "react";
import step1 from "/images/step1.png";
import step2 from "/images/step2.png";
import step3 from "/images/step3.png";

export default function RegisterStep() {
 return (
  <section className="py-16 px-6 md:px-20">
    {/* Section Header */}
    <div className="text-center mb-12">
      <p className="text-red-500 font-semibold uppercase tracking-wide">
        HOW IT WORKS
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Follow The Steps, <span className="text-indigo-600">We'll Help You</span>
      </h2>
    </div>

    {/* Content Row */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      
      <div className=" rounded-xl p-6 md:p-10">
        <div className="bg-white rounded-xl p-4 md:p-6 md:w-[600px]">
          <img
            src={step1} // replace with your actual image path
            alt="Register form preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      
      <div className="max-w-lg">
        <p className="text-indigo-600 font-medium mb-2">Step 1</p>
        <h3 className="text-2xl font-bold mb-4">Register Your Account</h3>
        <p className="text-gray-600 text-sm mb-6">
          Register your account via email, Google and Facebook account. By
          registering an account you can use our basic features for finding
          jobs.
        </p>

        {/* Stats */}
        <div className="flex gap-10 mb-6">
          <div>
            <p className="text-3xl font-bold">1M</p>
            <p className="text-sm text-gray-500">Registered Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">23K</p>
            <p className="text-sm text-gray-500">Registered Companies</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
          Sign Up Now
        </button>
      </div>
    </div>

     <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-right">
          <p className="text-indigo-600 font-medium mb-2">Step 2</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Upload Your Resume
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Pre Content for recruitment, you can use post from LinkedIn and then
            import it into our hiring post, to speed up the process.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            Read More
          </button>
        </div>

       
        <div className=" rounded-xl p-6 md:p-10">
            <div className="bg-white rounded-xl p-4 md:p-6 md:w-[600px]">
            <img
                src={step2} // replace with your actual image path
                alt="Register form preview"
                className="w-full h-auto object-contain"
            />
            </div>
        </div>
      </div>


        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      
      <div className=" rounded-xl p-6 md:p-10">
        <div className="bg-white rounded-xl p-4 md:p-6 md:w-[600px]">
          <img
            src={step3} // replace with your actual image path
            alt="Register form preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      
      <div className="max-w-lg">
        <p className="text-indigo-600 font-medium mb-2">Step 3</p>
        <h3 className="text-2xl font-bold mb-4">Do The Selection</h3>
        <p className="text-gray-600 text-sm mb-6">
          Do a selection of your prospective employers, we also provide indicators to match the criteria that your company wants. We do the best for you.
        </p>

        {/* Button */}
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
          Start Now
        </button>
      </div>
    </div>
  </section>
);

}
