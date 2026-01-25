import React, { Suspense, lazy, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaPlay, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

// Lazy load demo components
const FoodCalorieDemo = lazy(() => import('./demos/FoodCalorieDemo'));
const CheatingDetectionDemo = lazy(() => import('./demos/CheatingDetectionDemo'));
const SentimentAnalysisDemo = lazy(() => import('./demos/SentimentAnalysisDemo'));

const demoComponents = {
  "Food & Calorie Estimation": FoodCalorieDemo,
  "Cheating Detection System": CheatingDetectionDemo,
  "Hotel Review NLP Analysis": SentimentAnalysisDemo,
};

const projectDetails = {
  "Food & Calorie Estimation": {
    overview: "A comprehensive deep learning solution that combines computer vision and nutritional science to help users make informed dietary choices. The system uses a fine-tuned ResNet18 model trained on the Food-101 dataset to identify food items from images with high accuracy.",
    challenges: [
      { problem: "Multi-class classification with 101 food categories", solution: "Implemented transfer learning with ResNet18 pretrained on ImageNet, achieving 89% accuracy" },
      { problem: "Real-time inference requirements", solution: "Optimized model with TorchScript and batch normalization for sub-50ms inference" },
      { problem: "Deployment complexity", solution: "Containerized with Docker for consistent deployment across environments" },
    ],
    features: [
      "Real-time food recognition from uploaded images",
      "Accurate calorie estimation based on portion size",
      "Detailed nutritional breakdown (protein, carbs, fats)",
      "Support for 101 different food categories",
      "RESTful API for integration with other applications",
      "User-friendly Streamlit web interface"
    ],
    metrics: { accuracy: "89%", inference: "45ms", categories: "101" }
  },
  "Cheating Detection System": {
    overview: "An AI-powered proctoring solution that monitors exam sessions in real-time using computer vision and machine learning. The system tracks body pose, head orientation, and behavioral patterns to detect potential cheating attempts while minimizing false positives.",
    challenges: [
      { problem: "Real-time pose estimation at 30 FPS", solution: "Leveraged MediaPipe's BlazePose for efficient landmark detection on CPU" },
      { problem: "High false positive rate in initial models", solution: "Implemented XGBoost ensemble with custom features, reducing false positives by 60%" },
      { problem: "Experiment tracking across iterations", solution: "Integrated MLflow for comprehensive experiment logging and model versioning" },
    ],
    features: [
      "Real-time pose estimation and tracking",
      "Head orientation and gaze detection",
      "Suspicious behavior pattern recognition",
      "Timestamped event logging",
      "Configurable sensitivity thresholds",
      "MLflow experiment tracking dashboard"
    ],
    metrics: { accuracy: "94%", fps: "30", falsePositive: "< 5%" }
  },
  "Hotel Review NLP Analysis": {
    overview: "A sophisticated NLP pipeline that extracts actionable insights from hotel reviews at scale. The system combines state-of-the-art transformer models for sentiment analysis with traditional topic modeling techniques to provide comprehensive review analytics.",
    challenges: [
      { problem: "Collecting reviews from multiple platforms", solution: "Built robust Selenium scrapers with anti-detection measures and rate limiting" },
      { problem: "Handling multilingual reviews", solution: "Used multilingual BERT (mBERT) for cross-language sentiment analysis" },
      { problem: "Identifying fine-grained topics", solution: "Implemented LDA with optimal topic number selection using coherence scores" },
    ],
    features: [
      "BERT-based sentiment classification",
      "LDA topic modeling and extraction",
      "Automated web scraping from booking platforms",
      "Aspect-based sentiment analysis",
      "Interactive visualization dashboard",
      "Exportable analytics reports"
    ],
    metrics: { accuracy: "92%", topics: "15", reviews: "50K+" }
  },
};

function DemoLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading interactive demo...</p>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  const DemoComponent = demoComponents[project?.title];
  const details = projectDetails[project?.title];

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {/* Header with image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  <FaGithub /> View Source Code
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>

              {/* Overview */}
              {details && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaLightbulb className="text-yellow-400" /> Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{details.overview}</p>
                </div>
              )}

              {/* Interactive Demo Section */}
              {DemoComponent && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaPlay className="text-green-400" /> Interactive Demo
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Try out a simulation of this project's functionality below:
                  </p>
                  <Suspense fallback={<DemoLoader />}>
                    <DemoComponent />
                  </Suspense>
                </div>
              )}

              {/* Features */}
              {details?.features && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaCheckCircle className="text-blue-400" /> Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {details.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg"
                      >
                        <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              {details?.challenges && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaTools className="text-purple-400" /> Challenges & Solutions
                  </h3>
                  <div className="space-y-4">
                    {details.challenges.map((item, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-red-500/20 text-red-400 p-2 rounded-lg">
                            <span className="font-bold text-sm">Challenge</span>
                          </div>
                          <p className="text-gray-300 text-sm flex-1">{item.problem}</p>
                        </div>
                        <div className="flex items-start gap-3 mt-3 pl-12">
                          <div className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                            <span className="font-bold text-sm">Solution</span>
                          </div>
                          <p className="text-gray-300 text-sm flex-1">{item.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics */}
              {details?.metrics && (
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(details.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 text-center border border-gray-700">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
