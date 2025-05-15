// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Deep Learning Specialization",
    provider: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Coursera-Logo_600x600.svg",
    link: "https://www.coursera.org/account/accomplishments/specialization/XYZ123"
  },
  {
    title: "Python for Data Science",
    provider: "Kaggle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png",
    link: "https://www.kaggle.com/learn/certificates/XYZ456"
  },
  {
    title: "Data Cleaning",
    provider: "DataCamp",
    logo: "https://cdn-images-1.medium.com/max/1600/1*mFz5xt2DR4v8ZzDqZTzG4g.png",
    link: "https://www.datacamp.com/statement-of-accomplishment/XYZ789"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-50 dark:bg-gray-900 py-20 px-6 text-gray-800 dark:text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Certifications
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center flex flex-col items-center"
          >
            <img
              src={cert.logo}
              alt={cert.provider}
              className="h-14 mb-4 grayscale group-hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-sm text-blue-500 mb-2">{cert.provider}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              View Certificate <FaExternalLinkAlt className="inline-block" size={12} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}