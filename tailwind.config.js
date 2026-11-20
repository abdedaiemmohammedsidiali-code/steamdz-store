/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#090D16',
          900: '#111827',
        },
        steam: {
          cyan: '#00D2FF',
          blue: '#2563EB',
        },
      },
    },
  },
  plugins: [],
};
