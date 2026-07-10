import React, { useState } from "react";
import useTypewriter from "../hooks/useTypewriter";

const SQL_KEYWORDS = new Set([
  "SELECT", "FROM", "WHERE", "AND", "OR", "GROUP", "BY", "ORDER", "HAVING",
  "JOIN", "LEFT", "RIGHT", "INNER", "OUTER", "ON", "AS", "LIMIT", "SUM",
  "AVG", "COUNT", "MAX", "MIN", "BETWEEN", "IN", "LIKE", "IS", "NULL",
  "DESC", "ASC"
]);

// Tokenize a SQL line to color keywords vs. the rest. We split on whitespace
// and punctuation while keeping delimiters, so alignment stays intact.
function renderSqlLine(line) {
  const tokens = line.match(/(\s+|[A-Za-z_][A-Za-z0-9_]*|[^A-Za-z0-9_\s]+)/g) || [];
  return tokens.map((tok, i) => {
    const upper = tok.toUpperCase();
    if (SQL_KEYWORDS.has(upper)) {
      return (
        <span key={i} style={{ color: "var(--accent-bright)" }}>{tok}</span>
      );
    }
    return <span key={i} style={{ color: "var(--terminal)" }}>{tok}</span>;
  });
}

export default function HeroTerminal({ demo }) {
  const [paused, setPaused] = useState(false);
  const state = useTypewriter(demo.examples, { paused });
  const currentExample = demo.examples[state.index];
  const isTypingNl = state.phase === "typing-nl";
  const isFading = state.phase === "fading";

  return (
    <div
      className={`relative w-full rounded-terminal border overflow-hidden font-mono text-[13px] leading-relaxed transition-opacity duration-200 ${
        isFading ? "opacity-30" : "opacity-100"
      }`}
      style={{
        backgroundColor: "var(--console)",
        borderColor: "rgba(255,255,255,0.08)",
        color: "#C7D3E1",
        boxShadow: "0 10px 40px -20px rgba(26,75,199,0.35)"
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      role="region"
      aria-label={demo.title}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FF5F57" }} aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FEBC2E" }} aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28C840" }} aria-hidden />
        <span className="ml-3 text-[11px] tracking-widest uppercase" style={{ color: "#7A8CA4" }}>
          {demo.title}
        </span>
      </div>

      {/* Body */}
      <div
        className="px-4 sm:px-6 py-5 sm:py-6 min-h-[280px] sm:min-h-[320px]"
        aria-live="polite"
        aria-atomic="false"
      >
        {/* NL prompt line */}
        <div className="flex items-start gap-2">
          <span style={{ color: "var(--accent-bright)" }} aria-hidden>❯</span>
          <span style={{ color: "#E6ECF3" }} className="whitespace-pre-wrap break-words">
            {state.typedNl}
            {isTypingNl && <span className="term-cursor" style={{ color: "#E6ECF3" }} aria-hidden />}
          </span>
        </div>

        {/* SQL block */}
        <div className="mt-4 pl-4 border-l" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {state.typedSqlLines.length === 0 && state.phase !== "typing-nl" && (
            <div className="opacity-30" style={{ color: "var(--terminal)" }}>—</div>
          )}
          {state.typedSqlLines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {renderSqlLine(line)}
              {i === state.typedSqlLines.length - 1 && state.phase === "typing-sql" && (
                <span className="term-cursor" style={{ color: "var(--terminal)" }} aria-hidden />
              )}
            </div>
          ))}
        </div>

        {/* Result line */}
        <div
          className="mt-5 pt-3 border-t transition-opacity duration-200"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            opacity: state.showResult ? 1 : 0
          }}
        >
          <span style={{ color: "var(--terminal)" }}>
            → {currentExample.result}
          </span>
        </div>
      </div>

      {/* Example indicator dots */}
      <div
        className="flex items-center gap-1.5 px-4 pb-3"
        aria-hidden
      >
        {demo.examples.map((_, i) => (
          <span
            key={i}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === state.index ? 20 : 6,
              backgroundColor: i === state.index ? "var(--accent-bright)" : "rgba(255,255,255,0.12)"
            }}
          />
        ))}
      </div>
    </div>
  );
}
