// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFilePdf } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-gray-100 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 px-6 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left section */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            © {year} Yassine Chmirrou
          </p>
          <p>Crafted with ❤️ </p>
          <a
            href="mailto:yassinechmirrou1@gmail.com"
            className="text-blue-500 hover:underline"
          >
            yassinechmirrou1@gmail.com
          </a>
        </div>

        {/* Right section: social links + scroll top */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/YassineChmirrou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yassinechmirrou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yassinechmirrou1@gmail.com"
            className="hover:text-blue-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="/CV_Yassine_Chmirrou.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="CV"
          >
            <FaFilePdf />
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-blue-600 transition"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Inspirational quote */}
      <div className="mt-6 text-center text-xs italic text-gray-500 dark:text-gray-400">
        “The best way to predict the future is to invent it.” — Alan Kay
      </div>
    </footer>
  );
}