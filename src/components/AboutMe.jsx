// src/components/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaCode, FaChartLine } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import translations from "../translations";

const highlightIcons = [<FaBrain />, <FaChartLine />, <FaCode />, <FaRocket />];

export default function AboutMe({ language = "en" }) {
  const t = translations[language].about;
  const highlights = t.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i] }));

  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}profile-yassine.jpg`}
                alt="Yassine Chmirrou - Big Data & AI Engineer"
                className="relative z-10 w-full rounded-2xl shadow-2xl ring-4 ring-white/20 dark:ring-gray-700/30"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p1_prefix}
              <span className="font-bold text-blue-600 dark:text-blue-400">{t.p1_role}</span>
              {t.p1_middle}
              <span className="font-semibold">{t.p1_field}</span>
              {t.p1_suffix}
              <span className="font-semibold">{t.p1_class}</span>
              {t.p1_end}
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p2}
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p3_prefix}
              <span className="font-bold text-purple-600 dark:text-purple-400">{t.p3_role}</span>
              {t.p3_suffix}
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p4_prefix}
              <span className="font-semibold">{t.p4_bold}</span>
              {t.p4_middle}
              <span className="font-bold text-green-600 dark:text-green-400">{t.p4_bold2}</span>
              {t.p4_end}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-4"
            >
              <blockquote className="italic border-l-4 border-blue-500 dark:border-blue-400 pl-4 text-blue-600 dark:text-blue-400 font-medium">
                "{t.quote}"
              </blockquote>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-3xl text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="relative font-bold text-lg mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="relative text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
