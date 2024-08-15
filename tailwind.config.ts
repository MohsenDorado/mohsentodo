import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend:{
      screens:{
        "lrg":"1150px",
      },
      colors:{
        "LightPrimary":"#59a2f2",
        "Primary":"#3178c6",
        "DarkPrimary":"#235a97"
      },

    }
  },
  plugins: [],
};
export default config;
