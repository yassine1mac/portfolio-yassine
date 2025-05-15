import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import CVModal from './components/CVModal';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WaveSeparator from "./components/WaveSeparator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white font-sans">
      <Navbar theme={theme} setTheme={setTheme} />
      <LanguageToggle language={language} setLanguage={setLanguage} />

      {/* ✅ Hero avec langue dynamique */}
      <Hero language={language} />
      <WaveSeparator />

      <Timeline />
      <WaveSeparator flip />

      <Certifications />
      <WaveSeparator />

      <TechStack />
      <WaveSeparator flip />

      <Projects />
      <WaveSeparator />

      <AboutMe />
      <CVModal />
      <Footer />
    </div>
  );
}
