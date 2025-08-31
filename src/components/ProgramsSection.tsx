export const ProgramsSection = () => {
  const programs = [
    {
      title: "Little Explorers (4-6)",
      description:
        "Three to five-minute stories with animal friends that teach belly-breathing, relaxation, and focus through imagination.",
      features: ["🏠 Cozy Corner", "🎵 Calm Music", "🏅 Sticker Badges"],
      imageUrl:
        "https://placehold.co/500x600/F3E8FF/A855F7?text=Little+Explorers",
      imageLeft: true,
    },
    {
      title: "Brave Thinkers (7-10)",
      description:
        "Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.",
      features: ["⏱️ Focus Timer", "📝 Gratitude Notes", "🌟 Streak Rewards"],
      imageUrl:
        "https://placehold.co/500x600/ECFDF5/10B981?text=Brave+Thinkers",
      imageLeft: false,
    },
    {
      title: "Calm & Curious (11-14)",
      description:
        "Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.",
      features: ["🧠 Mindset Minis", "😴 Sleep Stories", "🃏 Goal Cards"],
      imageUrl:
        "https://placehold.co/500x600/DBEAFE/3B82F6?text=Calm+%26+Curious",
      imageLeft: true,
    },
  ];

  return (
    <section id="programs" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Programs for Every Age
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Pick a track or mix and match. Each program grows with your child.
          </p>
        </div>

        <div className="space-y-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                !program.imageLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-4 text-gray-600">{program.description}</p>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                  {program.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
