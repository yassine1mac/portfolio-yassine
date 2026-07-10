// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101E33",
        paper: "#F7F8FA",
        navy: "#16324F",
        console: "#0C1626",
        "surface-2": "#12233A",
        accent: {
          DEFAULT: "#1A4BC7",
          bright: "#3E6BD8"
        },
        terminal: "#2BD576",
        slate: "#5A6B7B"
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.02em"
      },
      borderRadius: {
        card: "10px",
        chip: "6px",
        terminal: "14px"
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(16,30,51,0.08)",
        "hairline-dark": "0 0 0 1px rgba(255,255,255,0.08)",
        "accent-glow": "0 0 0 3px rgba(26,75,199,0.15)"
      }
    }
  },
  plugins: []
};
