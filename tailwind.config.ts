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
        ping: "ping 10s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        ping: {
          "7%, 100%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
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
