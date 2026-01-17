import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains)", "Fira Code", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        terminal: {
          bg: "#0a0a0a",
          surface: "#141414",
          border: "#2a2a2a",
          text: "#fafafa",
          muted: "#a1a1a1",
          cyan: "#67e8f9",
          green: "#4ade80",
          purple: "#c4b5fd",
          orange: "#fdba74",
          pink: "#f9a8d4",
          red: "#fca5a5",
          yellow: "#fde047",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
