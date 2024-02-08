/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-first': 'hsl(var(--color-background-main-first))',
      'screen-first': 'hsl(var(--color-background-screen-first))',
      'keypad-first': 'hsl(var(--color-background-keypad-first))',

      'delete-key-first': 'hsl(var(--color-background-delete-key-first))',
      'delete-key-hover-first': '#a2b2e3',
      'delete-key-shadow-first': 'hsl(var(--color-shadow-delete-key-first))',

      'toggle-first': 'hsl(var(--color-toggle-first))',
      'toggle-hover-first': '#f96c5b',
      'result-key-shadow-first': 'hsl(var(--color-shadow-result-key-first))',

      'key-first': 'hsl(var(--color-background-key-first))',
      'key-hover-first': '#ffffff',
      'key-shadow-first': 'hsl(var(--color-shadow-key-first))',

      'key-num-first': 'hsl(var(--color-key-first))',
      'current-num-first': 'hsl(var(--color-num-first))',
    },
    boxShadow: {
      'key-shadow-first': '0px 4px key-shadow-first',
      'delete-key-shadow-first': '0px 4px delete-key-shadow-first',
      'result-key-shadow-first': '0px 4px result-key-shadow-first',
      'none': '0 0 #000000'
    },
    extend: {},
  },
  plugins: [],
}

