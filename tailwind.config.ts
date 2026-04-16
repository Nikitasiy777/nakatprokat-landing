import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:        "#F8F6F0",
        "cream-dark": "#EEECEA",
        lime:         "#BFE65F",
        "lime-dark":  "#9FCC3A",
        "lime-bg":    "#EDF8C4",
        dark:         "#2C2C2C",
        "dark-header":"#1C1B18",
        "text-sub":   "#6B6860",
        border:       "#DDD9CE",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1152px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
