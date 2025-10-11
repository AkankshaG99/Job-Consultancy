import React from 'react'
import { FaCloud, FaCode, FaDatabase } from "react-icons/fa";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { DocumentTextIcon, SparklesIcon, LinkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Footer from "./Footer";
import career from "/images/career.jpg"

const Training = () => {

    const courses = [
        {
          id: 1,
          icon: <FaCloud className="text-sky-500 text-3xl" />,
          title: "DevOps",
          category: "Information Technology",
          description:
            "Master CI/CD, containerization, and cloud infrastructure for seamless software delivery.",
          topics: ["Docker & Kubernetes", "AWS & Azure", "Jenkins Pipelines", "Terraform IaC"],
          price: "£2,499",
        },
        {
          id: 2,
          icon: <FaCode className="text-sky-500 text-3xl" />,
          title: "Full Stack Development",
          category: "Information Technology",
          description:
            "Become a versatile developer with expertise in both front-end and back-end technologies.",
          topics: ["Python & Node.js", "React & Vue", "SQL & NoSQL", "API Development"],
          price: "£2,999",
        },
        {
          id: 3,
          icon: <HiOutlineCubeTransparent className="text-sky-500 text-3xl" />,
          title: "SAP",
          category: "Enterprise Software",
          description:
            "Gain expertise in the world’s leading ERP software to manage business operations and customer relations.",
          topics: ["SAP S/4HANA", "Financial Accounting", "Supply Chain Mgmt", "ABAP Programming"],
          price: "£3,200",
        },
        {
          id: 4,
          icon: <FaDatabase className="text-sky-500 text-3xl" />,
          title: "Oracle",
          category: "Database Management",
          description:
            "Master Oracle databases, from administration and SQL programming to cloud solutions.",
          topics: [
            "Oracle Database 19c",
            "SQL & PL/SQL",
            "Performance Tuning",
            "Cloud Infrastructure",
          ],
          price: "£2,850",
        },

        {
            id: 5,
            icon: <FaDatabase className="text-sky-500 text-3xl" />,
            title: "Desktop Support & EUC",
            category: "IT Support",
            description:
              "Become the backbone of IT operations with essential skills in end-user computing and support.",
            topics: [
              "Windows & macOS",
              "Troubleshooting",
              "Active Directory",
              "ITIL Foundations",
            ],
            price: "£1,800",
          },

          {
            id: 6,
            icon: <FaDatabase className="text-sky-500 text-3xl" />,
            title: "Automotive Cybersecurity",
            category: "Cybersecurity",
            description:
              "Specialize in protecting connected vehicles from cyber threats in a rapidly growing industry.",
            topics: [
              "ISO/SAE 21434",
              "CAN Bus Security",
              "Penetration Testing",
              "Threat Modeling",
            ],
            price: "£3,500",
          },

          {
            id: 7,
            icon: <FaDatabase className="text-sky-500 text-3xl" />,
            title: "IT Cybersecurity & Infrastructure",
            category: "Cybersecurity",
            description:
              "A comprehensive program covering network security, ethical hacking, and infrastructure defense.",
            topics: [
              "Network Security",
              "Ethical Hacking",
              "Cloud Security (AWS/Azure)",
              "SIEM Tools",
            ],
            price: "£3,100",
          },
      ];

      const FeatureItem = ({ icon: Icon, title, description }) => (
        <div className="flex items-start space-x-4 mb-6">
          {/* Icon Container */}
          <div className="flex-shrink-0 pt-1">
            {/* The icons in the original image appear to be a light blue/teal inside a pill shape.
              This uses a light blue text color and no background to achieve a clean look 
              similar to the provided image's aesthetic. 
            */}
            <Icon className="h-6 w-6 text-blue-500" aria-hidden="true" />
          </div>
          
          {/* Text Content */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      );

      const FeatureCard = ({ icon: Icon, title, description }) => (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start text-left h-full">
          {/* Icon */}
          <div className="mb-4">
            {/* The icons in the original image appear as a light blue inside a rounded square/pill. */}
            {/* This uses a slightly darker blue text for clarity against white, similar to the original's visual weight. */}
            <Icon className="h-8 w-8 text-blue-500" aria-hidden="true" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-base text-gray-600">
            {description}
          </p>
        </div>
      );

      
  return (
    <>
    <section className="flex flex-col items-center justify-center text-center py-5 mt-8">
    <p className="text-orange-500 text-[15px] mb-3 text-lg">
      Training & Career Development
    </p>

    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B132B] mb-4">
      Unlock Your Professional Potential
    </h1>

    <p className="text-gray-600 text-md max-w-3xl mb-8">
      We provide career-boosting training programs across the UK, Germany, and
      Europe, empowering you with the skills and guidance to achieve your
      career goals.
    </p>

    <div className="flex flex-col md:flex-row gap-4">
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-blue-dark text-white px-5 py-2 rounded-lg font-medium transition duration-300">
        Explore Our Courses
      </button>
      <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-lg font-medium transition duration-300">
        Learn About Career Support
      </button>
    </div>
  </section>

  <section className="bg-gray-50 py-16 px-6 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B132B] mb-3">
          Professional Training Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upgrade your skills and open doors to new job opportunities with our
          expert-led training programs in high-demand fields.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100  flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
          >
              <div className="flex items-center gap-3 mb-2 px-6 pt-6 pb-3">
                {course.icon}
                <div>
                  <h3 className="font-bold text-lg text-[#0B132B]">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.category}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-5 text-[12px] px-6">{course.description}</p>

              <ul className="text-sm text-gray-700 space-y-2 bg-gray-100 p-6 rounded-b-2xl">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✔</span>
                    {topic}
                  </li>
                ))}
              </ul>
            

            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-bold text-lg">{course.price}</span>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <div className="max-w-7xl mx-auto p-8 lg:p-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Text and Features */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
            Career Support & Job Assistance
          </h2>
          
          <p className="text-lg text-gray-600 mb-10">
            We don't just train you—we help you get hired. Our comprehensive support 
            system is designed to build your professional presence and connect you with 
            opportunities.
          </p>
          
          {/* Features List */}
          <div className="space-y-6">
            <FeatureItem
              icon={DocumentTextIcon}
              title="Personalized CV Writing & Optimization"
              description="We craft compelling CVs that highlight your skills and experience to catch the eye of recruiters."
            />
            
            <FeatureItem
              icon={SparklesIcon}
              title="ATS-Friendly Resume Creation"
              description="Our experts design resumes optimized to pass through Applicant Tracking Systems (ATS) used by top companies."
            />
            
            <FeatureItem
              icon={LinkIcon}
              title="LinkedIn Profile Building"
              description="Boost your professional visibility with a powerful LinkedIn profile that attracts job opportunities."
            />
            
            <FeatureItem
              icon={GlobeAltIcon}
              title="Access to Our Client Network"
              description="Leverage our extensive network of clients and partners to find exclusive job openings across Europe."
            />
          </div>
        </div>
        
        {/* Right Column: Image */}
        {/* The image is a foggy mountain view with a light overlay */}
        <div className="order-1 lg:order-2 rounded-xl shadow-xl overflow-hidden min-h-[300px] lg:min-h-full">
          <img src={career} height={100} alt="career" className="w-full h-full object-cover" />
          </div>
        </div>
        
      </div>

    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Why Choose The EU Consultancy?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          We are committed to your success, providing a job-oriented training approach that delivers results.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={AcademicCapIcon} // Placeholder icon for "Industry Professional Trainers"
            title="Industry Professional Trainers"
            description="Learn from certified experts with years of real-world experience in their fields."
          />
          <FeatureCard
            icon={BriefcaseIcon} // Placeholder icon for "Real-World Projects"
            title="Real-World Projects"
            description="Apply your skills to hands-on projects and case studies that mirror industry challenges."
          />
          <FeatureCard
            icon={ChartBarIcon} // Placeholder icon for "Job-Oriented Training"
            title="Job-Oriented Training"
            description="Our curriculum is designed in collaboration with industry leaders to meet current job market demands."
          />
          <FeatureCard
            icon={UsersIcon} // Placeholder icon for "One-on-One Mentorship"
            title="One-on-One Mentorship"
            description="Receive personalized career counseling and guidance from dedicated mentors."
          />
          <FeatureCard
            icon={ShieldCheckIcon} // Placeholder icon for "Strong Placement Support"
            title="Strong Placement Support"
            description="We provide dedicated assistance to help you land your dream job across the UK and EU."
          />
        </div>
      </div>
    </div>

            <Footer/>
  </>
  )
}

export default Training
