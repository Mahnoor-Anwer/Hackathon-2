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
        'custom-gray': '#898989',
  'custom-black': '#3A3A3A',
  'custom-lightgray': '#B0B0B0',
  'custom-whitegrey': '#F4F5F7',
  'custom-yellow':'#B88E2F',
  'custom-biscuity':'#FCF8F3',
  'custom-ajeeb': '#616161',
  'custom-whitishgrey': '#D9D9D9',
  'custom-footergrey':'#9F9F9F',
     'custom-shopbiscuity':'#F9F1E7',      
       background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
