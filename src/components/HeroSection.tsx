import kidImage from "../assets/kidimage.jpg";
export const HeroSection = () => {
  const features = [
    { icon: "🧠", text: "Improves Focus" },
    { icon: "🧘", text: "Reduces Stress" },
    { icon: "😴", text: "Better Sleep" },
    { icon: "❤️", text: "Builds Empathy" },
  ];

  return (
    <section className="py-12 md:py-18 overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 md:items-stretch">
        <div className="text-center md:text-left flex flex-col justify-center">
          <div>
            <span className="inline-block bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold tracking-wide">
              Calm Minds, Happy Hearts
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Mindfulness & Meditation for Kids (4-14)
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Fun, story-based meditations that build focus, kindness, and
              confidence. Safe, ad-free, and crafted with child-development
              experts.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-600 cursor-pointer text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-green-500 cursor-pointer text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Explore Programs
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3 bg-white border border-gray-100 shadow-lg p-3 rounded-2xl text-gray-700"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-semibold text-sm sm:text-base">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 md:mt-0">
          <div className="bg-gray-200 w-full h-96 rounded-2xl min-h-[450px] md:min-h-full">
            <img
              src={kidImage}
              alt="Kid meditating"
              className="w-full h-full  rounded-2xl"
            />
          </div>
          <div className="absolute bg-white p-4 rounded-xl shadow-2xl w-auto left-8 right-8 bottom-10 sm:w-72 sm:left-auto sm:right-0 md:-left-10 transform transition-transform hover:scale-105">
            <h3 className="font-bold text-gray-800">Today's Journey</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <span>🐉</span> <span>Dragon Breath (3 min)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🦋</span> <span>Butterfly Body Scan (5 min)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🌙</span> <span>Sleep Story: Star Boat (7 min)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
