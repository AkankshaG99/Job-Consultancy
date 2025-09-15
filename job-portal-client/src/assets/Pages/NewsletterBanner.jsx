import { FiMail } from "react-icons/fi";

export default function NewsletterBanner() {
  return (
    <section className="bg-[#e45d43] py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Icon + Text */}
        <div className="flex items-center gap-4 text-white">
          <FiMail size={36} className="text-white" />
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              Get Job Notifications
            </h3>
            <p className="text-sm font-medium">
              Free Subscribe Our Newsletter Now!
            </p>
          </div>
        </div>

        {/* Right Side: Input + Button */}
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Type Your Email Address"
            className="w-full md:w-96 px-4 py-3 rounded-l-lg outline-none text-gray-700"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-r-lg hover:opacity-90">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
