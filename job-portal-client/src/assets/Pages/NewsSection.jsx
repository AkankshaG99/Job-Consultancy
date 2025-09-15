import React from 'react'

export default function NewsSection() {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
      tag: "information",
      title: "A guide for startups and beyond. Product to Branding.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "23rd Oct 23 12:11 pm",
      author: "John Walter",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
      tag: "information",
      title: "Tips to keep your workplace happy for employees",
      description:
        "Please pay them more instead of wasting time and money on useless activities or useless interns. Lorem ipsum dolor sit amet.",
      date: "23rd Oct 23 12:11 pm",
      author: "John Walter",
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      tag: "information",
      title: "5 Tips for answering interview questions for freshers.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "23rd Oct 23 12:11 pm",
      author: "John Walter",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <p className="text-red-500 font-semibold uppercase tracking-wide">
        News Articles
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Success Stories of <span className="text-purple-600">Our Team</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <span className="text-red-500 text-sm font-semibold uppercase">
                {article.tag}
              </span>
              <h3 className="mt-2 font-bold text-lg text-gray-900">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{article.description}</p>

              {/* Footer */}
              <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                <p>
                  {article.date} by{" "}
                  <span className="text-purple-600 font-medium cursor-pointer hover:underline">
                    {article.author}
                  </span>
                </p>
                <button className="text-black font-semibold hover:text-purple-600">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
