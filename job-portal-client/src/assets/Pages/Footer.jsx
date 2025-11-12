import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt  } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
 
export default function Footer() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("tttttttttt")
  return (
    <footer className="bg-[#6f55f2] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/50 pb-10">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm leading-relaxed mb-4 flex"> <span className="p-1 font-extrabold text-[18px]"><FaLocationDot/> </span>
           71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
          </p>
 
<p className="text-sm leading-relaxed mb-4 flex"> <span className="p-1 font-extrabold text-[18px]"><FaPhoneAlt/> </span>
           +44 7845 456859
          </p>
 
<p className="text-sm leading-relaxed mb-4 flex"> <span className="p-1 font-extrabold text-[18px]"><MdEmail/> </span>
           hr@theeuconsultancy.com
          </p>
 
          {/* Social Icons */}
          <div className="flex gap-4 mb-6 pl-1">
            <a href="#" className="hover:text-orange-400 text-[18px]">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-orange-400 text-[18px]">
              <SiIndeed  />
            </a>
          </div>
 
          {/* CTA Button */}
         
        </div>
 
        {/* Column 2: Candidates */}
        <div>
          <h2 className="text-xl font-bold mb-4">For Candidates</h2>
          <ul className="space-y-2 text-sm">
            <li>› Upload Resume</li>
            <li>› Job Search</li>
            {token && (
              <li
                className="cursor-pointer hover:text-orange-400 transition"
                onClick={() => navigate("/my-job")}
              >
                › Your Jobs
              </li>
            )}
          </ul>
        </div>
 
        {/* Column 3: Employers */}
        <div>
          <h2 className="text-xl font-bold mb-4">For Employers</h2>
          <ul className="space-y-2 text-sm">
            <li>› Add Job</li>
            <li>› Job Package</li>
          </ul>
        </div>
 
        {/* Column 4: Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Information</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-orange-400 transition"
            onClick={() => navigate("/about-us")}
            > › About Us</li>
            <li className="cursor-pointer">› Terms and Conditions</li>
            <li className="cursor-pointer">› Privacy Policy</li>
            <li className="cursor-pointer">› Careers with us</li>
            <li className="cursor-pointer">› Site Map</li>
            <li className="cursor-pointer hover:text-orange-400 transition"
            onClick={() => navigate("/contact")}
            >› Contact Us</li>
          </ul>
        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="text-center text-sm mt-6">
        © Copyright {new Date().getFullYear()}, All Rights Reserved
       
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