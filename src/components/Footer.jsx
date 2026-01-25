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

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Yassine Chmirrou
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI & Machine Learning Engineer passionate about building intelligent solutions that make a difference.
            </p>
            <motion.a
              href={`${import.meta.env.BASE_URL}CV__YASSINE_CHMIRROU.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              <FaFilePdf /> Download CV
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:yassinechmirrou1@gmail.com"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
              >
                yassinechmirrou1@gmail.com
              </a>
              <a
                href="https://wa.me/212620305398"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                +212 620 305 398
              </a>
              <p className="text-gray-500">Agadir, Morocco</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {year} Yassine Chmirrou. All rights reserved.
            </p>

            {/* Built with */}
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Built with <FaHeart className="text-red-500 animate-pulse" /> using <FaReact className="text-cyan-400" /> React
            </p>

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
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
