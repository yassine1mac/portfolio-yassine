import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import translations from "../translations";

export default function Navbar({ theme, setTheme, language = "en" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const t = translations[language].navbar;

  const navLinks = [
    { name: t.about, href: "#about", id: "about" },
    { name: t.projects, href: "#projects", id: "projects" },
    { name: t.skills, href: "#skills", id: "skills" },
    { name: t.contact, href: "#contact", id: "contact" },
  ];

  // Track active section as user scrolls
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header role="banner">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-lg"
            : "backdrop-blur-md bg-white/70 dark:bg-gray-900/70"
        } border-b border-gray-200 dark:border-gray-800`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Branding / Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Yassine Chmirrou - Home"
          >
            <span className="text-blue-500">Yassine</span>{" "}
            <span className="text-gray-600 dark:text-gray-400">Chmirrou</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 text-sm font-medium" role="menubar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 group ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  role="menuitem"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                      isActive ? "w-2/3" : "w-0 group-hover:w-1/2"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <FaTimes size={22} aria-hidden="true" />
              ) : (
                <FaBars size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Menu */}
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="md:hidden relative z-50 px-6 pb-6 pt-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg"
                role="menu"
              >
                <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                      role="menuitem"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
    </header>
  );
}
