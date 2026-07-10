import React from "react";
import translations from "../translations";
import HeroTerminal from "./HeroTerminal";
import Constellation from "./Constellation";

export default function Hero({ language }) {
  const t = translations[language].hero;
  const demo = translations[language].heroDemo;

  return (
    <section
      id="hero"
      className="relative w-full pt-28 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden"
    >
      {/* Constellation background */}
      <div
        className="pointer-events-none absolute inset-0 text-ink dark:text-white"
        style={{ opacity: 0.06 }}
        aria-hidden
      >
        <Constellation className="w-full h-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid gap-14 md:grid-cols-2 md:gap-16 items-center">
        {/* Left column */}
        <div>
          <div className="eyebrow mb-6">[ 00 · {language === "fr" ? "INGÉNIEUR" : "ENGINEER"} ]</div>

          <h1 className="h-hero">
            {t.subtitle}
          </h1>

          <p className="mt-6 text-base sm:text-lg max-w-lg" style={{ color: "var(--fg-muted)" }}>
            {t.description}
          </p>

          <p className="mt-4 font-mono text-xs" style={{ color: "var(--fg-muted)" }}>
            {t.badge}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-chip bg-accent text-white font-medium text-sm hover:bg-accent-bright transition-colors"
            >
              {t.projectsCta}
              <span aria-hidden className="font-mono">→</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-chip border font-medium text-sm transition-colors"
              style={{
                borderColor: "var(--hairline-strong)",
                color: "var(--fg)"
              }}
            >
              {t.cv}
              <span aria-hidden className="font-mono opacity-60">↓</span>
            </a>
          </div>
        </div>

        {/* Right column — terminal */}
        <div className="w-full">
          <HeroTerminal demo={demo} />
        </div>
      </div>
    </section>
  );
}
