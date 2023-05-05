import { styled } from '@stitches/react';

export const Container = styled('div', {
  position: 'absolute',
  background: '$white',
  borderRadius: '8px',
  width: '100%',
  zIndex: '500000000000000000',
});

export const Content = styled('div', {
  display: 'grid',
  gap: 12,
  width: '100%',
  padding: '0.75rem',
});

export const AIContent = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: '1fr auto',
  padding: '0.75rem',
  border: '1px solid $boxShadow',
  overflow: 'hidden',
  zIndex: '500000000000000000',
  width: '100%',
  boxShadow: '0px 6px 10px 3px rgba(184,184,184,0.2)',
  borderRadius: '6px',
});

export const PromptOutput = styled('div', {
  '& span': {
    fontSize: '16',
    color: '$textColor',
    fontWeight: 400,
    lineHeight: '1.6',
  },
});

export const AIInteract = styled('div', {
  display: 'grid',
  gap: 6,
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
});

export const Prompt = styled('textarea', {
  display: 'grid',
  gap: 20,
  // padding: "1rem 0",
  outline: 'none',
  resize: 'none',
  border: 0,
  fontSize: '1rem',
  color: '$gray800',
  fontWeight: 400,
  maxHeight: 400,

  '&::-webkit-scrollbar': {
    width: '10px',
    cursor: 'pointer',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },

  '&::placeholder': {
    color: '$gray300',
    fontSize: '1rem',
  },
});

export const Actions = styled('div', {
  display: 'grid',

  alignItems: 'center',

  '& button': {
    // color: "$white",
    width: 'fit-content',
    borderRadius: '4px',
    fontSize: '13px',
    border: '0',
    transition: '0.2s all ease-in-out',
    background: 'transparent',

    '&:hover': {
      // background: "$black500",
      color: '$black500',
    },
  },
});

export const AIOptions = styled('div', {
  display: 'grid',
  gap: 12,
  listStyle: 'none',
  maxHeight: 300,
  overflowX: 'auto',

  padding: '0.75rem',
  border: '1px solid $boxShadow',
  zIndex: '500000000000000000',
  width: '30%',
  boxShadow: '0px 6px 10px 3px rgba(184,184,184,0.2)',
  borderRadius: '6px',

  '&::-webkit-scrollbar': {
    width: '10px',
    cursor: 'pointer',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },

  label: {
    fontSize: 13,
    color: '$gray800',
  },

  '& li': {
    listStyle: 'none',
  },

  hr: {
    border: 0,
    height: 1,
    background: '$boxShadow',
  },
});

export const Option = styled('li', {
  display: 'grid',
  gap: 20,

  '& button': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 12,
    textAlign: 'start',
    background: 'transparent',
    alignItems: 'center',
    color: '$textColor',
    width: 'fit-content',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '400',
    border: '0',
    padding: '0.25rem 0.5rem',
    transition: '0.2s all ease-in-out',
    width: '100%',
    fontSize: '16',

    '&:hover': {
      background: '$lightgray',
      color: '$textColor',
    },
  },
});
