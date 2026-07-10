// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import translations from "../translations";

// Per-project static metadata (images + links). Copy stays in translations.js.
// TODO Yassine: replace `demo` / `code` "#" with real URLs once repos are public.
const projectMeta = {
  agrimind: {
    image: `${import.meta.env.BASE_URL}project-nlp.jpg`,
    demo: "#", // TODO Yassine: private on-premise project — leave "#" if no public demo
    code: "#"  // TODO Yassine: add repo URL if any part is public
  },
  sahbi: {
    image: `${import.meta.env.BASE_URL}project-voice.jpg`,
    demo: "#",
    code: "#"  // TODO Yassine: add SAHBI repo URL
  },
  volta: {
    image: `${import.meta.env.BASE_URL}project-portfolio.jpg`,
    demo: "#", // TODO Yassine: add VOLTA landing / app store URL if public
    code: "#"  // TODO Yassine: repo is client property — keep "#" if private
  },
  reviewsense: {
    image: `${import.meta.env.BASE_URL}project-nlp.jpg`,
    demo: "#",
    code: "#"  // TODO Yassine: add ReviewSense AI repo URL
  },
  cheating: {
    image: `${import.meta.env.BASE_URL}project-cheating.jpg`,
    demo: "#",
    code: "https://github.com/YassineChmirrou/Cheating-Detection"
  },
  "rag-chatbot": {
    image: `${import.meta.env.BASE_URL}project-chatbot.jpg`,
    demo: "#",
    code: "#"  // TODO Yassine: add RAG chatbot repo URL
  }
};

// Render `**bold**` markers as <strong> so descriptions keep their metric emphasis.
function renderDescription(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function Projects({ language = "en" }) {
  const t = translations[language].projects;
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const projects = t.items.map((item) => ({
    ...item,
    ...(projectMeta[item.key] || {})
  }));

  const categoryOrder = ["all", "ai", "fullstack", "mobile", "cv"];
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 -mt-6">
          {categoryOrder.map((catKey) => (
            <button
              key={catKey}
              onClick={() => setFilter(catKey)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === catKey
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {t.categories[catKey]}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.key}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <FaStar className="text-xs" /> {t.featuredBadge}
                </div>
              )}

              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden m-[1px]">
                {/* Image with overlay */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 dark:text-white shadow-lg">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                    {renderDescription(project.description)}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:shadow-lg transition-all"
                        aria-label={`${t.liveDemo} · ${project.title}`}
                      >
                        <FaExternalLinkAlt size={12} aria-hidden="true" /> {t.liveDemo}
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.code || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.demo && project.demo !== "#" ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all`}
                      aria-label={`${t.viewCode} · ${project.title}`}
                    >
                      <FaGithub size={14} aria-hidden="true" /> {t.viewCode}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more/less button */}
      {filteredProjects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <FaCode aria-hidden="true" />
            {showAll ? t.showLess : t.showAll(filteredProjects.length)}
          </button>
        </motion.div>
      )}
      </div>
    </section>
  );
}
