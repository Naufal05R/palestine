/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.cta-light__primary': {
          '@apply px-4 py-2 border border-slate-900 bg-slate-900 rounded-lg text-slate-100 hover:opacity-80 transition': {},
        },
        '.cta-dark__primary': {
          '@apply px-4 py-2 border border-slate-100 bg-slate-100 rounded-lg text-slate-900 hover:opacity-90 transition': {},
        },
        '.cta-light__secondary': {
          '@apply px-4 py-2 border border-slate-900 rounded-lg text-slate-900': {},
        },
        '.cta-dark__secondary': {
          '@apply px-4 py-2 border border-slate-100 rounded-lg text-slate-100': {},
        },
        '.custom__badge': {
          '@apply rounded-full border w-fit px-3 py-1 whitespace-nowrap': {},
        },
      });
    },
    'prettier-plugin-tailwindcss',
  ],
};
