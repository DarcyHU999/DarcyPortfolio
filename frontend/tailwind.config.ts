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
          "0%": { transform: "translateX(0%) scaleX(1)" },
          "100%": { transform: "translateX(100%) scaleX(0)" },
        },
        menuExpand: {
          "0%": { transform: "translateX(100%) scaleX(0)" },
          "100%": { transform: "translateX(0%) scaleX(1)" },
        },
        textCollapse: {
          "0%": { opacity: "1", left: "50px" },
          "100%": { opacity: "0", left: "0px" },
        },
        textExpand: {
          "0%": { opacity: "0", left: "0px" },
          "100%": { opacity: "1", left: "50px" },
        },
      },
      animation: {
        "menu-expand": "menuExpand 1s forwards",
        "menu-collapse": "menuCollapse 1s forwards",
        "text-expand": "textExpand 0.5s forwards",
        "text-collapse": "textCollapse 0.5s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
