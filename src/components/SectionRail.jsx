// src/components/SectionRail.jsx
import React, { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Journey" },
  { id: "certifications", label: "Credentials" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
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
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
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
              className={`text-xs font-mono uppercase tracking-widest transition-all ${
                isActive
                  ? "opacity-100 text-blue-600 dark:text-blue-400"
                  : "opacity-0 group-hover:opacity-100 text-gray-500 dark:text-gray-400"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all ${
                isActive
                  ? "w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                  : "w-2 h-2 bg-gray-400 dark:bg-gray-600 group-hover:bg-blue-500"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
