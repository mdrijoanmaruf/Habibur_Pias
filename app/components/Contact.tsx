"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gray-50/50 backdrop-blur-[1px] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to connect? Let&apos;s discuss opportunities together
          </p>
        </div>

        <div>
          {/* CTA Message */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 text-center transition-all duration-500 hover:bg-white/90 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30">
              <i className="fas fa-envelope text-white text-lg sm:text-2xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6">
              I&apos;m always excited to take on new challenges and collaborate
              on innovative projects. Whether you have a project in mind or just
              want to chat about finance and risk management, I&apos;d love to
              hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:mdhabibbhuiyan7@gmail.com"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2 sm:mr-3 text-lg sm:text-xl" />
                <span>Send Message</span>
                <i className="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group border-2 border-cyan-500 text-cyan-600 bg-transparent hover:bg-cyan-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105"
              >
                <i className="fas fa-briefcase mr-2 sm:mr-3 text-lg sm:text-xl" />
                <span>View My Experience</span>
              </a>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-envelope text-white text-lg sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Email Me
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Drop me a line anytime
              </p>
              <a
                href="mailto:mdhabibbhuiyan7@gmail.com"
                className="inline-block bg-cyan-50 border border-cyan-300 text-cyan-600 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105 text-sm sm:text-base break-all"
              >
                mdhabibbhuiyan7@gmail.com
              </a>
            </div>

            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-linkedin text-white text-lg sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                LinkedIn
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Connect professionally
              </p>
              <a
                href="https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-50 border border-cyan-300 text-cyan-600 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-105 text-sm sm:text-base"
              >
                View Profile
              </a>
            </div>

            <div className="group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 hover:bg-white/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marker-alt text-white text-lg sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Location
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Find me here
              </p>
              <div className="inline-block bg-cyan-50 border border-cyan-300 text-cyan-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base break-words max-w-full">
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center transition-all duration-500 hover:bg-white/70 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl shadow-cyan-500/30">
                <i className="fas fa-handshake text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about finance and
                risk management. Feel free to reach out through any of the
                channels below!
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
              <a
                href="https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-linkedin text-lg sm:text-2xl text-blue-700 group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    LinkedIn
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Professional network
                  </p>
                </div>
              </a>

              <a
                href="mailto:mdhabibbhuiyan7@gmail.com"
                className="group relative overflow-hidden bg-gradient-to-br from-red-100 to-red-50 border border-red-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-red-200 hover:to-red-100 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-200 to-red-300 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-lg sm:text-2xl text-red-700 group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    Email
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Send me a message
                  </p>
                </div>
              </a>
            </div>

            {/* Additional Contact Options */}
            <div className="border-t border-gray-300 pt-6 sm:pt-8">
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-lg">
                Prefer direct contact?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="mailto:mdhabibbhuiyan7@gmail.com"
                  className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                >
                  <i className="fas fa-envelope mr-2 sm:mr-3 text-sm sm:text-lg" />
                  <span>Email Me</span>
                  <i className="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                >
                  <i className="fab fa-linkedin mr-2 sm:mr-3 text-sm sm:text-lg" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
