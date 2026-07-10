// src/components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import translations from "../translations";

export default function Timeline({ language = "en" }) {
  const t = translations[language].timeline;
  const timelineData = t.items;

  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-6 text-white overflow-hidden"
      id="timeline"
    >
      {/* Grid + orb decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          darkBg
        />

        <div className="relative pl-6 sm:pl-12 border-l-2 border-blue-500/40">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-10 ml-4 relative group"
            >
              {/* Timeline marker with pulse */}
              <div className="absolute -left-[3.25rem] top-1 flex items-center justify-center">
                <div className="absolute w-10 h-10 rounded-full bg-blue-500/30 animate-ping opacity-40"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg ring-4 ring-[#0f172a]">
                  {index + 1}
                </div>
              </div>

              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg group-hover:border-blue-400/40 group-hover:bg-white/[0.06] transition-all">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {item.date}
                  </span>
                </div>
                <h4 className="text-sm text-blue-300 font-medium mb-2">{item.subtitle}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center italic text-sm text-gray-400 mt-12"
        >
          "{t.quote}"
        </motion.p>
      </div>
    </section>
  );
}
