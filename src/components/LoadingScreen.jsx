import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold">
            <span className="text-blue-500">Yassine</span>{" "}
            <span className="text-gray-400">Chmirrou</span>
          </h1>
        </motion.div>

        {/* Loading spinner */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-blue-500/30 rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
          </motion.div>

          <motion.div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full mx-auto"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 text-sm"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </div>
  );
}
