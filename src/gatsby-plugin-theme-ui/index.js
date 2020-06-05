import { merge } from 'theme-ui';
import tailwind from '@theme-ui/preset-tailwind';
import minimalTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index';

const baseColors = {
  gray: [
    '#F7F7F7',
    '#E1E1E1',
    '#CFCFCF',
    '#B1B1B1',
    '#9E9E9E',
    '#7E7E7E',
    '#626262',
    '#515151',
    '#3B3B3B',
    '#222222',
  ],
  teal_vivid: [
    '#F0FCF9',
    '#C6F7E9',
    '#8EEDD1',
    '#5FE3C0',
    '#2DCCA7',
    '#17B897',
    '#079A82',
    '#048271',
    '#016457',
    '#004440',
  ],
  yellow_vivid: [
    '#FFFBEA',
    '#FFF3C4',
    '#FCE588',
    '#FADB5F',
    '#F7C948',
    '#F0B429',
    '#DE911D',
    '#CB6E17',
    '#B44D12',
    '#8D2B0B',
  ],
  red_vivid: [
    '#FFE3E3',
    '#FFBDBD',
    '#FF9B9B',
    '#F86A6A',
    '#EF4E4E',
    '#E12D39',
    '#CF1124',
    '#AB091E',
    '#8A041A',
    '#610316',
  ],
};

const colors = {
  ...baseColors,
  modes: {
    dark: {
      background: baseColors.gray[9],
      text: baseColors.gray[2],
      primary: baseColors.teal_vivid[5],
      primaryHover: baseColors.teal_vivid[4],
      error: baseColors.red_vivid[5],
    },
  },
};

const buttonBase = {
  cursor: 'pointer',
  display: 'inline-block',
  width: 'full',
  py: 't6',
  textAlign: 'center',
  fontSize: 'lg',
  fontWeight: 'bold',
  fontFamily: 'mono',
  textTransform: 'uppercase',
  letterSpacing: 'wider',
  transition: 'all 100ms ease-in-out',
  borderRadius: 'inherit',
};

const buttons = {
  base: buttonBase,
  icon: {
    color: 'gray.1',
    width: [8, 10],
    height: [8, 10],
    p: 0,
    '&:hover': {
      color: 'primaryHover',
    },
  },
  primary: {
    ...buttonBase,
    backgroundColor: colors.teal_vivid[8],
    color: colors.teal_vivid[3],
    ':hover': {
      backgroundColor: colors.teal_vivid[4],
      color: colors.teal_vivid[9],
    },
  },
  gray: {
    ...buttonBase,
    backgroundColor: colors.gray[3],
    color: colors.gray[8],
    ':hover': {
      backgroundColor: colors.gray[8],
      color: colors.gray[3],
    },
  },
};

const shadows = {
  'outline-teal': `0 0 0 3px ${colors.teal_vivid[6]}`,
  'outline-teal-sm': `0 0 0 2px ${colors.teal_vivid[6]}`,
  'lg-teal':
    '0 10px 15px -3px hsla(172, 98%, 20%, 50%), 0 4px 6px -2px hsla(172, 98%, 20%, 25%)',
};

const fontSizes = [...tailwind.fontSizes];

fontSizes.xs = '0.75rem';
fontSizes.sm = fontSizes[0];
fontSizes.base = fontSizes[1];
fontSizes.lg = '1.125rem';
fontSizes.xl = fontSizes[2];
fontSizes['2xl'] = fontSizes[3];
fontSizes['3xl'] = fontSizes[4];
fontSizes['4xl'] = fontSizes[5];
fontSizes['5xl'] = fontSizes[6];
fontSizes['6xl'] = fontSizes[7];
fontSizes['7xl'] = fontSizes[8];

const space = [...tailwind.space];

// export const space = [
//   0,           0
//   '0.25rem',   1
//   '0.5rem',    2
//   '1rem',      3
//   '2rem',      4
//   '4rem',      5
//   '8rem',      6
//   '16rem',     7
//   '32rem',     8
// ]

// t prefix for tailwind spacing
space['t3'] = '0.75rem';
space['t4'] = '1rem';
space['t5'] = '1.25rem';
space['t6'] = '1.5rem';
space['t8'] = '2rem';
space['10'] = '2.5rem';
space['12'] = '3rem';
space['16'] = '4rem';
space['20'] = '5rem';
space['24'] = '6rem';
space['32'] = '8rem';
space['40'] = '10rem';
space['48'] = '12rem';
space['56'] = '14rem';
space['64'] = '16rem';
space.px = '1px';

const theme = merge(tailwind, {
  colors,
  fonts: {
    mono:
      '"Overpass Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    body:
      '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace:
      '"Overpass Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes,
  sizes: {
    '7xl': '80rem',
    container: '20rem',
  },
  shadows,
  space,

  // VARIANTS
  badges: {
    tech_tag: {
      minWidth: 'initial',
      display: 'inline-block',
      fontFamily: 'body',
      fontWeight: 'semibold',
      fontSize: 'sm',
      borderRadius: 'lg',
      px: 't3',
      py: 1,
      mr: 2,
      mb: 2,
      whiteSpace: 'nowrap',
    },
  },
  buttons,
  cards: {
    primary: {
      minWidth: 'xs',
      maxWidth: ['xs', 'sm', 'xs', 'sm'],
      borderRadius: 'default',
      overflow: 'hidden',
      boxShadow: 'lg',
      mb: 't8',
      mx: 'auto',
      ':hover': {
        boxShadow: '2xl',
      },
      '@media (max-width: 360px)': {
        minWidth: '18rem',
        maxWidth: '18rem',
      },
    },
  },
  forms: {
    label: {
      display: 'block',
      letterSpacing: 'wide',
      mb: 2,
      fontSize: ['base', 'lg'],
    },
    input: {
      borderColor: 'primary',
      '&:hover': {
        borderColor: 'primaryHover',
      },
      '&:focus': {
        outline: 'none',
        borderColor: '#079A82',
        boxShadow: 'outline-teal-sm',
      },
    },
    contact: {
      label: {
        display: 'block',
        letterSpacing: 'wide',
        mb: 2,
        fontSize: ['base', 'lg'],
      },
      input: {
        borderWidth: 0,
        bg: 'transparent',
        borderBottomWidth: 2,
        mr: 't3',
        py: 1,
        fontSize: ['xl', '2xl'],
        fontFamily: 'body',
        ':focus': {
          outline: 'none',
        },
      },
    },
  },
  layout: {
    home: {
      paddingRight: 't6',
      paddingLeft: 't6',
      maxWidth: ['lg', 'lg', '2xl', '4xl'],
    },
    box: {
      maxWidth: 'lg',
    },
  },
  text: {
    heading: {
      fontSize: ['4xl', '4xl', '5xl'],
      color: 'gray.1',
      fontWeight: 'semibold',
    },
    title: {
      fontFamily: 'body',
      fontWeight: 'semibold',
      color: 'gray.0',
      fontSize: '2xl',
      letterSpacing: 'wide',
    },
    category: {
      fontFamily: 'body',
      fontSize: 'xl',
      color: 'gray.1',
    },
    description: {
      fontFamily: 'body',
      color: 'gray.3',
      fontSize: 'base',
      textAlign: 'justify',
      hyphens: 'auto',
    },
    body: {
      fontSize: ['xl', '2xl'],
      fontFamily: 'body',
    },
  },
  variants: {
    flex_form_element: {
      flexWrap: 'wrap',
      mx: '-t3',
      mb: 12,
    },
    form_box: {
      px: 't3',
      width: 'full',
    },
  },
});

export default merge(minimalTheme, theme);
