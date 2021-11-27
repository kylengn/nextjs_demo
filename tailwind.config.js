module.exports = {
  mode: 'jit',
  purge: [],
  purge: {
    enabled: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Saira'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
