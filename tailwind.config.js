/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  variants: {
    dark: ['media: (prefers-color-scheme: dark)'],
  },
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['"Space Mono"', 'monospace', 'sans-serif'],
        poppoins: ['Poppins'],
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
        textPrimary: '#1E2A47',
        textSecondary: '#00A6FB',
        primaryColor: 'rgb(243, 244, 246)',
        secondaryColor: 'rgba(20, 29, 47, 1)',
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
    },
    screens: {
      sm: '640px',
      md: '925px', // Custom md breakpoint set to 925px
      lg: '1100px', // Custom lg breakpoint set to 1100px
      xl: '1280px',
    },
  },
  plugins: [],
};
