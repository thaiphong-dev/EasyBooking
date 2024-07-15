import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-main": "#32B768",
        "background-footer": "#32B768",
        "background-green": "rgba(32,100,60,1)",
        "background-disable": "#F4F4F4",
        "text-disable": "#9CA3AF",
        "background-red": "#EB4646",
      },
    },
  },
  plugins: [],
};
export default config;
