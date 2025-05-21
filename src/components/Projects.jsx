// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Food & Calorie Estimation",
    description: "Deep learning app using ResNet18 to classify food and estimate calories. Dockerized and deployed via Streamlit.",
    tech: ["Python", "PyTorch", "Docker", "Streamlit"],
    image: `${import.meta.env.BASE_URL}project-food.jpg`,
    demo: "https://demo-food-calorie.vercel.app",
    code: "https://github.com/YassineChmirrou/Food-and-Calorie-Estimation-Deep-learning"
  },
  {
    title: "Cheating Detection System",
    description: "Real-time cheating detection using pose estimation and ML (XGBoost). Includes MLflow tracking.",
    tech: ["Python", "OpenCV", "XGBoost", "MLflow"],
    image: `${import.meta.env.BASE_URL}project-cheating.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou/Cheating-Detection"
  },
  {
    title: "Hotel Review NLP Analysis",
    description: "Sentiment and theme detection from hotel reviews using BERT and LDA. Scraping with Selenium.",
    tech: ["BERT", "LDA", "Selenium", "Pandas"],
    image: `${import.meta.env.BASE_URL}project-nlp.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou/Hotel-Review-NLP"
  },
  {
    title: "AI Portfolio Website",
    description: "Modern portfolio built with React, Tailwind, and Framer Motion. Smooth animations and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: `${import.meta.env.BASE_URL}project-portfolio.jpg`,
    demo: "https://yassinechmirrou.vercel.app",
    code: "https://github.com/YassineChmirrou/Portfolio"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-6 text-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-16 text-gray-800"
      >
        Interactive Projects Showcase
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:ring-1 hover:ring-blue-400 transition-all duration-300 group"
          >
            <div className="overflow-hidden h-60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full"
                >
                  <FaGithub className="mr-2" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}