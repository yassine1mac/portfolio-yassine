// src/components/WaveSeparator.jsx
import React from "react";

export default function WaveSeparator({ flip = false }) {
  return (
    <div className="relative w-full overflow-hidden leading-none">
      <svg
        className={`w-full h-24 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,0 C360,100 1080,0 1440,120 L1440,0 L0,0 Z"
          opacity="0.8"
        />
        <path
          fill="url(#waveGradient)"
          d="M0,20 C480,120 960,20 1440,140 L1440,0 L0,0 Z"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}