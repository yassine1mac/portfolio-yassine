// src/components/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaCode, FaChartLine } from "react-icons/fa";

const highlights = [
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description: "Deep expertise in neural networks, computer vision, and NLP"
  },
  {
    icon: <FaChartLine />,
    title: "Big Data Engineering",
    description: "Scalable data pipelines with Spark, Kafka, and cloud platforms"
  },
  {
    icon: <FaCode />,
    title: "Full-Stack Development",
    description: "Production-ready applications with React, Python, and modern frameworks"
  },
  {
    icon: <FaRocket />,
    title: "Innovation Focus",
    description: "Transforming research into real-world solutions"
  }
];

export default function AboutMe() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AI Engineer | Data Scientist | Full-Stack Developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}profile-yassine.jpg`}
                alt="Yassine Chmirrou"
                className="relative z-10 w-full rounded-2xl shadow-2xl ring-4 ring-white/20 dark:ring-gray-700/30"
                onError={(e) => {
                  e.target.src = `${import.meta.env.BASE_URL}profile.jpg`;
                }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a <span className="font-bold text-blue-600 dark:text-blue-400">5th-year Engineering student</span> specializing in <span className="font-semibold">Data Science, Big Data, and Artificial Intelligence</span> at ENSA Tétouan, Morocco.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              My expertise spans the <span className="font-semibold">entire AI/ML pipeline</span>: from data collection and preprocessing to model deployment and monitoring. I've built production-grade systems for computer vision, natural language processing, and real-time data analytics.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              As <span className="font-bold text-purple-600 dark:text-purple-400">Vice President of AI Geeks Club</span>, I lead technical workshops, organize hackathons, and mentor students in machine learning and software engineering.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm passionate about building <span className="font-semibold">scalable AI solutions</span> that solve real-world problems. Whether it's optimizing data pipelines with Apache Spark, deploying ML models with Docker and Kubernetes, or building intelligent web applications, I focus on creating impact through technology.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-4"
            >
              <blockquote className="italic border-l-4 border-blue-500 dark:border-blue-400 pl-4 text-blue-600 dark:text-blue-400 font-medium">
                "Turning data into intelligence, and intelligence into action."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
            >
              <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
