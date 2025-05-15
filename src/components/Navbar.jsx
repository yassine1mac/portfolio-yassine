// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          <span className="text-blue-500">Yassine</span> <span className="text-gray-600 dark:text-gray-400">Chmirrou</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Mobile Toggle + Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:scale-105 transition-all"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}