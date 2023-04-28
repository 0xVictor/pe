import { styled } from "..";

export const Container = styled('div', {
  display: 'grid',
  gap: '4rem',

  minHeight: '100vh',
  padding: '1rem 1rem 2rem 1rem',

})

export const Content = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '20px',
  minHeight: '100vh',
  maxWidth: 700,
  margin: '0 auto',
  padding: '0 1rem 2rem 1rem',
  width: '100%'
})

export const Header = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  gap: 8,
  width: '100%',
})

export const BackButton = styled('button', {

  display: 'grid',
  placeContent: 'center',
  alignItems: 'center',
  borderRadius: '40px',
  height: '32px',
  width: '32px',
  overflow: 'hidden',
  background: 'transparent',
  transition: '0.2s all ease-in-out',

  '&:hover': {
    background: '$lightgray',

    '& svg': {
      color: '$gray800',

    }
  },

  '& svg': {
    color: '$gray900',
    fontSize: 20,
    fontWeight: 'bold',

    transition: '0.2s all ease-in-out',

  }
})

export const Pic = styled('div', {
  borderRadius: '40px',
  height: '32px',
  width: '32px',
  overflow: 'hidden',


  img: {
    width: '100%',
    height: '100%'
  }
})

export const NoteTitle = styled('div', {

  fontSize: 15,
  color: '$gray300',
  fontWeight: '500',
  cursor: 'pointer'

})