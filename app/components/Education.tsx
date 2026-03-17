export default function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Education
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
            <div className="flex items-start">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg shadow-cyan-500/20 shrink-0">
                <i className="fas fa-graduation-cap text-white text-xl sm:text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  National University
                </h3>
                <p className="text-cyan-600 font-semibold text-base sm:text-lg mb-1">
                  Bangladesh
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <i className="fas fa-book text-cyan-600 text-sm sm:text-base" />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-600 font-semibold">
                        Degree
                      </div>
                      <div className="text-gray-900 font-medium text-sm sm:text-base">
                        BBS (Bachelor of Business Studies)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <i className="fas fa-calculator text-cyan-600 text-sm sm:text-base" />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-600 font-semibold">
                        Major
                      </div>
                      <div className="text-gray-900 font-medium text-sm sm:text-base">
                        Accounting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
