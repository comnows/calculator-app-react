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
      'delete-text-first': 'hsl(var(--color-delete-text-first))',
      'result-text-first': 'hsl(var(--color-result-text-first))',



      'main-light-gray': 'hsl(var(--color-background-main-light-gray))',
      'screen-light-gray': 'hsl(var(--color-background-screen-light-gray))',
      'keypad-light-gray': 'hsl(var(--color-background-keypad-light-gray))',

      'delete-key-light-gray': 'hsl(var(--color-background-delete-key-light-gray))',
      'delete-key-hover-light-gray': '#62b5bd',
      'delete-key-shadow-light-gray': 'hsl(var(--color-shadow-delete-key-light-gray))',

      'toggle-light-gray': 'hsl(var(--color-toggle-light-gray))',
      'toggle-hover-light-gray': '#ff8b38',
      'result-key-shadow-light-gray': 'hsl(var(--color-shadow-result-key-light-gray))',

      'key-light-gray': 'hsl(var(--color-background-key-light-gray))',
      'key-hover-light-gray': '#ffffff',
      'key-shadow-light-gray': 'hsl(var(--color-shadow-key-light-gray))',

      'key-num-light-gray': 'hsl(var(--color-key-light-gray))',
      'current-num-light-gray': 'hsl(var(--color-num-light-gray))',
      'delete-text-light-gray': 'hsl(var(--color-delete-text-light-gray))',
      'result-text-light-gray': 'hsl(var(--color-result-text-light-gray))',



      'main-dark-violet': 'hsl(var(--color-background-main-dark-violet))',
      'screen-dark-violet': 'hsl(var(--color-background-screen-dark-violet))',
      'keypad-dark-violet': 'hsl(var(--color-background-keypad-dark-violet))',

      'delete-key-dark-violet': 'hsl(var(--color-background-delete-key-dark-violet))',
      'delete-key-hover-dark-violet': '#8731ae',
      'delete-key-shadow-dark-violet': 'hsl(var(--color-shadow-delete-key-dark-violet))',

      'toggle-dark-violet': 'hsl(var(--color-toggle-dark-violet))',
      'toggle-hover-dark-violet': '#94fff9',
      'result-key-shadow-dark-violet': 'hsl(var(--color-shadow-result-key-dark-violet))',

      'key-dark-violet': 'hsl(var(--color-background-key-dark-violet))',
      'key-hover-dark-violet': '#6b34ac',
      'key-shadow-dark-violet': 'hsl(var(--color-shadow-key-dark-violet))',

      'key-num-dark-violet': 'hsl(var(--color-key-dark-violet))',
      'current-num-dark-violet': 'hsl(var(--color-num-dark-violet))',
      'delete-text-dark-violet': 'hsl(var(--color-delete-text-dark-violet))',
      'result-text-dark-violet': 'hsl(var(--color-result-text-dark-violet))',
    },
    boxShadow: {
      'key-shadow-first': '0px 4px key-shadow-first',
      'delete-key-shadow-first': '0px 4px delete-key-shadow-first',
      'result-key-shadow-first': '0px 4px result-key-shadow-first',
      'none': '0 0 #000000'
    },
    extend: {},
  },
  safelist: [
    'bg-main-light-gray',
    'bg-screen-light-gray',
    'bg-keypad-light-gray',

    'bg-delete-key-light-gray',
    'bg-delete-key-hover-light-gray',
    'bg-delete-key-shadow-light-gray',

    'bg-toggle-light-gray',
    'hover:bg-toggle-hover-light-gray',
    'bg-result-key-shadow-light-gray',

    'bg-key-light-gray',
    'bg-key-hover-light-gray',
    'bg-key-shadow-light-gray',

    'text-key-num-light-gray',
    'text-current-num-light-gray',
    'text-delete-text-light-gray',
    'text-result-text-light-gray',



    'bg-main-dark-violet',
    'bg-screen-dark-violet',
    'bg-keypad-dark-violet',

    'bg-delete-key-dark-violet',
    'bg-delete-key-hover-dark-violet',
    'bg-delete-key-shadow-dark-violet',

    'bg-toggle-dark-violet',
    'hover:bg-toggle-hover-dark-violet',
    'bg-result-key-shadow-dark-violet',

    'bg-key-dark-violet',
    'bg-key-hover-dark-violet',
    'bg-key-shadow-dark-violet',

    'text-key-num-dark-violet',
    'text-current-num-dark-violet',
    'text-delete-text-dark-violet',
    'text-result-text-dark-violet',
  ],
  plugins: [],
}

