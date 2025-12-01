/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#4FC3F7',
        accent: '#FFE082',
        surface: '#FFFFFF',
        background: '#F9FAFB',
        dark: '#1A1A1A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}