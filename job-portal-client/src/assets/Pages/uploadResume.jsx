import React from 'react'

export default function ResumeUpload() {
  return (
    <section className="flex items-center justify-between bg-[#443CFF] rounded-[2rem] px-12 mx-10 py-10">
      {/* Left side image */}
      <div className="relative flex-1 flex justify-center">
        <img
          src="/images/businesswoman.png" // replace with your image path
          alt="Businesswoman"
          className="max-h-[420px] object-contain relative z-10"
        />

        {/* Background decorative elements */}
        {/* <img
          src="/images/shapes.png" // replace with decorative shapes background
          alt=""
          className="absolute top-0 left-0 w-full h-full object-contain z-0"
        /> */}
      </div>

      {/* Right side text */}
      <div className="flex-1 text-white pl-12">
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Get Matched The Most <br />
          Valuable Jobs, Just Drop Your <br />
          Resume at <span className="text-white">LeBonko</span>
        </h2>
        <p className="text-gray-200 text-sm mb-6">
          In the subject line of your email, write your name, the description of
          the position and its reference number. If you did not find the vacancy
          on the employer's website, it's helpful to state where you found it.
        </p>
        <button className="flex items-center gap-2 bg-white text-[#443CFF] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12"
            />
          </svg>
          UPLOAD YOUR RESUME
        </button>
      </div>
    </section>
  );
}
