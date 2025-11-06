import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResumeUpload() {
   const [fileName, setFileName] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsExtracting(true);

      setTimeout(() => {
        setIsExtracting(false);
        toast.success("Resume extracted successfully ✅");
      }, 3000);
    }
  };
  return (
    <>
    <section className="flex items-center justify-between bg-[#443CFF] rounded-[2rem] px-12 py-10 mx-10">
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="light"
            />
      <div className="relative flex-1 flex justify-center">
        <img
          src="/images/businesswoman.png"
          alt="Businesswoman"
          className="max-h-[420px] object-contain relative z-10"
        />
      </div>

      <div className="flex-1 text-white pl-12">
        <h2 className="text-3xl font-bold leading-snug mb-4">
          Get Matched The Most <br />
          Valuable Jobs, Just Drop Your <br />
          Resume at <span className="text-white">The Eu Consultancy</span>
        </h2>
        <p className="text-gray-200 text-sm mb-6">
          In the subject line of your email, write your name, the description of
          the position and its reference number. If you did not find the vacancy
          on the employer's website, it's helpful to state where you found it.
        </p>
         <input
          type="file"
          id="resumeUpload"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Upload Button (acts as label for file input) */}
        <label
          htmlFor="resumeUpload"
          className={`w-[50%] md:w-[50%] flex items-center gap-2 font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer 
            ${
              isExtracting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-[#443CFF] hover:bg-gray-100"
            }`}
        >
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
          {isExtracting ? "Extracting..." : "UPLOAD YOUR RESUME"}
        </label>

        {/* File Name Display */}
        {fileName && (
          <p className="mt-3 text-sm text-gray-200">
            📄 Selected: <span className="font-semibold">{fileName}</span>
          </p>
        )}
      </div>
    </section>
      </>
  );
}
