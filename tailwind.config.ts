import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        "lazy-flex": "bounce linear 30s 1s infinite",
      },
      keyframes: {
        bounce: {
          "96.5%": { transform: "rotate(0deg)" },
          "97.5%": { transform: "rotate(180deg)" },
          "99%": { transform: "rotate(360deg)" },
          "20%, 100%": { transform: "rotate(0deg)" },
        },
      },
      height: {
        "initial-height-important": "initial !important",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-sf":
          "linear-gradient(90deg, #9747FF 0%, #F2B700 50%, #9747FF 100%)",
      },
      colors: {
        golden: "#f2b700",
        purple: "#9a34e8",
        main: "#171717",
        "gray-middle": "#27272a",
        "gray-light": "#404040",
        "order-card-bg": "#1C1C1C",
      },
      borderRadius: {
        "card-radius": "50px",
      },
    },
  },
  plugins: [],
};

export default config;
