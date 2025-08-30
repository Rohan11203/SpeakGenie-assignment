export const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Child-Friendly Guided Meditations",
      mindery: "✅ Story-based, fun & short",
      others: "❌ Generic adult content",
    },
    {
      feature: "Safe & Ad-Free Environment",
      mindery: "✅ 100% secure for kids",
      others: "❌ Ads & distractions",
    },
    {
      feature: "Age-Specific Programs",
      mindery: "✅ Tailored for 4-14",
      others: "❌ One-size-fits-all",
    },
    {
      feature: "Parent & Teacher Support",
      mindery: "✅ Guides, printables, progress insights",
      others: "❌ Limited or none",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose Mindery Kids Over Others?
          </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 gap-4 bg-purple-50 px-6 py-4">
            <div className="font-bold text-purple-800">Feature</div>
            <div className="font-bold text-purple-800">Mindery Kids</div>
            <div className="font-bold text-purple-800">Other Apps</div>
          </div>
          <div className="divide-y divide-gray-200">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 px-6 py-5 items-center"
              >
                <div className="text-gray-800 font-semibold">{row.feature}</div>
                <div className="text-gray-600">{row.mindery}</div>
                <div className="text-gray-600">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
