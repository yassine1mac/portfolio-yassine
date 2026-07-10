import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

// Per-project static metadata (links + monogram + featured metrics).
// Copy stays in translations.js.
const projectMeta = {
  agrimind: {
    monogram: "AM",
    demo: "#", // TODO Yassine
    code: "#", // TODO Yassine
    metrics: [
      { value: "987", unit: "tables" },
      { value: "91s → 400 ms", unit: "quality control" },
      { value: "33", unit: "FastAPI endpoints" }
    ]
  },
  sahbi: { monogram: "SB", demo: "#", code: "#" },
  volta: { monogram: "VO", demo: "#", code: "#" },
  reviewsense: { monogram: "RS", demo: "#", code: "#" },
  cheating: { monogram: "CD", demo: "#", code: "https://github.com/YassineChmirrou/Cheating-Detection" },
  "rag-chatbot": { monogram: "RC", demo: "#", code: "#" }
};

// Render `**bold**` markers as <strong> so descriptions keep their metric emphasis.
function renderDescription(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-mono font-semibold" style={{ color: "var(--fg)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

// Small hex-node motif used as a screenshot substitute in the top strip of
// each secondary project card. Deterministic per monogram so it stays stable.
function ProjectMark({ monogram, size = 88 }) {
  const dots = [];
  const cols = 8;
  const rows = 3;
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const offset = r % 2 === 0 ? 0 : (size / cols) / 2;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * (size / cols) + (size / cols) / 2 + offset}
          cy={r * (size / rows) + (size / rows) / 2}
          r="1.2"
          fill="currentColor"
          opacity={0.35}
        />
      );
    }
  }
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden rounded-chip"
      style={{
        height: 96,
        backgroundColor: "var(--surface-alt)",
        border: "1px solid var(--hairline)"
      }}
    >
      <svg
        aria-hidden
        viewBox={`0 0 ${size * 3} ${size}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ color: "var(--accent)" }}
      >
        {dots}
      </svg>
      <span
        className="relative font-mono text-2xl font-semibold tracking-widest"
        style={{ color: "var(--fg)" }}
      >
        {monogram}
      </span>
    </div>
  );
}

function ProjectCard({ project, t }) {
  const ref = useReveal();
  const meta = projectMeta[project.key] || {};
  const monogram = meta.monogram || project.title.slice(0, 2).toUpperCase();
  const hasDemo = meta.demo && meta.demo !== "#";
  const hasCode = meta.code && meta.code !== "#";

  return (
    <article
      ref={ref}
      className="reveal group flex flex-col rounded-card border p-5 transition-all duration-200"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--hairline)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--hairline)";
      }}
    >
      <ProjectMark monogram={monogram} />

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl" style={{ color: "var(--fg)" }}>
          {project.title}
        </h3>
        <span className="font-mono text-[11px] uppercase tracking-widest whitespace-nowrap" style={{ color: "var(--fg-muted)" }}>
          {project.categoryLabel}
        </span>
      </div>

      <p className="mt-3 text-sm line-clamp-4" style={{ color: "var(--fg-muted)" }}>
        {renderDescription(project.description)}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((tag, i) => (
          <span
            key={i}
            className="font-mono text-[11px] px-2 py-0.5 rounded-chip border"
            style={{ borderColor: "var(--hairline-strong)", color: "var(--fg-muted)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 flex items-center gap-4 border-t" style={{ borderColor: "var(--hairline)" }}>
        {hasDemo && (
          <a
            href={meta.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            {t.liveDemo} →
          </a>
        )}
        {hasCode && (
          <a
            href={meta.code}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: "var(--fg-muted)" }}
          >
            {t.viewCode} ↗
          </a>
        )}
        {!hasDemo && !hasCode && (
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
            — private —
          </span>
        )}
      </div>
    </article>
  );
}

function FeaturedCard({ project, t }) {
  const ref = useReveal();
  const meta = projectMeta[project.key] || {};
  const monogram = meta.monogram || project.title.slice(0, 2).toUpperCase();
  const metrics = meta.metrics || [];

  return (
    <article
      ref={ref}
      className="reveal relative rounded-card border p-6 md:p-10 mb-10 overflow-hidden"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--accent)",
        boxShadow: "0 20px 60px -30px rgba(26,75,199,0.35)"
      }}
    >
      {/* Featured label */}
      <div className="absolute top-6 right-6 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {t.featuredBadge}
      </div>

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10">
        {/* Left: description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="font-mono text-sm font-semibold flex items-center justify-center rounded-chip"
              style={{
                width: 44,
                height: 44,
                backgroundColor: "var(--console)",
                color: "var(--terminal)",
                border: "1px solid var(--hairline-strong)"
              }}
            >
              {monogram}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
              {project.categoryLabel}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl leading-tight" style={{ color: "var(--fg)" }}>
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            {renderDescription(project.description)}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[11px] px-2 py-0.5 rounded-chip border"
                style={{ borderColor: "var(--hairline-strong)", color: "var(--fg-muted)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: metrics rail */}
        <div
          className="flex flex-col justify-center gap-6 md:pl-8 md:border-l"
          style={{ borderColor: "var(--hairline)" }}
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="font-mono text-3xl md:text-4xl font-semibold leading-none" style={{ color: "var(--fg)" }}>
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
                {m.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ language = "en" }) {
  const t = translations[language].projects;
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const featured = t.items.find((p) => p.key === "agrimind");
  const rest = t.items.filter((p) => p.key !== "agrimind");

  const categoryOrder = ["all", "ai", "fullstack", "mobile", "cv"];
  const filteredRest = rest.filter(
    (project) => filter === "all" || project.category === filter
  );
  const displayed = showAll ? filteredRest : filteredRest.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Featured — AgriMind */}
        {featured && <FeaturedCard project={featured} t={t} />}

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryOrder.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-chip border transition-colors"
                style={{
                  backgroundColor: active ? "var(--accent)" : "transparent",
                  borderColor: active ? "var(--accent)" : "var(--hairline-strong)",
                  color: active ? "#fff" : "var(--fg-muted)"
                }}
              >
                {t.categories[cat]}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {displayed.map((project) => (
            <ProjectCard key={project.key} project={project} t={t} />
          ))}
        </div>

        {/* Show more */}
        {filteredRest.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-chip border transition-colors"
              style={{ borderColor: "var(--hairline-strong)", color: "var(--fg)" }}
            >
              {showAll ? t.showLess : t.showAll(filteredRest.length)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
