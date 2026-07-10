import React from "react";

// Section header aligned with the design tokens.
// - eyebrow: JetBrains Mono, uppercase, accent color, formatted `[ NN · TITLE ]`
// - title:   Bricolage Grotesque, tight leading
// - description: Inter, muted
//
// `align` defaults to left; the wireframe editorial feel prefers left-aligned
// headers. Pass align="center" if a section needs it.
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <div className="eyebrow mb-5">[ {eyebrow} ]</div>
      )}
      <h2 className="h-section max-w-3xl" style={{ color: "var(--fg)" }}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: "var(--fg-muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
