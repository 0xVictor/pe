import { styled } from '..';

export const Container = styled('div', {
  display: 'grid',
  // gridTemplateRows: 'auto 1fr',
  position: 'relative',
  minHeight: '100vh',
  minWidth: '100vw',

  gridTemplateColumns: 'auto 1fr 300px',
  gridTemplateRows: '60px 1fr',
  gridTemplateAreas: `
    'nav nav nav'
    'sidemenu body body'
  `,
});

export const Wrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '20px',
  minHeight: '100vh',
  margin: '0 auto',
  padding: '1rem 2rem 2rem 1rem',
  width: '100vw',
});

export const Content = styled('div', {
  gridArea: 'body',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '20px',
  minHeight: '100vh',
  margin: '0 auto',
  padding: '8rem 1rem 2rem 1rem',
  width: '100%',
});

export const HeaderContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  gap: 8,
  width: '100vw',
  position: 'fixed',
  top: 0,
  padding: '1rem',
});

export const BackButton = styled('button', {
  display: 'grid',
  placeContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  height: '32px',
  width: '32px',
  overflow: 'hidden',
  background: 'transparent',
  transition: '0.2s all ease-in-out',

  '&:hover': {
    background: '$hover',

    '& svg': {
      color: '$gray800',
    },
  },

  '& svg': {
    color: '$gray900',
    fontSize: 20,
    fontWeight: 'bold',

    transition: '0.2s all ease-in-out',
  },
});

export const Pic = styled('div', {
  borderRadius: '40px',
  height: '32px',
  width: '32px',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
  },
});

export const NoteTitle = styled('div', {
  fontSize: 15,
  color: '$gray800',
  fontWeight: '500',
  cursor: 'pointer',
});
