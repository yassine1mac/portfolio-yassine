import React, { useState, useEffect } from "react";

function ArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center rounded-chip border transition-colors"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--hairline-strong)",
        color: "var(--fg)"
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  );
}
