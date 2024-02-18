/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

