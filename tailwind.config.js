/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        forge: {
          bg: "#0c0c0e",
          surface: "#111114",
          card: "#16161a",
          border: "#222228",
          muted: "#2a2a32",
          accent: "#5b8af0",
          "accent-dim": "#3a5fbc",
          text: "#e8e8f0",
          "text-muted": "#6b6b7a",
          "text-dim": "#404050",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease forwards",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
