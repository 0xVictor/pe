import { styled } from "@stitches/react";

export const Container = styled('div', {
})

export const Content = styled('div', {
  display: 'grid',
  gap: 20,

  position: 'relative'

})

export const Title = styled('input', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'auto 1fr',
  padding: '1rem 50px',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '14px',
  border: 'none',
  outline: 'none',
  fontSize: '44px',
  fontWeight: 'bold',
  color: '$textColor',

  '&::placeholder': {
    color: '$gray300',
  }
})

export const Social = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'auto 1fr',
  padding: '1rem',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '14px',

  '&:hover': {
    background: '#f1f1f1',
  }
})

export const Icon = styled('div', {
  borderRadius: '40px',
  height: '64px',
  width: '64px',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%'
  }
})

export const Data = styled('div', {
  display: 'grid',
  gap: 8,
  gridTemplateRows: 'auto auto',

  h6: {
    fontSize: 24,
    color: '$black900'
  },

  span: {
    fontSize: 20,
    color: '$black500'
  }
})