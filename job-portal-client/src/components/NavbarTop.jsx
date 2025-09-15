import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function TopBar() {
  return (
    <div className='max-w-screen container mx-auto xl:px-[40px] px-4'>
    <div className="bg-indigo-600 text-white text-sm py-2 px-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <span>Write Us Here!</span>
        <MdEmail className="text-lg" />
        <a href="mailto:help@lebonko.com" className="hover:underline">
          help@lebonko.com
        </a>
      </div>

      {/* Center Section */}
      <div>
        <a href="#consultation" className="hover:underline">
          Get Free Job Consultation <span className="underline">Here Now.</span>
        </a>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-gray-200"><FaPinterestP /></a>
      </div>
    </div>
    </div>
  );
}
