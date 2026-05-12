// src/components/CVModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilePdf, FaTimes, FaDownload } from "react-icons/fa";

export default function CVModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center my-20">
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:scale-105"
      >
        <FaFilePdf className="text-xl" />
        View My CV
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl h-[92vh] border border-gray-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                  Yassine Chmirrou — CV
                </h2>

                <div className="flex items-center gap-4">
                  {/* Download Button */}
                  <a
                    href="/CV__YASSINE_CHMIRROU.pdf"
                    download
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    <FaDownload />
                    Download
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl transition"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <iframe
                src="/CV__YASSINE_CHMIRROU.pdf"
                title="Yassine Chmirrou CV"
                className="w-full h-full bg-white"
              />

              {/* Fallback */}
              <div className="hidden">
                <p>
                  Your browser does not support PDFs.
                  <a
                    href="/CV__YASSINE_CHMIRROU.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-2"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}