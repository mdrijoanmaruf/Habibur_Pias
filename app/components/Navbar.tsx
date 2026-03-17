"use client";

import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg sm:text-xl bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Habibur Rahaman
            </div>
            <div className="hidden md:flex space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50 hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-3 rounded-lg bg-cyan-50 border border-cyan-200 transition-all duration-300 hover:bg-cyan-100 hover:border-cyan-300 hover:scale-105 active:scale-95"
            >
              <i className="fas fa-bars text-gray-900 text-lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-gray-900 hover:bg-cyan-100 transition-all duration-300"
          >
            <i className="fas fa-times text-xl" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110 py-3 px-6 rounded-lg hover:bg-cyan-50 w-full text-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
