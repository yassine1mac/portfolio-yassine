import React, { useState, useEffect } from "react";
import translations from "../translations";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18" /><path d="M3 17h18" /></>}
    </svg>
  );
}

export default function Navbar({ theme, setTheme, language = "en" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const t = translations[language].navbar;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { name: t.about, href: "#about", id: "about" },
    { name: t.projects, href: "#projects", id: "projects" },
    { name: t.skills, href: "#skills", id: "skills" },
    { name: t.contact, href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  return (
    <header role="banner">
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-200"
        style={{
          backgroundColor: scrolled ? "color-mix(in oklab, var(--bg) 82%, transparent)" : "color-mix(in oklab, var(--bg) 70%, transparent)",
          borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-sm tracking-widest uppercase focus:outline-none"
            aria-label="Yassine Chmirrou — Home"
            style={{ color: "var(--fg)" }}
          >
            YC<span style={{ color: "var(--accent)" }}>_</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  role="menuitem"
                  className="relative px-3 py-2 text-sm font-medium transition-colors"
                  style={{ color: isActive ? "var(--fg)" : "var(--fg-muted)" }}
                >
                  {link.name}
                  <span
                    aria-hidden
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] transition-opacity"
                    style={{
                      backgroundColor: "var(--accent)",
                      opacity: isActive ? 1 : 0
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-chip border transition-colors"
              style={{ borderColor: "var(--hairline-strong)", color: "var(--fg)" }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-chip border transition-colors"
              style={{ borderColor: "var(--hairline-strong)", color: "var(--fg)" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 z-40"
              style={{ backgroundColor: "color-mix(in oklab, var(--ink) 60%, transparent)" }}
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <div
              id="mobile-menu"
              className="md:hidden relative z-50 px-6 py-6"
              style={{
                backgroundColor: "var(--bg)",
                borderTop: "1px solid var(--hairline)"
              }}
              role="menu"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-3 text-base font-medium"
                    style={{ color: "var(--fg)" }}
                    role="menuitem"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </>
        )}
      </nav>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-chip"
      >
        Skip to main content
      </a>
    </header>
  );
}
