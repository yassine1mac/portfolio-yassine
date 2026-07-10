import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Core components - load immediately
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import SectionRail from "./components/SectionRail";
import WaveSeparator from "./components/WaveSeparator";
import LanguageToggle from "./components/LanguageToggle";

// Lazy load other components for better performance
const Timeline = lazy(() => import('./components/Timeline'));
const Certifications = lazy(() => import('./components/Certifications'));
const TechStack = lazy(() => import('./components/TechStack'));
const Skills = lazy(() => import('./components/Skills'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));

// Section loading fallback
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(true);

  // Initial loading simulation for smooth entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Theme management
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Preload critical fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.gstatic.com";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white font-sans"
          >
            {/* Reading progress bar */}
            <ScrollProgress />

            {/* Right-side section rail (desktop only) */}
            <SectionRail />

            {/* Navigation */}
            <Navbar theme={theme} setTheme={setTheme} language={language} />
            <LanguageToggle language={language} setLanguage={setLanguage} />

            {/* Main Content */}
            <main id="main-content" role="main">
              {/* Hero Section */}
              <Hero language={language} />
              <WaveSeparator />

              {/* 01 · About — who I am */}
              <Suspense fallback={<SectionLoader />}>
                <AboutMe language={language} />
              </Suspense>
              <WaveSeparator flip />

              {/* 02 · Skills — what I can do */}
              <Suspense fallback={<SectionLoader />}>
                <Skills language={language} />
              </Suspense>
              <WaveSeparator />

              {/* 03 · Tech Stack — tools I use */}
              <Suspense fallback={<SectionLoader />}>
                <TechStack language={language} />
              </Suspense>
              <WaveSeparator flip />

              {/* 04 · Projects — what I've built */}
              <Suspense fallback={<SectionLoader />}>
                <Projects language={language} />
              </Suspense>
              <WaveSeparator />

              {/* 05 · Timeline — my journey */}
              <Suspense fallback={<SectionLoader />}>
                <Timeline language={language} />
              </Suspense>
              <WaveSeparator flip />

              {/* 06 · Certifications — credentials */}
              <Suspense fallback={<SectionLoader />}>
                <Certifications language={language} />
              </Suspense>
              <WaveSeparator />

              {/* 07 · Testimonials — social proof */}
              <Suspense fallback={<SectionLoader />}>
                <Testimonials language={language} />
              </Suspense>
              <WaveSeparator flip />

              {/* 08 · Contact — let's talk */}
              <Suspense fallback={<SectionLoader />}>
                <Contact language={language} />
              </Suspense>
            </main>

            {/* Footer */}
            <Footer language={language} />

            {/* Scroll to top button */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
