import React from 'react'

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$29.99",
      features: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      highlight: false,
    },
    {
      title: "Premium+",
      price: "$89.99",
      features: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      highlight: true,
    },
    {
      title: "Basic",
      price: "$29.99",
      features: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold uppercase tracking-wide">
          Pricing Packages
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Choose A Package Tailored To{" "}
          <span className="text-indigo-600">Your Needs</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mx-[7rem]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-6 flex flex-col ${
              plan.highlight
                ? "bg-indigo-600 text-white scale-105"
                : "bg-white text-gray-900"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3
                className={`text-lg font-bold ${
                  plan.highlight ? "text-white" : "text-orange-600"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`text-lg font-bold ${
                  plan.highlight ? "text-white" : "text-orange-600"
                }`}
              >
                {plan.price}
              </p>
            </div>

            {/* Divider */}
            {!plan.highlight && (
              <hr className="border-gray-200 mb-4" />
            )}

            {/* Features */}
            <p
              className={`mb-4 text-sm ${
                plan.highlight ? "text-white" : "text-gray-600"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>

            <ul className="space-y-2 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span>✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-6 w-full py-3 rounded-lg font-semibold shadow-md transition ${
                plan.highlight
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90"
              }`}
            >
              Get This Plan
            </button>
          </div>
        ))}
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[80%] h-[50%] bg-purple-100 rounded-full blur-3xl opacity-40"></div>
      </div>
    </section>
  );
}

export default Pricing