/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './index.html',
    './index_copy.html',
    './idea-outline.html',
    './eligibility-checklist.html',
    './call-for-projects.html',
  ],
  theme: {
    extend: {
      colors: {},
      scrollBehavior: 'smooth',
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
