// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFilePdf, FaWhatsapp, FaHeart, FaReact } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/YassineChmirrou", label: "GitHub" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yassinechmirrou", label: "LinkedIn" },
  { icon: <FaWhatsapp />, link: "https://wa.me/212620305398", label: "WhatsApp" },
  { icon: <FaEnvelope />, link: "mailto:yassinechmirrou1@gmail.com", label: "Email" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H0Z"
            fill="currentColor"
            className="text-gray-900"
          />
        </svg>
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs italic text-gray-600">
            "The best way to predict the future is to invent it." — Alan Kay
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
