import Image from "next/image";

const skills = [
  "Accounting Management",
  "Executive Management",
  "Data Analysis",
  "Credit Control & Risk Management",
  "Financial Analysis",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know me better - my journey, skills, and what drives my
            passion for finance
          </p>
        </div>

        <div>
          {/* Main About Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/90 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                <div className="relative mb-4 sm:mb-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                    <Image
                      src="/me.png"
                      alt="Md Habibur Rahaman Bhuiyan"
                      fill
                      className="object-cover rounded-full shadow-xl shadow-cyan-500/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-3 border-white flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Md Habibur Rahaman Bhuiyan
                </h3>
                <p className="text-cyan-600 font-semibold mb-4 text-sm sm:text-base">
                  Finance Executive | Risk Controller
                </p>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110"
                  >
                    <i className="fab fa-linkedin text-sm sm:text-base" />
                  </a>
                  <a
                    href="mailto:mdhabibbhuiyan7@gmail.com"
                    aria-label="Send email"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110"
                  >
                    <i className="fas fa-envelope text-sm sm:text-base" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Card */}
            <div className="lg:col-span-8">
              <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <i className="fas fa-user text-white text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Who I Am
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Experienced Risk Controller with a strong background in the
                  information technology and services industry. Skilled in
                  accounting, credit control, business control, research, and
                  communication in English. A finance professional with a degree
                  from National University, Bangladesh.
                </p>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-linear-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-cyan-100/50 hover:border-cyan-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <i className="fas fa-map-marker-alt text-cyan-600 text-sm sm:text-base" />
                      </div>
                      <div>
                        <div className="text-sm text-cyan-600 font-semibold">
                          Location
                        </div>
                        <div className="text-gray-900 font-medium text-sm sm:text-base">
                          Dhaka, Bangladesh
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-cyan-100/50 hover:border-cyan-300 hover:scale-105">
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                        <i className="fas fa-envelope text-cyan-600 text-sm sm:text-base" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-cyan-600 font-semibold">
                          Email
                        </div>
                        <div className="text-gray-900 font-medium text-sm sm:text-base break-all">
                          mdhabibbhuiyan7@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-cyan-100/50 hover:border-cyan-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <i className="fab fa-linkedin text-cyan-600 text-sm sm:text-base" />
                      </div>
                      <div>
                        <div className="text-sm text-cyan-600 font-semibold">
                          LinkedIn
                        </div>
                        <div className="text-gray-900 font-medium text-sm sm:text-base">
                          Connect with me
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/70 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <i className="fas fa-chart-line text-white text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Professional Skills
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  Core competencies and expertise
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-400 hover:text-gray-900 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
