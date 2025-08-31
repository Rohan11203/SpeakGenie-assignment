import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What ages is this for?",
      answer:
        "Our programs are designed for children between the ages of 4 and 14. We have different content tailored to various age groups within this range.",
    },
    {
      question: "How long are the sessions?",
      answer:
        "Most sessions are short, typically between 3 to 10 minutes, making them easy to fit into a daily routine. We also offer longer sleep stories.",
    },
    {
      question: "Is it safe and ad-free?",
      answer:
        "Yes. We designed this for children. No external ads, clear privacy options, and parent controls. Our platform is a completely safe and secure environment for kids.",
    },
    {
      question: "Can schools use it?",
      answer:
        "Absolutely! We have a 'Classroom Pack' and resources specifically designed for teachers and educators to use in a school setting.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 font-semibold text-gray-800"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
