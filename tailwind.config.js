/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './index.html',
    './index_copy.html',
    './idea-outline.html',
    './guidance-tool.html',
    './call-for-projects.html',
  ],
  theme: {
    extend: {
      colors: {
        'orange-500': '#F97316',
        'orange-600': '#EA580C',
        'dark-blue-900': '#2E4A7A',
      },
      scrollBehavior: 'smooth',
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
