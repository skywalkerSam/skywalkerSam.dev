/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Pally', 'Comic Sans MS', 'sans'],
        body: ['Pally', 'Comic Sans MS', 'sans'],
      },
    },
  },
  plugins: [],
}
