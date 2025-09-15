import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How to register yourself on LeBonko?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident, sunt in culpa qui officia.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can easily upgrade or downgrade your plan from your account settings at any time.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your account email from the profile section under account settings.",
    },
    {
      question: "What is your plan cancellation policy?",
      answer:
        "You can cancel anytime. Once canceled, your plan will remain active until the end of the billing cycle.",
    },
  ];

  return (
    <section className="py-16 bg-white">
        <div className="text-center mb-12 px-6 lg:px-12">
             <p className="text-orange-500 font-semibold uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl font-bold mb-8">
            Have A Question?{" "}
            <span className="text-indigo-600">We’re Here To Help.</span>
          </h2>
        </div>
      <div className=" mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center py-10">
        {/* Left Side Image */}
        <div className="relative flex justify-center">
          <img
            src=""
            alt="FAQ"
            className="relative z-10 h-[50%] w-[80%] rounded-lg"
          />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-400 rounded-lg -z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 rounded-lg -z-10"></div>
        </div>

        {/* Right Side FAQs */}
        <div>
         

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 border ${
                  openIndex === index
                    ? "bg-red-400 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full font-semibold"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      openIndex === index ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
