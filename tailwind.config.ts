import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "outer-space": "#292A2A",
        "dove-gray": "#6D6D6D",
        white: "#FFFFFF",
        "cod-gray": "#161616B2",
        "dodger-blue": "#1D78FF",
      },
      backgroundImage: {
        "auth-pattern": "url('/assets/images/background-poster.png')",
        "auth-gradient":
          "linear-gradient(90deg, rgba(23, 32, 63, 0.8) 0%, rgba(18, 23, 47, 0.5) 59.5%, rgba(17, 25, 56, 0.9) 100%), linear-gradient(0.04deg, rgba(0, 0, 0, 0) 0.04%, rgba(0, 0, 0, 0.5) 26.74%, #262626 92.11%)",
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      borderWidth: {
        normal: "1px",
      },
      padding: {
        normal: "60px 40px",
      },

      borderRadius: {
        normal: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
