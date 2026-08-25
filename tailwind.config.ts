import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        panel: "#0b0b10",
        red: "#ef233c",
        blue: "#2563eb"
      },
      boxShadow: {
        glow: "0 0 40px rgba(239,35,60,.20)"
      }
    }
  },
  plugins: []
};

export default config;