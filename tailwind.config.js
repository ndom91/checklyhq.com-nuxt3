module.exports = {
  content: ['./public/index.html', './src/**/*.vue', './src/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#161616',
      'black-shady': '#1F1F1F',
      'blue-dark': '#0f97c1',
      blue: '#45C8F1',
      'blue-light': '#EBFAFF',
      'blue-lightest': '#F0F8FF',
      red: '#ff4949',
      yellow: '#ffc82c',
      'yellow-dark': '#EBAE00',
      green: '#13CE66',
      pink: '#FF659D',
      'gray-darkest': '#1f2d3d',
      'gray-dark': '#3c4858',
      'gray-darkish': '#697280',
      gray: '#8492A6',
      'gray-light': '#E0E6ED',
      'gray-lighter': '#EFF2F7',
      'gray-lightest': '#F9FAFC',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    screens: {
      sm: '576px', // default 640px
      md: '768px',
      lg: '992px', // default 1024px
      xl: '1140px', // default 1280px
      // '2xl': '1536px', disabled until we fix some breaking screens
    },
  },
  plugins: [],
}
