import React from "react";

export default function LanguageToggle({ language, setLanguage }) {
  const toggle = () => setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  const label = language === "en" ? "FR" : "EN";

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-40 h-11 px-4 font-mono text-xs tracking-widest uppercase rounded-chip border transition-colors"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--hairline-strong)",
        color: "var(--fg)"
      }}
      aria-label={`Switch language to ${label}`}
    >
      {label}
    </button>
  );
}
