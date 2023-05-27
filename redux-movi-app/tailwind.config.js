/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: {
          1: '#1a242f',
          2: '#0f171e',
          Font_primary: '#79b8f3',
        }
      }
    },
  },
  plugins: ['flowbite/plugin'],
}

