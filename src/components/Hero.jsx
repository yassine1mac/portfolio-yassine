import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFilePdf, FaGraduationCap } from "react-icons/fa";
import translations from "../translations";

export default function Hero({ language }) {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-blue-500 via-blue-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl w-full flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-y-12 md:gap-12 relative z-10">

        {/* Texte principal */}
        <div className="w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-xs sm:text-sm font-semibold"
          >
            <FaGraduationCap /> Graduate Engineer · Class of 2025
          </motion.div>

          <motion.div className="block mb-4">
            <div
              className="text-blue-600 text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              {t.hello}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            {t.title}
            <br />
            {t.subtitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base max-w-md mx-auto md:mx-0"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center sm:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <FaWhatsapp className="relative z-10" /> <span className="relative z-10">{t.whatsapp}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto flex justify-center items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
            >
              <FaFilePdf /> {t.cv}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Projects</div>
            </div>
            <div className="text-center border-x border-gray-300 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2025</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Engineer Degree</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">15+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Tech Stack</div>
            </div>
          </motion.div>
        </div>

        {/* Image de profil avec effets 3D et glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative w-full flex justify-center md:justify-end z-10 perspective-1000"
        >
          <motion.div
            className="relative w-48 sm:w-56 md:w-80 lg:w-96"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow layers multiples */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-50 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 scale-110 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 scale-125 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            {/* Ring animé */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 60px rgba(147, 51, 234, 0.8)",
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>

            {/* Image avec effet glassmorphism */}
            <div className="relative z-10 rounded-full overflow-hidden ring-4 ring-white/20 dark:ring-gray-700/30 backdrop-blur-sm shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}profile-yassine.jpg`}
                alt="Yassine Chmirrou - Big Data & AI Engineer"
                className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
                loading="eager"
              />
              {/* Overlay gradient au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Particules flottantes */}
            <motion.div
              className="absolute -top-4 -right-4 w-3 h-3 bg-blue-500 rounded-full"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-4 h-4 bg-purple-500 rounded-full"
              animate={{
                y: [10, -10, 10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
