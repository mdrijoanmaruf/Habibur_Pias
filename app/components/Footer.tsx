export default function Footer() {
  return (
    <footer className="relative bg-white/90 backdrop-blur-xl border-t border-gray-200 mt-16 sm:mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg shadow-cyan-500/30">
                  <i className="fas fa-chart-line text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Md Habibur Rahaman Bhuiyan
                  </h3>
                  <p className="text-cyan-600 font-medium text-sm sm:text-base">
                    Finance Executive | Risk Controller
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-md mb-4 sm:mb-6">
                Passionate about financial risk management and bringing
                strategic insights to corporate finance. Let&apos;s connect and
                explore opportunities together!
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-linkedin text-sm sm:text-base" />
                </a>
                <a
                  href="mailto:mdhabibbhuiyan7@gmail.com"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:scale-110"
                >
                  <i className="fas fa-envelope text-sm sm:text-base" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {["Home", "About", "Experience", "Education", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group text-sm sm:text-base"
                      >
                        <i className="fas fa-arrow-right text-xs mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <i className="fas fa-envelope text-cyan-600 text-xs sm:text-sm" />
                  </div>
                  <a
                    href="mailto:mdhabibbhuiyan7@gmail.com"
                    className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 text-xs sm:text-sm break-all"
                  >
                    mdhabibbhuiyan7@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                    <i className="fas fa-map-marker-alt text-cyan-600 text-xs sm:text-sm" />
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm break-words">
                    Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-4 lg:mb-0 text-center lg:text-left">
                © 2026 Md Habibur Rahaman Bhuiyan. All rights reserved.
                <span className="hidden lg:inline mx-2">|</span>
                <span className="block lg:inline mt-1 lg:mt-0">
                  Developed by{" "}
                  <a
                    href="https://rijoan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 transition-colors duration-300"
                  >
                    Md Rijoan Maruf
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
