import { motion } from "framer-motion";
export const WhyMinderyKids = () => {
  const infoCards = [
    {
      subtitle: "Story Meditations",
      title: "Guided Adventures",
      description:
        "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
    },
    {
      subtitle: "Anytime Calm",
      title: "Tools for Big Feelings",
      description:
        "Quick 'reset' audios for anger, worry, pre-exam jitters, and bedtime battles.",
    },
    {
      subtitle: "Parent Hub",
      title: "Guides & Routines",
      description:
        "Weekly tips, printable charts, and simple routines you can use at home or school.",
    },
  ];

  return (
    <section id="why" className="py-12 md:py-24 bg-gray-50">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Mindery Kids?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Children learn best through play and stories. Our sessions blend
          gentle breathing, guided imagery, and music to make mindfulness
          enjoyable and effective.
        </p>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-left"
            >
              <p className="font-semibold text-green-600 inline-block border-b-2 border-green-300 pb-1">
                {card.subtitle}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
