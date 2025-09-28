import { useRef, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import Footer from "./Footer";


export default function ContactUs() {
  
  return (
    <>
      <section className="bg-[#e45d43] py-6">
        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <form className="rounded-xl w-full flex flex-col gap-4 bg-white justify-center items-center p-5">
            <div className="flex items-center gap-2 mb-2 justify-center">
              <FiMail size={28} className="text-[#e45d43]" />
              <h3 className="text-xl font-bold text-[#e45d43]">Contact Us</h3>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-[40%] px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        
      </section>
      <Footer />
    </>
  );
}
