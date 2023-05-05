import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Inter !important',
  },

  body: {
    backgroundColor: '$background',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 500,
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    border: 'none',
    cursor: 'pointer',
  },

  code: {
    background: '$gray100',
  },

  ul: {
    margin: 0,
  },
});
