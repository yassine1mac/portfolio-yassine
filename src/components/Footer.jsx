import React from "react";

// One-line mono footer per the design brief.
export default function Footer({ language = "en" }) {
  const year = new Date().getFullYear();
  const suffix = language === "fr"
    ? "conçu avec React · déployé sur GitHub Pages"
    : "built with React · deployed on GitHub Pages";

  return (
    <footer
      className="w-full px-6 py-8 border-t"
      style={{
        borderColor: "var(--hairline)",
        backgroundColor: "var(--bg)"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
          © {year} Yassine Chmirrou — {suffix}
        </p>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest">
          <a
            href="https://github.com/YassineChmirrou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--fg-muted)" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yassinechmirrou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--fg-muted)" }}
          >
            LinkedIn
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--fg-muted)" }}
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
