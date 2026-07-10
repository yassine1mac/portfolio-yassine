import React, { useEffect, useState } from "react";

// Vanilla replacement for the framer-motion scroll progress bar.
// 2px accent line at the very top of the viewport.
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? window.scrollY / total : 0;
      setPct(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        backgroundColor: "var(--accent)",
        transform: `scaleX(${pct})`,
        transformOrigin: "left"
      }}
    />
  );
}
