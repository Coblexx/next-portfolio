import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/bg-img.jpg')",
      },
      maxWidth: {
        "1/3": "33.3%",
        "4/5": "80%",
      },
    },
    keyframes: {
      rotate90: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(-90deg)" },
      },
    },
  },
  plugins: [],
};
export default config;
