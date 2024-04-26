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
        "light-grey": "#FFFFFF99",
        "dark-grey": "#292A2A",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "24px": "24px",
        "20px": "20px",
      },
      fontWeight: {
        "600": "600",
      },
      lineHeight: {
        "26.4px": "26.4px",
      },
    },
  },
  plugins: [],
};
export default config;
