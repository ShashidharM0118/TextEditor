// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A0F5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

