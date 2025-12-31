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