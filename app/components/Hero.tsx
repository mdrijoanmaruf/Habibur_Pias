"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 sm:pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Intro */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-700">
                  Md Habibur Rahaman Bhuiyan
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
                Finance Executive | Risk Controller
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experienced Risk Controller with a strong background in
                accounting, credit control, business control, research, and
                communication. A finance professional passionate about managing
                corporate credit exposure and financial risk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center lg:justify-start">
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105"
              >
                <i className="fas fa-briefcase mr-2 sm:mr-3 text-lg sm:text-xl" />
                <span>View My Experience</span>
                <i className="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group border-2 border-cyan-500 text-cyan-600 bg-transparent hover:bg-cyan-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105"
              >
                <i className="fas fa-envelope mr-2 sm:mr-3 text-lg sm:text-xl" />
                <span>Get In Touch</span>
                <i className="fas fa-paper-plane ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-6 sm:pt-8">
              <a
                href="https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile of Md Habibur Rahaman Bhuiyan"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-lg sm:text-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="mailto:mdhabibbhuiyan7@gmail.com"
                aria-label="Send email to Md Habibur Rahaman Bhuiyan"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-lg sm:text-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Right Side - Avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <Image
                src="/me.png"
                alt="Md Habibur Rahaman Bhuiyan"
                fill
                className="object-cover rounded-3xl shadow-2xl shadow-cyan-500/30"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <i className="fas fa-check text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
