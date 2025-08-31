export const ParentTeacherHub = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Parent & Teacher Hub
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Practical guides, printable routines, and progress insights so you
            can support mindfulness at home and school.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-purple-700 font-bold py-3 px-5 rounded-lg border border-purple-200 hover:bg-purple-100 transition duration-300 shadow-sm">
              <span>⬇️</span> Download Starter Kit (PDF)
            </button>
            <button className="flex items-center gap-2 bg-white text-purple-700 font-bold py-3 px-5 rounded-lg border border-purple-200 hover:bg-purple-100 transition duration-300 shadow-sm">
              <span>🗓️</span> 7-Day Calm Plan
            </button>
            <button className="flex items-center gap-2 bg-white text-purple-700 font-bold py-3 px-5 rounded-lg border border-purple-200 hover:bg-purple-100 transition duration-300 shadow-sm">
              <span>📦</span> Classroom Pack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
