import React from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

function TimelineItem({ item, isLast }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal relative pl-8 md:pl-0">
      {/* Mobile / small screens: vertical rail on left */}
      <div className="md:hidden">
        <span
          className="absolute left-[3px] top-2 w-2.5 h-2.5"
          style={{ backgroundColor: "var(--accent)" }}
          aria-hidden
        />
        <div className="font-mono text-[11px] uppercase tracking-widest mb-1" style={{ color: "var(--fg-muted)" }}>
          {item.date}
        </div>
        <h3 className="font-display text-lg" style={{ color: "var(--fg)" }}>
          {item.title}
        </h3>
        <div className="mt-1 font-mono text-xs" style={{ color: "var(--accent)" }}>
          {item.subtitle}
        </div>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          {item.description}
        </p>
        {!isLast && <div className="h-8" />}
      </div>

      {/* Desktop: 2-column data-lineage layout */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "180px 32px 1fr", gap: "0" }}>
        {/* Date rail */}
        <div className="pr-8 pt-1 text-right">
          <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
            {item.date}
          </div>
        </div>

        {/* Node column */}
        <div className="relative flex justify-center">
          <span
            className="absolute top-2 w-2.5 h-2.5"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden
          />
        </div>

        {/* Card */}
        <div className="pl-6 pb-10">
          <h3 className="font-display text-xl" style={{ color: "var(--fg)" }}>
            {item.title}
          </h3>
          <div className="mt-1 font-mono text-xs" style={{ color: "var(--accent)" }}>
            {item.subtitle}
          </div>
          <p className="mt-3 text-sm leading-relaxed max-w-2xl" style={{ color: "var(--fg-muted)" }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ language = "en" }) {
  const t = translations[language].timeline;

  return (
    <section
      id="timeline"
      className="relative w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="relative">
          {/* Rail — mobile */}
          <div
            className="md:hidden absolute left-1 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--hairline-strong)" }}
            aria-hidden
          />

          {/* Rail — desktop (aligned under node column) */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-px"
            style={{
              backgroundColor: "var(--hairline-strong)",
              left: "calc(180px + 16px)" // 180px date column + half of 32px node column
            }}
            aria-hidden
          />

          <div>
            {t.items.map((item, i) => (
              <TimelineItem key={i} item={item} isLast={i === t.items.length - 1} />
            ))}
          </div>
        </div>

        <p
          className="mt-16 font-mono text-xs uppercase tracking-widest"
          style={{ color: "var(--fg-muted)" }}
        >
          — {t.quote}
        </p>
      </div>
    </section>
  );
}
