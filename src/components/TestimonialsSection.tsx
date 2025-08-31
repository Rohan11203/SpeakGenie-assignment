import { StarIcon } from "./Icons/StarIcon";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "“Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.”",
      author: "Priya, Mom of 6-year-old",
    },
    {
      quote:
        "“The 5-minute ‘reset’ before homework has been a game changer for focus.”",
      author: "Ravi, Dad of 10-year-old",
    },
    {
      quote:
        "“Our class uses the breathing games after lunch. Kids come back calm and ready.”",
      author: "Anika, Grade 4 Teacher",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Families Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mt-4 text-gray-600">{testimonial.quote}</p>
              <p className="mt-4 font-bold text-gray-800">
                -- {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
