// src/components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "ENSA Tétouan",
    subtitle: "Engineering Degree - Data Science, Big Data & AI (5th Year)",
    date: "2020 – 2025",
    description: "Advanced studies in machine learning, deep learning, big data architectures, cloud computing, and distributed systems. GPA-focused curriculum with hands-on projects in NLP, computer vision, and data engineering."
  },
  {
    title: "AI Geeks Club",
    subtitle: "Vice President & Technical Lead",
    date: "2024 – Present",
    description: "Leading a team of 50+ members. Organizing technical workshops on MLOps, organizing hackathons, and mentoring students in AI/ML. Spearheaded collaboration with industry partners for real-world AI projects."
  },
  {
    title: "Transparence Informatique",
    subtitle: "Data Analyst Intern",
    date: "Aug – Sep 2024",
    description: "Developed interactive dashboards in Power BI for business intelligence. Automated data processing workflows with Python, reducing manual effort by 70%. Worked with SQL databases and Excel automation."
  },
  {
    title: "AI/ML Projects & Research",
    subtitle: "Independent Developer & Researcher",
    date: "2022 – Present",
    description: "Built 15+ production-ready AI projects: food classification (ResNet), cheating detection (pose estimation), hotel review sentiment analysis (BERT), and real-time data pipelines (Apache Spark, Kafka). All projects deployed with Docker and CI/CD."
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