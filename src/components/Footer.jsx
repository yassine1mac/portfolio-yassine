// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaFilePdf,
  FaWhatsapp,
  FaHeart,
  FaReact,
} from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/yassine1mac",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/yassinechmirrou",
    label: "LinkedIn",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/212620305398",
    label: "WhatsApp",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:yassinechmirrou1@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H0Z"
            fill="currentColor"
            className="text-gray-900"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-gray-800 pb-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Yassine Chmirrou
            </h2>

            <p className="text-gray-400 mt-2 max-w-md">
              Big Data & AI Engineer passionate about AI, Full Stack
              Development, and modern web experiences.
            </p>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm hover:text-blue-500 transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5 text-2xl">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-blue-500 transition duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}

            {/* CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
              className="hover:text-red-500 transition duration-300 hover:scale-110"
            >
              <FaFilePdf />
            </a>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="hover:text-green-400 transition duration-300 hover:scale-110"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center space-y-3"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            Built with <FaReact className="text-cyan-400" /> React & Tailwind
            CSS
          </p>

          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            © {year} Yassine Chmirrou — Made with{" "}
            <FaHeart className="text-red-500" />
          </p>

          <p className="text-xs italic text-gray-600">
            "The best way to predict the future is to invent it." — Alan Kay
          </p>
        </motion.div>
      </div>
    </footer>
  );
}