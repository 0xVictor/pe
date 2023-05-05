import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      background: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',
      lightgray: '#e1e1e6a6',

      black900: 'rgb(17, 17, 17)',
      black500: 'rgb(108, 108, 137)',

      green500: '#00875f',
      green300: '#00b37e',

      textColor: '#1F2225',

      boxShadow: '#e1e1e67a',
      sideMenu: '#F9F9F9',
      border: 'rgba(31, 34, 37, 0.06)',

      grayMenu: 'rgba(31, 34, 37, 0.06)',
      hover: '#E2E8E9',
    },
  },
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)',
  },
});
