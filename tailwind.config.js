/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-dark-blue': 'hsl(var(--color-background-main-dark-blue))',
      'screen-dark-blue': 'hsl(var(--color-background-screen-dark-blue))',
      'keypad-dark-blue': 'hsl(var(--color-background-keypad-dark-blue))',

      'delete-key-dark-blue': 'hsl(var(--color-background-delete-key-dark-blue))',
      'delete-key-hover-dark-blue': '#a2b2e3',
      'delete-key-shadow-dark-blue': 'hsl(var(--color-shadow-delete-key-dark-blue))',

      'toggle-dark-blue': 'hsl(var(--color-toggle-dark-blue))',
      'toggle-hover-dark-blue': '#f96c5b',
      'result-key-shadow-dark-blue': 'hsl(var(--color-shadow-result-key-dark-blue))',

      'key-dark-blue': 'hsl(var(--color-background-key-dark-blue))',
      'key-hover-dark-blue': '#ffffff',
      'key-shadow-dark-blue': 'hsl(var(--color-shadow-key-dark-blue))',

      'key-num-dark-blue': 'hsl(var(--color-key-dark-blue))',
      'current-num-dark-blue': 'hsl(var(--color-num-dark-blue))',
      'delete-text-dark-blue': 'hsl(var(--color-delete-text-dark-blue))',
      'result-text-dark-blue': 'hsl(var(--color-result-text-dark-blue))',



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
      'key-shadow-dark-blue': '0px 4px key-shadow-dark-blue',
      'delete-key-shadow-dark-blue': '0px 4px delete-key-shadow-dark-blue',
      'result-key-shadow-dark-blue': '0px 4px result-key-shadow-dark-blue',

      'key-shadow-light-gray': '0px 4px key-shadow-light-gray',
      'delete-key-shadow-light-gray': '0px 4px delete-key-shadow-light-gray',
      'result-key-shadow-light-gray': '0px 4px result-key-shadow-light-gray',

      'key-shadow-dark-violet': '0px 4px key-shadow-dark-violet',
      'delete-key-shadow-dark-violet': '0px 4px delete-key-shadow-dark-violet',
      'result-key-shadow-dark-violet': '0px 4px result-key-shadow-dark-violet',
      'none': '0 0 #000000'
    },
    extend: {},
  },
  safelist: [
    'bg-main-dark-blue',
    'bg-screen-dark-blue',
    'bg-keypad-dark-blue',

    'bg-delete-key-dark-blue',
    'hover:bg-delete-key-hover-dark-blue',
    'bg-delete-key-shadow-dark-blue',

    'bg-toggle-dark-blue',
    'hover:bg-toggle-hover-dark-blue',
    'bg-result-key-shadow-dark-blue',

    'bg-key-dark-blue',
    'hover:bg-key-hover-dark-blue',
    'bg-key-shadow-dark-blue',

    'text-key-num-dark-blue',
    'text-current-num-dark-blue',
    'text-delete-text-dark-blue',
    'text-result-text-dark-blue',

    'shadow-key-shadow-dark-blue',
    'shadow-delete-key-shadow-dark-blue',
    'shadow-result-key-shadow-dark-blue',


    
    'bg-main-light-gray',
    'bg-screen-light-gray',
    'bg-keypad-light-gray',

    'bg-delete-key-light-gray',
    'hover:bg-delete-key-hover-light-gray',
    'bg-delete-key-shadow-light-gray',

    'bg-toggle-light-gray',
    'hover:bg-toggle-hover-light-gray',
    'bg-result-key-shadow-light-gray',

    'bg-key-light-gray',
    'hover:bg-key-hover-light-gray',
    'bg-key-shadow-light-gray',

    'text-key-num-light-gray',
    'text-current-num-light-gray',
    'text-delete-text-light-gray',
    'text-result-text-light-gray',

    'shadow-key-shadow-light-gray',
    'shadow-delete-key-shadow-light-gray',
    'shadow-result-key-shadow-light-gray',



    'bg-main-dark-violet',
    'bg-screen-dark-violet',
    'bg-keypad-dark-violet',

    'bg-delete-key-dark-violet',
    'hover:bg-delete-key-hover-dark-violet',
    'bg-delete-key-shadow-dark-violet',

    'bg-toggle-dark-violet',
    'hover:bg-toggle-hover-dark-violet',
    'bg-result-key-shadow-dark-violet',

    'bg-key-dark-violet',
    'hover:bg-key-hover-dark-violet',
    'bg-key-shadow-dark-violet',

    'text-key-num-dark-violet',
    'text-current-num-dark-violet',
    'text-delete-text-dark-violet',
    'text-result-text-dark-violet',
    
    'shadow-key-shadow-dark-violet',
    'shadow-delete-key-shadow-dark-violet',
    'shadow-result-key-shadow-dark-violet',
  ],
  plugins: [],
}

