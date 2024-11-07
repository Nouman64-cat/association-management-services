import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkish: '#FF49A1',   // Vibrant pink from the left icon
        bluish: '#2DA8F8',    // Bright blue from the center icon
        orangish: '#FFA629',  // Warm yellow-orange from the right icon
        heading: '#363636',   // Dark gray color for headings
        subheading: '#737373',
        rebrand: '#6961F9',
      },
      fontFamily: {
        axiforma: ['Axiforma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
