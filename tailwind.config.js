/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dbag-red': {
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
          light: '#fee2e2',
        },
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
