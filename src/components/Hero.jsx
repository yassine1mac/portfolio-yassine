import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFilePdf } from "react-icons/fa";
import translations from "../translations";

export default function Hero({ language }) {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-blue-500 via-blue-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="relative z-10">
          <motion.div className="inline-block mb-4">
            <div className="text-blue-600 text-2xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              {t.hello}
            </div>
          </motion.div>

          <motion.h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t.title}<br />{t.subtitle}
          </motion.h1>

          <motion.p className="mt-4 text-gray-700 dark:text-gray-300 text-md sm:text-lg max-w-md">
            {t.description}
          </motion.p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              <FaWhatsapp /> {t.whatsapp}
            </a>
            <a className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              <FaFilePdf /> {t.cv}
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-gradient-to-br from-blue-400 to-purple-500 scale-105"></div>
            <img src="/profile.png" alt="Yassine" className="relative w-full rounded-xl shadow-xl z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
