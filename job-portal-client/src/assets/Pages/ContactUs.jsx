import { useRef, useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { contacts } from "../../Utils/Api.utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !message) {
      toast.error("Please enter all fields");
      return;
    }

    try {
      await contacts({ name, email, phone: mobile, message });
      toast.success("Details Saved Successful!");

      // Clear fields
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error("Contact  error:", error.message);
      toast.error("Contact Error: " + error.message);
    }
  };

  const isFormValid = name && email && mobile && message;

  return (
    <>
      <section className="bg-[#e45d43] py-10">
        <div className="max-w-3xl mx-auto py-6">
          {/* Contact Form */}
          <form
            className="rounded-xl w-full flex flex-col gap-4 bg-white justify-center items-center p-5"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2 mb-2 justify-center">
              <FiMail size={28} className="text-[#e45d43]" />
              <h3 className="text-xl font-bold text-[#e45d43]">Contact Us</h3>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Your Phone"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-[40%] px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg transition duration-300 ${
                !isFormValid
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-90"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
      <Footer />
    </>
  );
}
