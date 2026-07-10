import React from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

// The AI/LLMs block gets an accent border to emphasize the CV pillar.
function SkillGroup({ category, isAccent }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal rounded-card border p-6"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: isAccent ? "var(--accent)" : "var(--hairline)"
      }}
    >
      <div
        className="font-mono text-[11px] uppercase tracking-widest mb-4"
        style={{ color: isAccent ? "var(--accent)" : "var(--fg-muted)" }}
      >
        {category.category}
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {category.skills.map((s, i) => (
          <li key={i}>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-chip border inline-block"
              style={{
                borderColor: "var(--hairline-strong)",
                color: "var(--fg)"
              }}
            >
              {s.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills({ language = "en" }) {
  const t = translations[language].skills;

  return (
    <section
      id="skills"
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
          {t.categories.map((cat, i) => (
            <SkillGroup key={i} category={cat} isAccent={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
