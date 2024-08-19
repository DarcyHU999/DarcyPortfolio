import { Opacity } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "50": "50px",
        "10": "10px",
      },
      keyframes: {
        menuCollapse: {
          "0%": { width: "100%" },
          "100%": { width: "0" },
        },
        menuExpand: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        textCollapse: {
          "0%": { opacity: "1", left: "0px" },
          "100%": { opacity: "0", left: "50px" },
        },
        textExpand: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "menu-expand": "menuExpand 1s ease-out forwards",
        "menu-collapse": "menuCollapse 1s ease-out forwards",
        "text-expand": "textExpand 0.5s ease-out forwards",
        "text-collapse": "textCollapse 0.5s ease-out forwards",
      },
      textColor: {
        DEFAULT: "text-gray-700",
      },
      screens: {
        xl: "1440px",
      },
      width: {
        "4/10": "40%",
        "3/10": "30%",
      },
    },
  },
  plugins: [],
};
export default config;
