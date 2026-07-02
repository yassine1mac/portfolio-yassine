// src/components/WaveSeparator.jsx
import React from "react";

/**
 * A subtle divider between sections. Uses low-opacity gradients so
 * the section content stays the focal point instead of a loud wave.
 */
export default function WaveSeparator({ flip = false }) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none -mt-px -mb-px pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className={`block w-full h-10 sm:h-14 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradientSoft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradientSoft)"
          d="M0,40 C240,70 480,10 720,40 C960,70 1200,20 1440,45 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  );
}
