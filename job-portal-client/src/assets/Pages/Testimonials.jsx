import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "LeBonko is the best. I have used this website for my work and the result have been excellent and reliable, and also the support team here is the best!",
      name: "Joseph Joestar",
      role: "Speedwagon Foundation",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      text: "This platform really helped me land my dream job. The interface is easy to use and the support is outstanding.",
      name: "Lisa Lisa",
      role: "Hamon Academy",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "Amazing experience! The job search was simple and quick, and the customer service was excellent.",
      name: "Dio Brando",
      role: "Dio Corp",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-16 px-6 md:px-20 ">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image + Reviewers */}
        <div className="relative flex justify-center">
          <div className="bg-orange-500 w-80 h-80 rounded-3xl flex items-center justify-center relative">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-60 h-60 object-cover rounded-xl shadow-lg"
            />

            {/* Reviewers Group */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2">
              <p className="font-semibold text-sm">Our Reviewers</p>
              <div className="flex -space-x-3">
                {testimonials.map((t, i) => (
                  <img
                    key={i}
                    src={t.image}
                    alt={t.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <button className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Testimonial */}
        <div className="bg-gray-50 p-10">
          <p className="text-red-500 font-semibold uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients <br/> Say <span className="text-purple-600">About Us</span>
          </h2>

          <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <p className="text-gray-600 italic mb-4">
              “{testimonials[current].text}”
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">{testimonials[current].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
