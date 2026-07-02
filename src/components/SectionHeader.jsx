// src/components/SectionHeader.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Consistent header used across every section.
 * Renders: eyebrow (01 · About), gradient title, description.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  darkBg = false,
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`relative z-10 flex flex-col ${alignClass} mb-14`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 ${
          darkBg ? "" : ""
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            darkBg ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
