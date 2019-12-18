module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      fontFamily: {
        mono:
          '"Overpass Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        body: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        'teal-vivid': {
          '050': '#F0FCF9',
          '100': '#C6F7E9',
          '200': '#8EEDD1',
          '300': '#5FE3C0',
          '400': '#2DCCA7',
          '500': '#17B897',
          '600': '#079A82',
          '700': '#048271',
          '800': '#016457',
          '900': '#004440',
        },

        gray: {
          '050': '#F7F7F7',
          '100': '#E1E1E1',
          '200': '#CFCFCF',
          '300': '#B1B1B1',
          '400': '#9E9E9E',
          '500': '#7E7E7E',
          '600': '#626262',
          '700': '#515151',
          '800': '#3B3B3B',
          '900': '#222222',
        },

        'yellow-vivid': {
          '050': '#FFFBEA',
          '100': '#FFF3C4',
          '200': '#FCE588',
          '300': '#FADB5F',
          '400': '#F7C948',
          '500': '#F0B429',
          '600': '#DE911D',
          '700': '#CB6E17',
          '800': '#B44D12',
          '900': '#8D2B0B',
        },

        'red-vivid': {
          '050': '#FFE3E3',
          '100': '#FFBDBD',
          '200': '#FF9B9B',
          '300': '#F86A6A',
          '400': '#EF4E4E',
          '500': '#E12D39',
          '600': '#CF1124',
          '700': '#AB091E',
          '800': '#8A041A',
          '900': '#610316',
        },
      },
      boxShadow: {
        'outline-teal': '0 0 0 3px #079A82', // teal-vivid-600
        'lg-teal':
          '0 10px 15px -3px hsla(172, 98%, 20%, 50%), 0 4px 6px -2px hsla(172, 98%, 20%, 25%)',
      },
    },
    filter: {
      none: 'none',
      drop: 'drop-shadow(0 0 20px)',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-filters')(),
    require('tailwindcss-plugin-transitions'),
  ],
};
