import React from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

const certifications = [
  {
    title: "Deep Learning Specialization",
    provider: "Coursera · DeepLearning.AI",
    skills: ["Neural Networks", "CNN", "RNN", "Transformers"],
    date: "2023",
    status: "completed"
  },
  {
    title: "Machine Learning",
    provider: "Coursera · Stanford",
    skills: ["Supervised Learning", "Regression", "Classification"],
    date: "2023",
    status: "completed"
  },
  {
    title: "Python for Data Science",
    provider: "Kaggle",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
    date: "2022",
    status: "completed"
  },
  {
    title: "Data Engineering",
    provider: "DataCamp",
    skills: ["ETL", "SQL", "Data Pipelines", "Cloud"],
    date: "2023",
    status: "completed"
  },
  {
    title: "TensorFlow Developer",
    provider: "Google",
    skills: ["TensorFlow", "Keras", "Model Deployment"],
    date: "2025",
    status: "completed"
  },
  {
    title: "AWS Machine Learning",
    provider: "Amazon Web Services",
    skills: ["SageMaker", "Lambda", "S3", "EC2"],
    date: "2026",
    status: "in-progress"
  },
  {
    title: "State Engineer Degree — Big Data & AI",
    provider: "ENSA Tétouan · Abdelmalek Essaâdi University",
    skills: ["Machine Learning", "Big Data", "Cloud", "MLOps"],
    date: "2026",
    status: "completed"
  }
];

function Card({ cert, t }) {
  const ref = useReveal();
  const completed = cert.status === "completed";
  return (
    <article
      ref={ref}
      className="reveal rounded-card border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--hairline)" }}
    >
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
          {cert.date}
        </span>
        <span
          className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-chip border"
          style={{
            borderColor: completed ? "var(--hairline-strong)" : "var(--accent)",
            color: completed ? "var(--fg-muted)" : "var(--accent)"
          }}
        >
          {completed ? t.statusCompleted : t.statusInProgress}
        </span>
      </div>
      <h3 className="font-display text-lg" style={{ color: "var(--fg)" }}>
        {cert.title}
      </h3>
      <div className="mt-1 font-mono text-xs" style={{ color: "var(--accent)" }}>
        {cert.provider}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {cert.skills.map((s, i) => (
          <span
            key={i}
            className="font-mono text-[11px] px-2 py-0.5 rounded-chip border"
            style={{ borderColor: "var(--hairline-strong)", color: "var(--fg-muted)" }}
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Certifications({ language = "en" }) {
  const t = translations[language].certifications;

  return (
    <section
      id="certifications"
      className="relative w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Card key={i} cert={cert} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
