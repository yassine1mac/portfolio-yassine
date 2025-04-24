import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold text-blue-400">Yassine Chmirrou</h1>
        <p className="text-lg text-gray-300 mt-2">AI & Big Data Engineering Student @ ENSA Tétouan</p>
        <p className="text-sm text-gray-500">Passionate about ML, Data, and building impactful solutions</p>
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <a href="https://github.com/YassineChmirrou" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yassinechmirrou" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:yassinechmirrou1@gmail.com"><FaEnvelope /></a>
        </div>
      </header>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-400 mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard title="Food & Calorie Estimation App" tech="ResNet18, Streamlit, Docker"
            desc="Deep learning model to classify food and estimate calories. Built with PyTorch and deployed via Streamlit."
          />
          <ProjectCard title="Cheating Detection System" tech="Pose Estimation, MLflow"
            desc="Behavior classifier based on body keypoints. Used XGBoost, RandomForest, and MLflow for tracking."
          />
          <ProjectCard title="Hotel Review Sentiment Analysis" tech="Selenium, BERT, LDA"
            desc="Scraped reviews from Booking & TripAdvisor. Applied topic modeling and BERT sentiment classification."
          />
        </div>
      </section>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-400 mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <li>Python</li>
          <li>SQL</li>
          <li>JavaScript</li>
          <li>TensorFlow / PyTorch</li>
          <li>Streamlit / Flask</li>
          <li>Power BI / Excel</li>
          <li>Docker / Git</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <a href="/Yassine_Chmirrou_CV.pdf" download className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-white">
          Download My CV
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 pb-6">
        © 2025 Yassine Chmirrou • Built with React
      </footer>
    </div>
  );
}

function ProjectCard({ title, tech, desc }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl text-blue-400 font-semibold">{title}</h3>
      <p className="text-xs text-gray-400">{tech}</p>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  );
}
