import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "initial-height-important": "initial !important",
        "mobile-card-height": "66vh",
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
        "burger-bg": "#171717",
        "gray-middle": "#27272a",
        "gray-light": "#404040",
      },
      borderRadius: {
        "card-radius": "50px",
      },
    },
  },
  plugins: [],
};
export default config;
