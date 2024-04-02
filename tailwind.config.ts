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
        primaryColor: "#02253b",
        greenLimon: "#67FEA3",
        grayText: "#464646",
        blackLogo: "#0b151b",
        fleekyFull: "#41DE80",
        fleekyStore: "#8C7BFF",
        linkTextBlue: "#2196F3",
      },
    },
  },
  plugins: [],
};
export default config;
