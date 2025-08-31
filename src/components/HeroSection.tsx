import { motion } from "framer-motion";
import kidImage from "../assets/kidimage.jpg";
import { useState } from "react";
import { SimpleTrialModal } from "../modals/FormModal";

export const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const features = [
    { icon: "🧠", text: "Improves Focus" },
    { icon: "🧘", text: "Reduces Stress" },
    { icon: "😴", text: "Better Sleep" },
    { icon: "❤️", text: "Builds Empathy" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.section
        id="top"
        className="py-12 md:py-18 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 md:items-stretch">
          <motion.div
            className="text-center md:text-left flex flex-col justify-center"
            variants={containerVariants}
          >
            <div>
              <motion.span
                className="inline-block bg-purple-100 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold tracking-wide"
                variants={itemVariants}
              >
                Calm Minds, Happy Hearts
              </motion.span>
              <motion.h1
                className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Mindfulness & Meditation for Kids (4-14)
              </motion.h1>
              <motion.p
                className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
                variants={itemVariants}
              >
                Fun, story-based meditations that build focus, kindness, and
                confidence. Safe, ad-free, and crafted with child-development
                experts.
              </motion.p>
            </div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setModalOpen(true)}
                className="bg-purple-600 cursor-pointer text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 shadow-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="bg-green-500 cursor-pointer text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 shadow-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
              variants={containerVariants}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-3 bg-white border border-gray-100 shadow-lg p-3 rounded-2xl text-gray-700"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-semibold text-sm sm:text-base">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-10 md:mt-0"
            variants={itemVariants}
          >
            <div className="bg-gray-200 w-full h-96 rounded-2xl min-h-[450px] md:min-h-full overflow-hidden">
              <motion.img
                src={kidImage}
                alt="Kid meditating"
                className="w-full h-full object-center rounded-2xl"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1, transition: { duration: 0.7 } }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="absolute bg-white p-4 rounded-xl shadow-2xl w-auto left-8 right-8 bottom-14 sm:w-72 sm:left-auto sm:right-0 md:-left-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ x: 0, opacity: 1, rotate: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <SimpleTrialModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
    </>
  );
};
