import { FaBullhorn, FaHeadset, FaVideo, FaPencilAlt, FaCoins } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function JobCategories() {
  const categories = [
    { icon: <FaBullhorn />, title: "Marketing and Communication", jobs: 58 },
    { icon: <FaFileAlt />, title: "Project Management", jobs: 87 },
    { icon: <FaHeadset />, title: "Customer Support", jobs: 58 },
    { icon: <FaVideo />, title: "Flow Motion Designing", jobs: 23 },
    { icon: <FaPencilAlt />, title: "Design and Development", jobs: 32 },
    { icon: <FaCoins />, title: "Finance Management", jobs: 237 },
  ];

  return (
    <section className="bg-[#f8f7ff] py-12 px-6 md:px-16 rounded-xl">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-red-500 font-semibold uppercase tracking-wide">Job Categories</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          One Platform <span className="text-indigo-600">Many Solutions</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition"
          >
            <div className="text-2xl text-gray-800">{cat.icon}</div>
            <div>
              <h3 className="font-bold text-lg leading-snug">{cat.title}</h3>
              <p className="text-gray-500 text-sm">{cat.jobs} Jobs Available</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Jobs */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-indigo-600 font-semibold hover:underline flex items-center justify-center gap-2"
        >
          Show All Jobs →
        </a>
      </div>
    </section>
  );
}
