import React from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

function Highlight({ item }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal rounded-card border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--hairline)" }}
    >
      <div className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
        {item.title}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
        {item.description}
      </p>
    </div>
  );
}

export default function AboutMe({ language = "en" }) {
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] items-start mb-14">
          {/* Portrait */}
          <div className="max-w-sm">
            <div
              className="relative rounded-card overflow-hidden border"
              style={{ borderColor: "var(--hairline-strong)" }}
            >
              <img
                src={`${import.meta.env.BASE_URL}profile-yassine.jpg`}
                alt="Yassine Chmirrou"
                loading="lazy"
                className="w-full h-auto grayscale"
              />
            </div>
            <div className="mt-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
              Yassine Chmirrou · Agadir · Morocco
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-base md:text-lg" style={{ color: "var(--fg-muted)" }}>
            <p>
              {t.p1_prefix}
              <span className="font-semibold" style={{ color: "var(--fg)" }}>{t.p1_role}</span>
              {t.p1_middle}
              <span style={{ color: "var(--fg)" }}>{t.p1_field}</span>
              {t.p1_suffix}
              <span style={{ color: "var(--fg)" }}>{t.p1_class}</span>
              {t.p1_end}
            </p>
            <p>{t.p2}</p>
            <p>
              {t.p3_prefix}
              <span style={{ color: "var(--fg)" }}>{t.p3_role}</span>
              {t.p3_suffix}
            </p>
            <p>
              {t.p4_prefix}
              <span style={{ color: "var(--fg)" }}>{t.p4_bold}</span>
              {t.p4_middle}
              <span className="font-semibold" style={{ color: "var(--accent)" }}>{t.p4_bold2}</span>
              {t.p4_end}
            </p>

            <blockquote
              className="mt-6 pl-4 italic font-display text-lg"
              style={{ borderLeft: "2px solid var(--accent)", color: "var(--fg)" }}
            >
              {t.quote}
            </blockquote>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.highlights.map((h, i) => (
            <Highlight key={i} item={h} />
          ))}
        </div>
      </div>
    </section>
  );
}
