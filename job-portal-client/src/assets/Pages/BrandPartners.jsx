import React from 'react'

export default function BrandPartners() {
  const brands = [
    { name: "Amazon", logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png", bg: "bg-orange-500" },
    { name: "Facebook", logo: "https://cdn-icons-png.flaticon.com/512/733/733547.png", bg: "bg-purple-500" },
    { name: "Airbnb", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png", bg: "bg-red-400" },
    { name: "Shopify", logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png", bg: "bg-green-400" },
    { name: "Line", logo: "https://cdn-icons-png.flaticon.com/512/889/889154.png", bg: "bg-lime-300" },
    { name: "Pinterest", logo: "https://cdn-icons-png.flaticon.com/512/733/733558.png", bg: "bg-red-500" },
    { name: "Evernote", logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png", bg: "bg-green-300" },
    { name: "Snapchat", logo: "https://cdn-icons-png.flaticon.com/512/733/733614.png", bg: "bg-yellow-300" },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <p className="text-red-500 font-semibold uppercase mb-2">
            Brand Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            So Great and Very Through <br /> and{" "}
            <span className="text-purple-600">On Time!</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Brands partnered with LeBonko for easy hiring process of employees.
            Upload your Resume and get your job profile seen for better results.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90">
            Check Placements
          </button>
        </div>

        {/* Right Side Logos */}
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`${brand.bg} w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-lg shadow-md`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute left-0 top-1/2 w-40 h-40 bg-purple-600 rounded-full -z-10"></div>
      <div className="absolute right-0 bottom-0 w-52 h-52 bg-orange-500 rounded-full -z-10"></div>
    </section>
  );
}
