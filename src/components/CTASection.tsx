export const CTASection = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Start Your Child's Mindfulness Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Try it free. Build calm, focus, and kindness—one small practice a
            day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 cursor-pointer text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300">
              Create Account
            </button>
            <button className="bg-green-500 cursor-pointer text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
