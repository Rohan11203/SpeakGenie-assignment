import { CheckIcon } from "./Icons/CheckIcon";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for new explorers",
      price: "Free",
      features: [
        "5 guided meditations",
        "2 sleep stories",
        "Parent starter kit",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      subtitle: "Unlock full potential",
      price: "₹299/mo",
      features: [
        "Unlimited meditations",
        "Sleep stories & calming music",
        "Printable guides for parents",
      ],
      buttonText: "Upgrade Now",
    },
    {
      name: "Family",
      subtitle: "For multiple kids",
      price: "₹499/mo",
      features: [
        "4 child profiles",
        "Rewards & streaks",
        "Classroom meditation pack",
      ],
      buttonText: "Get Family Plan",
    },
  ];

  return (
    <section className="py-12 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-gray-200 p-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free, cancel anytime. No hidden charges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-600">{plan.subtitle}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-purple-700">
                  {plan.price}
                </span>
              </div>
              <ul className="mt-6 space-y-4 text-gray-600 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full cursor-pointer bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
