// src/components/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-24 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto text-lg space-y-6 leading-relaxed">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm a 4th year Engineering student specializing in Artificial Intelligence and Big Data at ENSA Tétouan. My academic journey has been a blend of theoretical foundations and hands-on projects, particularly in machine learning, system design, and data pipelines.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Beyond code, I’m driven by curiosity and creativity — constantly seeking new ways to turn raw data into useful insights or build tools that solve real-world problems. Whether it’s a model to estimate calories or a system that detects cheating in exams, I aim for impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Outside of school, I enjoy organizing tech events, mentoring peers, and learning about the latest trends in AI, cloud, and automation. My vision is to merge ethical innovation with scalable AI solutions that empower businesses and communities.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="italic border-l-4 border-blue-500 pl-4 mt-8 text-blue-500"
        >
          "The future belongs to those who prepare for it today."
        </motion.blockquote>
      </div>
    </section>
  );
}
