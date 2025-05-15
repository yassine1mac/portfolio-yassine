// tailwind.config.js
module.exports = {
  darkMode: "class", // enable manual toggling
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      zIndex: {
        "-10": "-10"
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        satoshi: ["'Satoshi'", "sans-serif"]
      },
      colors: {
        // 🎨 new cyber–neon palette
        primary: {
          light: "#6EE7B7",   // mint
          DEFAULT: "#10B981", // emerald
          dark: "#047857"     // deep emerald
        },
        accent: {
          light: "#F472B6",   // pink
          DEFAULT: "#EC4899", // hot-pink
          dark: "#BE185D"     // magenta
        },
        surface: {
          DEFAULT: "#1F2937", // slate-800
          light: "#374151",   // slate-700
          dark: "#111827"     // slate-900
        }
      }
    }
  },
  plugins: []
};
