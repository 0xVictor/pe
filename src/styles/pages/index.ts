import { styled } from "..";

export const Container = styled('div', {
  display: 'grid',
  width: '100%',
  gap: 40,
  position: 'relative'
})

export const Content = styled('div', {
  display: 'grid',
  width: '100%',
  gap: 40
})

export const Hero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  maxWidth: '600px',
  padding: '0 1rem',

  h1: {
    color: '$black900',
    fontWeight: '500',
    lineHeight: '1.2',

    span: {
      color: '$black500 !important',
      fontWeight: '500',
      fontSize: '2.5rem',
    }
  },

  '@bp1': {
    fontSize: '0.75rem',

    h1: {
      lineHeight: '1.4',

      span: {
        fontSize: '1.25rem'
      }
    }

  },

})