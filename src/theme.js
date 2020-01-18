const theme = {
  borderWidths: {
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
    px: '1px',
  },
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
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
    red: [
      null,
      '#fff5f5',
      '#fed7d7',
      '#feb2b2',
      '#fc8181',
      '#f56565',
      '#e53e3e',
      '#c53030',
      '#9b2c2c',
      '#742a2a',
    ],
    orange: [
      null,
      '#fffaf0',
      '#feebc8',
      '#fbd38d',
      '#f6ad55',
      '#ed8936',
      '#dd6b20',
      '#c05621',
      '#9c4221',
      '#7b341e',
    ],
    yellow: [
      null,
      '#fffff0',
      '#fefcbf',
      '#faf089',
      '#f6e05e',
      '#ecc94b',
      '#d69e2e',
      '#b7791f',
      '#975a16',
      '#744210',
    ],
    green: [
      null,
      '#f0fff4',
      '#c6f6d5',
      '#9ae6b4',
      '#68d391',
      '#48bb78',
      '#38a169',
      '#2f855a',
      '#276749',
      '#22543d',
    ],
    teal: [
      null,
      '#e6fffa',
      '#b2f5ea',
      '#81e6d9',
      '#4fd1c5',
      '#38b2ac',
      '#319795',
      '#2c7a7b',
      '#285e61',
      '#234e52',
    ],
    blue: [
      null,
      '#ebf8ff',
      '#bee3f8',
      '#90cdf4',
      '#63b3ed',
      '#4299e1',
      '#3182ce',
      '#2b6cb0',
      '#2c5282',
      '#2a4365',
    ],
    indigo: [
      null,
      '#ebf4ff',
      '#c3dafe',
      '#a3bffa',
      '#7f9cf5',
      '#667eea',
      '#5a67d8',
      '#4c51bf',
      '#434190',
      '#3c366b',
    ],
    purple: [
      null,
      '#faf5ff',
      '#e9d8fd',
      '#d6bcfa',
      '#b794f4',
      '#9f7aea',
      '#805ad5',
      '#6b46c1',
      '#553c9a',
      '#44337a',
    ],
    pink: [
      null,
      '#fff5f7',
      '#fed7e2',
      '#fbb6ce',
      '#f687b3',
      '#ed64a6',
      '#d53f8c',
      '#b83280',
      '#97266d',
      '#702459',
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
    grayDark: '#2d3748',
    text: '#2d3748',
    primary: '#2b6cb0',
    primaryHover: '#2c5282',
    secondary: '#718096',
    muted: '#e2e8f0',
    success: '#9ae6b4',
    info: '#63b3ed',
    warning: '#faf089',
    danger: '#feb2b2',
    light: '#f7fafc',
    dark: '#2d3748',
    textMuted: '#718096',
  },
  cards: {
    primary: {
      minWidth: 'xs',
      maxWidth: ['xs', 'sm', 'xs', 'sm'],
      borderRadius: 'rounded',
      overflow: 'hidden',
      boxShadow: 'lg',
      mb: 8,
      mx: 'auto',
      ':hover': {
        boxShadow: '2xl',
      },
    },
  },
  fonts: {
    sans:
      '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono:
      '"Overpass Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    body: '"IBM Plex Sans", sans-serif',
    heading: 'inherit',
    monospace:
      '"Overpass Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    body: '400',
    heading: '700',
  },
  layout: {
    container: {
      paddingRight: 6,
      paddingLeft: 6,
      maxWidth: ['lg', 'lg', '2xl', '4xl'],
    },
    box: {
      maxWidth: 'lg',
    },
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    body: '1.625',
    heading: '1.25',
  },
  sizes: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    px: '1px',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screenHeight: '100vh',
    screenWidth: '100vw',
    container: '20rem',
  },
  shadows: {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    'outline-teal': '0 0 0 3px #079A82', // teal-vivid-600
    'lg-teal':
      '0 10px 15px -3px hsla(172, 98%, 20%, 50%), 0 4px 6px -2px hsla(172, 98%, 20%, 25%)',
    none: 'none',
  },
  space: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    px: '1px',
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
  radii: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    rounded: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  zIndices: {
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50',
    auto: 'auto',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      cursor: 'pointer',
      ':hover': {
        color: 'primaryHover',
        textDecoration: 'underline',
      },
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 2,
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 2,
    },
    h3: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3,
    },
    h4: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 3,
    },
    h5: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 2,
      fontSize: 1,
    },
    code: {},
    pre: {},
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      m: 3,
    },
  },
  badges: {
    tech_tag: {
      minWidth: 'initial',
      display: 'inline-block',
      fontFamily: 'body',
      fontWeight: 'semibold',
      fontSize: 'sm',
      borderRadius: 'lg',
      px: 3,
      py: 1,
      mr: 2,
      mb: 2,
      whiteSpace: 'nowrap',
    },
  },
  buttons: {
    base: {
      cursor: 'pointer',
      display: 'inline-block',
      width: 'full',
      py: 6,
      textAlign: 'center',
      fontSize: 'lg',
      fontWeight: 'bold',
      fontFamily: 'mono',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      transition: 'all 100ms ease-in-out',
      borderRadius: 'inherit',
    },
    simple: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primaryHover',
      },
    },
    pill: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'full',
      '&:hover': {
        backgroundColor: 'primaryHover',
      },
    },
    outline: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary',
      color: 'primary',
      fontWeight: 'semibold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'white',
        borderColor: 'transparent',
      },
    },
    bordered: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primaryHover',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primaryHover',
      },
    },
    disabled: {
      py: 2,
      px: 3,
      cursor: 'not-allowed',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      opacity: 0.5,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
    },
    '3D': {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      borderBottomWidth: '4px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primaryHover',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-1px)',
      },
    },
    elevated: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'white',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray.4',
      color: 'text',
      fontWeight: 'bold',
      borderRadius: 'default',
      boxShadow: 'default',
      '&:hover': {
        backgroundColor: 'gray.1',
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
      borderWidth: 0,
      bg: 'transparent',
      borderBottomWidth: 2,
      mr: 3,
      py: 1,
      fontSize: ['xl', '2xl'],
      fontFamily: 'body',
      ':focus': {
        outline: 'none',
      },
    },
  },
  inputs: {
    shadow: {
      py: 2,
      px: 3,
      fontSize: '100%',
      borderRadius: 'default',
      appearance: 'none',
      lineHeight: 'tight',
      border: 'none',
      color: 'gray.7',
      boxShadow: 'default',
      '&:focus': {
        outline: 'none',
        boxShadow: 'outline',
      },
    },
    inline: {
      py: 2,
      px: 3,
      fontSize: '100%',
      borderRadius: 'default',
      appearance: 'none',
      lineHeight: 'tight',
      backgroundColor: 'gray.2',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'gray.2',
      color: 'gray.7',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        backgroundColor: 'white',
      },
    },
    underline: {
      py: 2,
      px: 3,
      fontSize: '100%',
      borderRadius: '0px',
      appearance: 'none',
      lineHeight: 'tight',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primary',
      color: 'gray.7',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        backgroundColor: 'white',
      },
    },
  },
  variants: {
    flex_form_element: {
      flexWrap: 'wrap',
      mx: -3,
      mb: 12,
    },
    form_box: {
      px: 3,
      width: 'full',
    },
  },
};

theme.colors.background = theme.colors.gray[9];
theme.colors.primary = theme.colors.teal_vivid[5];
theme.colors.primaryHover = theme.colors.teal_vivid[4];
theme.colors.error = theme.colors.red_vivid[5];

theme.buttons.primary = {
  ...theme.buttons.base,
  backgroundColor: theme.colors.teal_vivid[8],
  color: theme.colors.teal_vivid[3],
  ':hover': {
    backgroundColor: theme.colors.teal_vivid[4],
    color: theme.colors.teal_vivid[9],
  },
};

theme.buttons.gray = {
  ...theme.buttons.base,
  backgroundColor: theme.colors.gray[3],
  color: theme.colors.gray[8],
  ':hover': {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[3],
  },
};

theme.forms.textarea = theme.forms.input;

export default theme;