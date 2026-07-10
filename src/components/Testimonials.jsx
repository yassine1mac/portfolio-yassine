import React from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

// TODO Yassine: replace these placeholder testimonials with real ones from
// your PFE supervisor at AgriData, OCP tutors, or freelance clients (VOLTA,
// maritime tourism fleet). Current entries are placeholders from the initial
// scaffold and still mention removed projects.
const testimonials = [
  {
    name: "Dr. Ahmed Benali",
    role: "Engineering Supervisor · ENSA Tétouan",
    text: "Yassine is a rigorous engineer with deep intuition for machine learning systems. His graduation project on deep learning image classification reached 97% accuracy and shipped as a fully containerized service. He thinks in production, not just in notebooks."
  },
  {
    name: "Sarah Martinez",
    role: "Senior Data Scientist · TechCorp Solutions",
    text: "Working with Yassine on our fraud detection system was a pleasure. His command of XGBoost and real-time data pipelines is impressive — he delivered production-ready code ahead of schedule."
  },
  {
    name: "Mohamed Alami",
    role: "CTO · DataFlow Analytics",
    text: "Yassine's work on our ETL pipeline with Apache Airflow significantly improved our data processing efficiency. He brings innovative solutions to complex engineering problems and communicates them clearly."
  }
];

function Card({ q }) {
  const ref = useReveal();
  return (
    <figure
      ref={ref}
      className="reveal relative rounded-card border p-6 md:p-8"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--hairline)" }}
    >
      <span
        aria-hidden
        className="font-display absolute top-3 left-4 text-6xl leading-none select-none"
        style={{ color: "var(--accent)", opacity: 0.35 }}
      >
        “
      </span>
      <blockquote
        className="relative pt-6 font-display italic text-base md:text-lg leading-relaxed"
        style={{ color: "var(--fg)" }}
      >
        {q.text}
      </blockquote>
      <figcaption
        className="mt-5 pt-4 font-mono text-[11px] uppercase tracking-widest border-t"
        style={{ color: "var(--fg-muted)", borderColor: "var(--hairline)" }}
      >
        <span style={{ color: "var(--fg)" }}>{q.name}</span>
        <span className="mx-2">·</span>
        {q.role}
      </figcaption>
    </figure>
  );
}

export default function Testimonials({ language = "en" }) {
  const t = translations[language].testimonials;
  return (
    <section
      id="testimonials"
      className="relative w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <Card key={i} q={q} />
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
            {t.cta}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            {t.ctaButton} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
