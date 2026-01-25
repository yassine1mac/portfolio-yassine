import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaDownload,
  FaPrint,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaLanguage,
  FaStar,
} from "react-icons/fa";

const skills = {
  "Machine Learning & AI": [
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Scikit-learn", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "NLP/Transformers", level: 80 },
    { name: "Deep Learning", level: 85 },
  ],
  "Data Engineering": [
    { name: "Python", level: 95 },
    { name: "SQL/NoSQL", level: 85 },
    { name: "Apache Spark", level: 75 },
    { name: "ETL Pipelines", level: 80 },
    { name: "Docker/K8s", level: 75 },
    { name: "MLOps", level: 70 },
  ],
  "Web Development": [
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "FastAPI", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "REST APIs", level: 85 },
  ],
};

const experience = [
  {
    title: "AI Research Intern",
    company: "ENSA Tétouan - AI Lab",
    location: "Tétouan, Morocco",
    period: "Jun 2024 - Aug 2024",
    achievements: [
      "Developed computer vision models for real-time cheating detection with 94% accuracy",
      "Implemented MLflow for experiment tracking, reducing model iteration time by 40%",
      "Built end-to-end ML pipelines from data collection to deployment",
    ],
  },
  {
    title: "Vice President",
    company: "AI Geeks Club",
    location: "ENSA Tétouan",
    period: "Sep 2023 - Present",
    achievements: [
      "Led technical workshops on machine learning for 200+ students",
      "Organized hackathons and coding competitions",
      "Mentored 15+ students in AI/ML project development",
    ],
  },
  {
    title: "Freelance Data Scientist",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 - Present",
    achievements: [
      "Delivered NLP solutions for sentiment analysis processing 50K+ reviews",
      "Built recommendation systems improving user engagement by 25%",
      "Created automated data pipelines for real-time analytics",
    ],
  },
];

const education = [
  {
    degree: "Engineering Degree in Data Science & AI",
    school: "ENSA Tétouan",
    location: "Morocco",
    period: "2020 - 2025",
    details: "Specialization in Big Data, Machine Learning, and Artificial Intelligence",
  },
  {
    degree: "Preparatory Classes (CPGE)",
    school: "CPGE Tétouan",
    location: "Morocco",
    period: "2018 - 2020",
    details: "Mathematics and Physics track (MP)",
  },
];

const certifications = [
  { name: "Deep Learning Specialization", issuer: "Coursera - DeepLearning.AI", year: "2023" },
  { name: "Machine Learning", issuer: "Coursera - Stanford", year: "2023" },
  { name: "Python for Data Science", issuer: "Kaggle", year: "2022" },
  { name: "Data Engineering", issuer: "DataCamp", year: "2023" },
];

const projects = [
  {
    name: "Food & Calorie Estimation",
    tech: "PyTorch, ResNet18, Docker, Streamlit",
    description: "Deep learning app classifying 101 food categories with 89% accuracy",
  },
  {
    name: "Cheating Detection System",
    tech: "OpenCV, XGBoost, MLflow, MediaPipe",
    description: "Real-time exam proctoring with pose estimation (94% accuracy)",
  },
  {
    name: "Hotel Review NLP Analysis",
    tech: "BERT, LDA, Selenium, Pandas",
    description: "Sentiment analysis pipeline processing 50K+ reviews (92% accuracy)",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Professional" },
];

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="bg-white dark:bg-gray-900 py-20 print:py-0 print:bg-white">
      <div className="max-w-4xl mx-auto px-6 print:px-8">
        {/* Action buttons - hidden on print */}
        <div className="flex justify-end gap-4 mb-8 print:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <FaPrint /> Print / Save PDF
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}CV__YASSINE_CHMIRROU.pdf`}
            download
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
          >
            <FaDownload /> Download PDF
          </motion.a>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden print:shadow-none print:rounded-none print:bg-white print:text-black">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white print:bg-blue-600">
            <h1 className="text-4xl font-bold mb-2">Yassine Chmirrou</h1>
            <p className="text-xl opacity-90 mb-4">AI & Machine Learning Engineer</p>

            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:yassinechmirrou1@gmail.com" className="flex items-center gap-2 hover:underline">
                <FaEnvelope /> yassinechmirrou1@gmail.com
              </a>
              <a href="tel:+212620305398" className="flex items-center gap-2 hover:underline">
                <FaPhone /> +212 620 305 398
              </a>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> Tétouan, Morocco
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href="https://github.com/YassineChmirrou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <FaGithub /> github.com/YassineChmirrou
              </a>
              <a href="https://linkedin.com/in/yassinechmirrou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <FaLinkedin /> linkedin.com/in/yassinechmirrou
              </a>
              <a href="https://yassine1mac.github.io/portfolio-yassine/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <FaGlobe /> Portfolio
              </a>
            </div>
          </div>

          <div className="p-8 space-y-8 print:space-y-6 text-gray-800 dark:text-gray-200 print:text-black">
            {/* Summary */}
            <section>
              <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <FaStar className="text-blue-500" /> Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-300 print:text-gray-700 leading-relaxed">
                5th-year Engineering student specializing in Data Science, Big Data, and Artificial Intelligence at ENSA Tétouan.
                Passionate about building production-grade ML systems with expertise in computer vision, NLP, and deep learning.
                Strong track record of delivering end-to-end AI solutions from research to deployment.
                Seeking opportunities to apply cutting-edge AI techniques to solve real-world problems.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <FaBriefcase className="text-blue-500" /> Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 print:text-blue-700">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 print:text-gray-600 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 print:text-gray-700 space-y-1">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-blue-500" /> Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{edu.degree}</h3>
                      <p className="text-blue-600 dark:text-blue-400 print:text-blue-700">{edu.school} • {edu.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">{edu.details}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 print:text-gray-600 whitespace-nowrap">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <FaCode className="text-blue-500" /> Technical Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300 print:text-gray-800">{category}</h3>
                    <div className="space-y-2">
                      {skillList.map((skill, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span>{skill.name}</span>
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 print:bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                <FaCode className="text-blue-500" /> Key Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{project.name}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-600">{project.tech}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 print:text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Two columns: Certifications and Languages */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Certifications */}
              <section>
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                  <FaCertificate className="text-blue-500" /> Certifications
                </h2>
                <ul className="space-y-2 text-sm">
                  {certifications.map((cert, i) => (
                    <li key={i}>
                      <span className="font-medium">{cert.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 print:text-gray-600"> - {cert.issuer} ({cert.year})</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4 flex items-center gap-2">
                  <FaLanguage className="text-blue-500" /> Languages
                </h2>
                <ul className="space-y-2 text-sm">
                  {languages.map((lang, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{lang.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 print:text-gray-600">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
