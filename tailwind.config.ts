import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import daisyui from "daisyui";

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
    },
    colors: {
      "header-dark": "#00132D",
      "bg-dark": "#1C1C1E",
      "accent-primary-dark": "#ED1C24",
      "accent-secondary-dark": "#0A84FF",
      "header-light": "",
      "bg-light": "#FFF9FB",
      "text-primary-light": "#2E2E2E",
      "text-secondary-light": "#BFBFBF",
      "accent-primary-light": "#ED1C24",
      "accent-secondary-light": "#0A84FF",
      "shadow-light": "#EAEAEA",
    },
  },
  plugins: [daisyui],
};
export default config;
