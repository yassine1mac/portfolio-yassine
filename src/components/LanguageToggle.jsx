// src/components/LanguageToggle.jsx
import React from "react";
import { motion } from "framer-motion";

export default function LanguageToggle({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
    >
      {language === "en" ? "Français" : "English"}
    </motion.button>
  );
}
