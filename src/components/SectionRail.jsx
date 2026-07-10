import React, { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Journey" },
  { id: "certifications", label: "Credentials" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" }
];

export default function SectionRail() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={`Go to ${s.label}`}
            className="group relative flex items-center justify-end gap-3"
          >
            <span
              className="font-mono text-[10px] uppercase tracking-widest transition-opacity"
              style={{
                opacity: isActive ? 1 : 0,
                color: isActive ? "var(--accent)" : "var(--fg-muted)"
              }}
            >
              {s.label}
            </span>
            <span
              aria-hidden
              className="block transition-all"
              style={{
                width: isActive ? "12px" : "6px",
                height: "6px",
                backgroundColor: isActive ? "var(--accent)" : "var(--hairline-strong)"
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
