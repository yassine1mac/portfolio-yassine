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
  },
  {
    title: "Real-Time Stock Price Predictor",
    description: "LSTM-based neural network for predicting stock prices with live data streaming and visualization dashboard.",
    tech: ["TensorFlow", "Keras", "Pandas", "Plotly", "WebSocket"],
    image: `${import.meta.env.BASE_URL}project-stock.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Face Recognition Attendance System",
    description: "Automated attendance tracking using deep face recognition and real-time video processing with MySQL database.",
    tech: ["Python", "OpenCV", "FaceNet", "MySQL", "Flask"],
    image: `${import.meta.env.BASE_URL}project-face.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Chatbot with RAG & LangChain",
    description: "Intelligent chatbot using Retrieval-Augmented Generation with vector databases for context-aware responses.",
    tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    image: `${import.meta.env.BASE_URL}project-chatbot.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "ML pipeline for detecting fraudulent transactions using ensemble methods and real-time anomaly detection.",
    tech: ["Scikit-learn", "XGBoost", "Kafka", "Spark"],
    image: `${import.meta.env.BASE_URL}project-fraud.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Image Segmentation Medical AI",
    description: "U-Net architecture for medical image segmentation to assist in tumor detection and analysis.",
    tech: ["PyTorch", "U-Net", "NumPy", "Matplotlib"],
    image: `${import.meta.env.BASE_URL}project-medical.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Real-time sentiment analysis of tweets using transformers and interactive visualization with geographic mapping.",
    tech: ["Transformers", "Twitter API", "D3.js", "MongoDB"],
    image: `${import.meta.env.BASE_URL}project-twitter.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Recommendation Engine",
    description: "Collaborative filtering recommendation system with matrix factorization and deep learning hybrid approach.",
    tech: ["PyTorch", "Surprise", "Redis", "FastAPI"],
    image: `${import.meta.env.BASE_URL}project-recommend.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Object Detection for Autonomous Driving",
    description: "YOLO-based real-time object detection for identifying vehicles, pedestrians, and traffic signs.",
    tech: ["YOLOv8", "OpenCV", "TensorRT", "CUDA"],
    image: `${import.meta.env.BASE_URL}project-yolo.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "ETL Pipeline with Airflow",
    description: "End-to-end data pipeline orchestration with Apache Airflow for processing millions of records daily.",
    tech: ["Airflow", "PostgreSQL", "Docker", "Python"],
    image: `${import.meta.env.BASE_URL}project-etl.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Voice Assistant AI",
    description: "Voice-controlled AI assistant with speech recognition, natural language understanding, and text-to-speech.",
    tech: ["Whisper", "GPT-4", "ElevenLabs", "Python"],
    image: `${import.meta.env.BASE_URL}project-voice.jpg`,
    demo: "#",
    code: "#"
  },
  {
    title: "Deep Learning Image Classifier",
    description: "Transfer learning with EfficientNet for multi-class image classification achieving 97% accuracy.",
    tech: ["TensorFlow", "EfficientNet", "Keras", "NumPy"],
    image: `${import.meta.env.BASE_URL}project-classifier.jpg`,
    demo: "#",
    code: "#"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my portfolio of AI and machine learning projects showcasing innovation and technical excellence
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden m-[1px]">
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Floating tech badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 dark:text-white shadow-lg">
                  {project.tech[0]}
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
                  {project.tech.slice(1, 4).map((tech, i) => (
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
                    >
                      <FaExternalLinkAlt size={12} /> View Demo
                    </motion.a>
                  )}
                  {project.code !== "#" && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.demo !== "#" ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all`}
                    >
                      <FaGithub size={14} /> Code
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}