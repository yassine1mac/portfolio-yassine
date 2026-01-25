import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Core components - load immediately
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
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
const CVModal = lazy(() => import('./components/CVModal'));
const Resume = lazy(() => import('./components/Resume'));

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
            {/* Navigation */}
            <Navbar theme={theme} setTheme={setTheme} />
            <LanguageToggle language={language} setLanguage={setLanguage} />

            {/* Main Content */}
            <main id="main-content" role="main">
              {/* Hero Section */}
              <Hero language={language} />
              <WaveSeparator />

              {/* Lazy-loaded sections wrapped in Suspense */}
              <Suspense fallback={<SectionLoader />}>
                <Timeline />
              </Suspense>
              <WaveSeparator flip />

              <Suspense fallback={<SectionLoader />}>
                <Certifications />
              </Suspense>
              <WaveSeparator />

              <Suspense fallback={<SectionLoader />}>
                <TechStack />
              </Suspense>
              <WaveSeparator flip />

              <Suspense fallback={<SectionLoader />}>
                <Skills />
              </Suspense>
              <WaveSeparator />

              <Suspense fallback={<SectionLoader />}>
                <Projects />
              </Suspense>
              <WaveSeparator flip />

              <Suspense fallback={<SectionLoader />}>
                <Testimonials />
              </Suspense>
              <WaveSeparator />

              <Suspense fallback={<SectionLoader />}>
                <AboutMe />
              </Suspense>
              <WaveSeparator flip />

              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
              <WaveSeparator />

              <Suspense fallback={<SectionLoader />}>
                <Resume />
              </Suspense>
            </main>

            {/* CV Modal */}
            <Suspense fallback={null}>
              <CVModal />
            </Suspense>

            {/* Footer */}
            <Footer />

            {/* Scroll to top button */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
