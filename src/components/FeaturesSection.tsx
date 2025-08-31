export const FeaturesSection = () => {
  const features = [
    {
      title: "Ad-Free & Safe",
      description:
        "Child-first design with privacy controls and no external ads.",
    },
    {
      title: "Rewards that Motivate",
      description:
        "Stars, badges, and gentle streaks encourage healthy habits—no pressure.",
    },
    {
      title: "Offline Access",
      description: "Download favorite sessions for calm on the go.",
    },
    {
      title: "Sleep Mode",
      description:
        "Fade-out music and dim visuals help kids drift off peacefully.",
    },
    {
      title: "Classroom Friendly",
      description:
        "Teacher packs with 5-minute start-of-class resets and posters.",
    },
    {
      title: "Multi-Child Profiles",
      description: "Personalized tracks for each child in the family.",
    },
  ];

  return (
    <section id="features" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Built for Kids, Loved by Parents
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
