// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCertificate } from "react-icons/fa";
import { SiCoursera, SiKaggle, SiDatacamp, SiUdemy, SiGoogle } from "react-icons/si";
import SectionHeader from "./SectionHeader";

const certifications = [
  {
    title: "Deep Learning Specialization",
    provider: "Coursera - DeepLearning.AI",
    icon: <SiCoursera className="text-3xl text-blue-500" />,
    skills: ["Neural Networks", "CNN", "RNN", "Transformers"],
    date: "2023",
    status: "completed"
  },
  {
    title: "Machine Learning",
    provider: "Coursera - Stanford",
    icon: <SiCoursera className="text-3xl text-blue-500" />,
    skills: ["Supervised Learning", "Regression", "Classification"],
    date: "2023",
    status: "completed"
  },
  {
    title: "Python for Data Science",
    provider: "Kaggle",
    icon: <SiKaggle className="text-3xl text-cyan-500" />,
    skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
    date: "2022",
    status: "completed"
  },
  {
    title: "Data Engineering",
    provider: "DataCamp",
    icon: <SiDatacamp className="text-3xl text-green-500" />,
    skills: ["ETL", "SQL", "Data Pipelines", "Cloud"],
    date: "2023",
    status: "completed"
  },
  {
    title: "TensorFlow Developer",
    provider: "Google",
    icon: <SiGoogle className="text-3xl text-orange-500" />,
    skills: ["TensorFlow", "Keras", "Model Deployment"],
    date: "2025",
    status: "completed"
  },
  {
    title: "AWS Machine Learning",
    provider: "Amazon Web Services",
    icon: <FaCertificate className="text-3xl text-yellow-500" />,
    skills: ["SageMaker", "Lambda", "S3", "EC2"],
    date: "2025",
    status: "in-progress"
  },
  {
    title: "Engineer's Degree — Big Data & AI",
    provider: "ENSA Tétouan",
    icon: <FaAward className="text-3xl text-blue-500" />,
    skills: ["Machine Learning", "Big Data", "Cloud", "MLOps"],
    date: "2025",
    status: "completed"
  }
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 px-6 text-gray-800 dark:text-gray-100 overflow-hidden"
    >
      {/* Dot-grid decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="06 · Credentials"
          title="Certifications & degree"
          description="Formal recognition of the skills I bring to production AI systems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
          >
            {/* Status badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
              cert.status === 'completed'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
            }`}>
              {cert.status === 'completed' ? 'Completed' : 'In Progress'}
            </div>

            <div className="p-6">
              {/* Icon */}
              <div className="mb-4">
                {cert.icon}
              </div>

              {/* Title & Provider */}
              <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-blue-500 dark:text-blue-400 mb-4">{cert.provider}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <FaAward className="text-yellow-500" />
                  {cert.date}
                </span>
              </div>
            </div>

            {/* Gradient border on hover */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
