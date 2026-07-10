import React, { useState, useEffect, Suspense, lazy } from "react";

// Core components - load immediately
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import SectionRail from "./components/SectionRail";
import LanguageToggle from "./components/LanguageToggle";

// Lazy load other components for better performance
const Timeline = lazy(() => import("./components/Timeline"));
const Certifications = lazy(() => import("./components/Certifications"));
const TechStack = lazy(() => import("./components/TechStack"));
const Skills = lazy(() => import("./components/Skills"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20" role="status" aria-label="Loading section">
      <span className="font-mono text-sm text-slate">…</span>
    </div>
  );
}

// Read the class the anti-FOUC script set on <html>.
function readInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function readInitialLanguage() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") return stored;
    return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  } catch (e) {
    return "en";
  }
}

export default function App() {
  const [theme, setTheme] = useState(readInitialTheme);
  const [language, setLanguage] = useState(readInitialLanguage);
  const [isLoading, setIsLoading] = useState(true);

  // Short loading window; matches the LoadingScreen animation budget.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("lang", language);
    } catch (e) { /* ignore */ }
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <ErrorBoundary>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="min-h-screen bg-paper text-ink dark:bg-ink dark:text-[color:var(--fg)] font-sans">
          <ScrollProgress />
          <SectionRail />

          <Navbar theme={theme} setTheme={setTheme} language={language} />
          <LanguageToggle language={language} setLanguage={setLanguage} />

          <main id="main-content" role="main">
            <Hero language={language} />

            <Suspense fallback={<SectionLoader />}>
              <AboutMe language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Skills language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <TechStack language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Projects language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Timeline language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Certifications language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Testimonials language={language} />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Contact language={language} />
            </Suspense>
          </main>

          <Footer language={language} />
          <ScrollToTop />
        </div>
      )}
    </ErrorBoundary>
  );
}
