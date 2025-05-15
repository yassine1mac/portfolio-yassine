// src/components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "ENSA Tétouan",
    subtitle: "Engineering Degree in Big Data & AI",
    date: "2020 – 2025",
    description: "Studied advanced machine learning, big data systems, cloud technologies, and software engineering."
  },
  {
    title: "AI Geeks Club",
    subtitle: "Vice President",
    date: "2024 – Present",
    description: "Organized AI workshops, tech talks, and collaborative hackathons to promote hands-on learning."
  },
  {
    title: "Transparence Informatique",
    subtitle: "Data Analyst Intern",
    date: "Aug – Sep 2024",
    description: "Built dashboards in Power BI and automated Excel data pipelines during a summer internship."
  },
  {
    title: "Personal AI Projects",
    subtitle: "Freelance Projects & Research",
    date: "2023 – Present",
    description: "Developed ML projects like food classification, cheating detection, and sentiment analysis tools."
  }
];

export default function Timeline() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-6 text-white" id="timeline">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-12 border-l-4 border-blue-500">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 ml-4 relative"
          >
            {/* Timeline marker */}
            <div className="absolute -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
              <h4 className="text-sm text-blue-300 font-medium">{item.subtitle}</h4>
              <p className="text-xs text-gray-400 mb-2 mt-1">{item.date}</p>
              <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Inspirational closing quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center italic text-sm text-gray-400 mt-12"
      >
        “Every experience adds a node to your neural path. Keep learning.”
      </motion.p>
    </section>
  );
}