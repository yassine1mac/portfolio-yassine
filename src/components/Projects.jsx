// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Food & Calorie Estimation",
    description: "Deep learning application using ResNet18 to classify food items and estimate calorie content. Features include real-time image analysis, nutritional information display, and a user-friendly interface. Containerized with Docker for easy deployment.",
    tech: ["Python", "PyTorch", "Docker", "Streamlit", "ResNet18"],
    image: `${import.meta.env.BASE_URL}project-food.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou/Food-and-Calorie-Estimation-Deep-learning",
    featured: true,
    category: "Deep Learning"
  },
  {
    title: "Cheating Detection System",
    description: "Real-time cheating detection system using pose estimation and machine learning. Implements XGBoost classifier with MLflow for experiment tracking. Monitors exam behavior through webcam analysis to detect suspicious activities.",
    tech: ["Python", "OpenCV", "XGBoost", "MLflow", "MediaPipe"],
    image: `${import.meta.env.BASE_URL}project-cheating.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou/Cheating-Detection",
    featured: true,
    category: "Computer Vision"
  },
  {
    title: "Hotel Review NLP Analysis",
    description: "Comprehensive NLP pipeline for analyzing hotel reviews. Uses BERT for sentiment classification and LDA for topic modeling. Includes web scraping with Selenium to collect reviews from multiple platforms.",
    tech: ["BERT", "LDA", "Selenium", "Pandas", "NLTK"],
    image: `${import.meta.env.BASE_URL}project-nlp.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou/Hotel-Review-NLP",
    featured: true,
    category: "NLP"
  },
  {
    title: "AI Portfolio Website",
    description: "Modern, responsive portfolio built with React and Tailwind CSS. Features smooth Framer Motion animations, dark mode support, lazy loading, and optimized performance. Deployed on GitHub Pages with CI/CD.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: `${import.meta.env.BASE_URL}project-portfolio.jpg`,
    demo: "https://yassine1mac.github.io/portfolio-yassine/",
    code: "https://github.com/yassine1mac/portfolio-yassine",
    featured: true,
    category: "Web Development"
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM-based neural network for predicting stock prices with historical data analysis. Features interactive visualization dashboard using Plotly and real-time data streaming capabilities.",
    tech: ["TensorFlow", "Keras", "Pandas", "Plotly", "yfinance"],
    image: `${import.meta.env.BASE_URL}project-stock.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "Deep Learning"
  },
  {
    title: "Face Recognition Attendance",
    description: "Automated attendance tracking system using deep face recognition. Processes real-time video streams to identify individuals and logs attendance to a MySQL database with Flask backend.",
    tech: ["Python", "OpenCV", "FaceNet", "MySQL", "Flask"],
    image: `${import.meta.env.BASE_URL}project-face.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "Computer Vision"
  },
  {
    title: "RAG Chatbot with LangChain",
    description: "Intelligent chatbot using Retrieval-Augmented Generation for context-aware responses. Integrates vector databases (Pinecone) for efficient document retrieval and FastAPI for the backend.",
    tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    image: `${import.meta.env.BASE_URL}project-chatbot.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "NLP"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning pipeline for detecting fraudulent transactions using ensemble methods. Handles imbalanced data with SMOTE and implements real-time anomaly detection with streaming data.",
    tech: ["Scikit-learn", "XGBoost", "Pandas", "Imbalanced-learn"],
    image: `${import.meta.env.BASE_URL}project-fraud.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "Machine Learning"
  },
  {
    title: "Medical Image Segmentation",
    description: "U-Net architecture for medical image segmentation to assist in tumor detection. Achieves high accuracy in identifying regions of interest in MRI and CT scans.",
    tech: ["PyTorch", "U-Net", "NumPy", "Matplotlib", "nibabel"],
    image: `${import.meta.env.BASE_URL}project-medical.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "Deep Learning"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Real-time sentiment analysis of tweets using transformer models. Features geographic mapping of sentiment trends and interactive D3.js visualizations.",
    tech: ["Transformers", "Tweepy", "D3.js", "MongoDB"],
    image: `${import.meta.env.BASE_URL}project-twitter.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "NLP"
  },
  {
    title: "Movie Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering with content-based approaches. Uses matrix factorization and deep learning for personalized recommendations.",
    tech: ["PyTorch", "Surprise", "Redis", "FastAPI"],
    image: `${import.meta.env.BASE_URL}project-recommend.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "Machine Learning"
  },
  {
    title: "YOLO Object Detection",
    description: "YOLOv8-based real-time object detection for autonomous driving scenarios. Identifies vehicles, pedestrians, and traffic signs with high accuracy and low latency.",
    tech: ["YOLOv8", "OpenCV", "TensorRT", "CUDA"],
    image: `${import.meta.env.BASE_URL}project-yolo.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou",
    featured: false,
    category: "Computer Vision"
  }
];

const categories = ["All", "Deep Learning", "Computer Vision", "NLP", "Machine Learning", "Web Development"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    project => filter === "All" || project.category === filter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="04 · Projects"
          title="Selected engineering work"
          description="Production-grade AI, ML, and data systems — from deep learning pipelines to full-stack applications."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 -mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <FaStar className="text-xs" /> Featured
                </div>
              )}

              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden m-[1px]">
                {/* Image with overlay */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 dark:text-white shadow-lg">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.demo !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:shadow-lg transition-all"
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt size={12} aria-hidden="true" /> Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.demo !== "#" ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all`}
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub size={14} aria-hidden="true" /> View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more/less button */}
      {filteredProjects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <FaCode aria-hidden="true" />
            {showAll ? "Show Less" : `View All ${filteredProjects.length} Projects`}
          </button>
        </motion.div>
      )}
      </div>
    </section>
  );
}
