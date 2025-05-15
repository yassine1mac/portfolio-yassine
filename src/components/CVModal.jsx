// src/components/CVModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilePdf, FaTimes } from "react-icons/fa";

export default function CVModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center my-20">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
      >
        <FaFilePdf />
        View My CV
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-5xl w-full h-[90vh]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
              >
                <FaTimes />
              </button>

              <iframe
                src="/CV_YASSINE_CHMIRROU.pdf"
                title="Yassine Chmirrou CV"
                className="w-full h-full"
              >
                <p className="p-6 text-center">
                  Your browser does not support iframes.{" "}
                  <a
                    href="/CV_YASSINE_CHMIRROU.pdf"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to download the PDF.
                  </a>
                </p>
              </iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
