/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Change this to 'class' to manually control dark mode
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['"Space Mono"', 'monospace', 'sans-serif'],
        poppoins: ['Poppins'],
        merriweatherSansLight: ['"MerriweatherSans-Light"', 'sans-serif'],
      },
      animation: {
        ['loop-scroll']: 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: {
            transform: 'translateX(-100%)',
          },
        },
      },
      colors: ({ colors }) => ({
        borderColor: 'rgba(194, 183, 183, 0.1)',
        borderSecondary: 'rgba(20, 29, 47, 0.1)',
        textPrimary: 'rgb(13, 25, 53)',
        textSecondary: '#00A6FB',
        primaryColor: 'rgb(243, 244, 246)',
        secondaryColor: '#091224',
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      }),
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
