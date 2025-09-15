import React from 'react'

const Registration = () => {
  const options = [
    {
      title: "Candidates",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      button: "Start Now",
      bgColor: "bg-purple-600",
      image:
        "https://img.freepik.com/premium-photo/portrait-smiling-businesswoman-holding-laptop_116547-12453.jpg",
    },
    {
      title: "Employers",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      button: "Start Now",
      bgColor: "bg-red-500",
      image:
        "https://img.freepik.com/premium-photo/businessman-holding-tablet-white-background_1258-148798.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <p className="text-red-500 font-semibold uppercase tracking-wide">
        Registration
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Pick A Side, <span className="text-purple-600">Candidate</span> or{" "}
        <span className="text-purple-600">Employer?</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {options.map((opt, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden text-white flex items-center justify-between ${opt.bgColor} p-8`}
          >
            {/* Left Content */}
            <div className="max-w-sm text-left">
              <h3 className="text-2xl font-bold mb-3">{opt.title}</h3>
              <p className="mb-6">{opt.description}</p>
              <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100">
                {opt.button}
              </button>
            </div>

            {/* Right Image */}
            <div className="hidden md:block w-1/2">
              <img
                src={opt.image}
                alt={opt.title}
                className="h-72 object-contain mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

export default Registration