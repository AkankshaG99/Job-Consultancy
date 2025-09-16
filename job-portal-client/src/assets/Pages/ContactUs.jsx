import { FiMail } from "react-icons/fi";
import Footer from "./Footer";

export default function ContactUs() {
  return (
    <>
    <section className="bg-[#e45d43] py-6">
      <div className="max-w-3xl mx-auto">
        {/* Contact Form */}
        <form className="rounded-xl w-full flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-[#fff]">
            <FiMail size={28} />
            <h3 className="text-xl font-bold">Contact Us</h3>
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
            className="px-6 py-3 bg-[blue] text-white font-semibold rounded-lg hover:opacity-90 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      
    </section>
    <Footer/>
    </>
  );
}
