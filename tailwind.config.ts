import type { Config  } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/icon/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-vazirmatn)', ...fontFamily.sans],
        vazirFa: ['var(--font-vazirmatn-fa)', ...fontFamily.sans],
        dana: ['var(--font-dana)', ...fontFamily.sans],
        dana_fanum: ['var(--font-dana-fanum)', ...fontFamily.sans],
        iransans: ['var(--font-iransans)', ...fontFamily.sans],
        satoshi: ['var(--font-satoshi)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
