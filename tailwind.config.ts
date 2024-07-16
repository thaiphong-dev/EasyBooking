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
        "background-MO": "#F6F6F6",
        "background-footer": "#32B768",
        "background-green": "rgba(32,100,60,1)",
        "background-disable": "#F4F4F4",
        "text-color-disable": "#9CA3AF",
        "text-color-gray": "#6B7280",
        "background-red": "#EB4646",
      },
      boxShadow: {
        "item-shadow": "0px 2px 8px 0px gba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
