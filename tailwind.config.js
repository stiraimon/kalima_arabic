/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.css',
  ],
  theme: {
    fontSize: {
      'heading-size': '34px',
      'header-size': '24px',
    },
    extend: {
      colors: {
        'heading-bg': '#6c8744ff',
        'header-bg': '#D8DEBA',
        'heading-color': '#F3EEE8',
        'text-decoration-color': '#F3EEE8',
        "button-bg": '#6C8744',
        "color-bg-hr": '#3F4520',
        primary: {
          DEFAULT: '#3F4520',
        },
      },
    },
  },
  plugins: [],
}

