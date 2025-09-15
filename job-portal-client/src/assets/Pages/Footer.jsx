import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6f55f2] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/50 pb-10">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Who We Are</h2>
          <p className="text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="#" className="hover:text-orange-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram />
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <h3 className="font-semibold mb-2">Buy Our Best Product</h3>
            <button className="bg-orange-500 px-5 py-2 rounded-md font-semibold hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>

        {/* Column 2: Candidates */}
        <div>
          <h2 className="text-xl font-bold mb-4">For Candidates</h2>
          <ul className="space-y-2 text-sm">
            <li>› Upload Resume</li>
            <li>› Candidate Dashboard</li>
            <li>› Job Applications</li>
            <li>› Bookmarks</li>
            <li>› Your Jobs</li>
          </ul>
        </div>

        {/* Column 3: Employers */}
        <div>
          <h2 className="text-xl font-bold mb-4">For Employers</h2>
          <ul className="space-y-2 text-sm">
            <li>› Browse Candidates</li>
            <li>› Employer Dashboard</li>
            <li>› Add Job</li>
            <li>› Job Package</li>
            <li>› Work Process</li>
          </ul>
        </div>

        {/* Column 4: Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Information</h2>
          <ul className="space-y-2 text-sm">
            <li>› About Us</li>
            <li>› Terms and Conditions</li>
            <li>› Privacy Policy</li>
            <li>› Careers with us</li>
            <li>› Site Map</li>
            <li>› Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm mt-6">
        © Copyright 2022, All Rights Reserved Design & Developed by{" "}
        <span className="text-orange-400 font-semibold">VW Themes</span>
      </div>

      {/* Back to top button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded shadow-lg"
      >
        ↑
      </a>
    </footer>
  );
}
