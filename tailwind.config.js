import Typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'black-8': '8px 8px 0 0 black',
      }
    },
  },
  plugins: [
    Typography
  ],
}

