import React from "react";

// A single blinking terminal cursor. Design brief: 600ms max window.
export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "var(--ink)" }}
      role="status"
      aria-label="Loading"
    >
      <div className="font-mono text-lg" style={{ color: "#E6ECF3" }}>
        <span style={{ color: "var(--accent-bright)" }}>❯</span>
        <span className="term-cursor" style={{ color: "#E6ECF3", marginLeft: "8px" }} aria-hidden />
      </div>
    </div>
  );
}
