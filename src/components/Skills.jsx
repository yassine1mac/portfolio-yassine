import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Deep Learning (PyTorch, TensorFlow)", level: 90 },
      { name: "Computer Vision (OpenCV, YOLO)", level: 85 },
      { name: "NLP & LLMs (BERT, GPT, LangChain)", level: 80 },
      { name: "MLOps (MLflow, Docker, Airflow)", level: 75 }
    ]
  },
  {
    category: "Big Data & Engineering",
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: 95 },
      { name: "Apache Spark & Kafka", level: 70 },
      { name: "SQL & NoSQL Databases", level: 85 },
      { name: "Cloud Platforms (AWS, GCP)", level: 65 }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React & Modern JavaScript", level: 88 },
      { name: "FastAPI & Flask", level: 82 },
      { name: "Tailwind CSS & UI/UX", level: 90 },
      { name: "RESTful APIs & WebSockets", level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" id="skills">
      {/* Grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="02 · Skills"
          title="Technical expertise"
          description="Engineering-grade proficiency across the full AI/ML lifecycle — from data pipelines to model serving."
        />

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: catIndex * 0.15, duration: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-sm font-bold text-blue-600 dark:text-blue-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: (catIndex * 0.4) + (skillIndex * 0.1) + 0.5 }}
                      >
                        <CountUp
                          end={skill.level}
                          duration={2}
                          suffix="%"
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </motion.span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: (catIndex * 0.4) + (skillIndex * 0.1),
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative group-hover:shadow-lg transition-shadow"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
