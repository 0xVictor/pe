import { styled } from "@stitches/react";

export const Container = styled('div', {
  position: 'absolute',
  background: '$white',
  borderRadius: '8px',
  border: '1px solid $gray100',
  overflow: 'hidden',
  zIndex: '500000000000000000',
  width: '100%',
  boxShadow: '18px 1px 31px 3px rgba(0,0,0,0.05)'
})

export const Content = styled('div', {
  display: 'grid',
  gap: 20,
  padding: '1rem',


})

export const Prompt = styled('textarea', {
  display: 'grid',
  gap: 20,
  padding: '1rem',
  outline: 'none', resize: 'none',
  border: '1px solid $gray300',
  borderRadius: '6px',

  '&::placeholder': {
    color: '$gray300',
    fontSize: 16
  }
})

export const Actions = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: 20,

  '& button:first-child': {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '4px',
    alignItems: 'center',
    background: '$white', color: '$textColor',
    border: '1px solid $gray300',

    '&:hover': {
      background: '$gray100', color: '$textColor',

    }
  },

  '& button': {
    background: '$black900', color: '$white',
    width: 'fit-content',
    borderRadius: '4px',
    fontSize: '13px',
    border: '0',
    padding: '0.5rem',
    transition: '0.2s all ease-in-out',

    '&:hover': {
      background: '$black500', color: '$white',

    }
  }
  // padding: '1rem',
  // outline: 'none', resize: 'none',
  // border: '1px solid $gray300',
  // borderRadius: '6px',

  // '&::placeholder': {
  //   color: '$gray300',
  //   fontSize: 16
  // }
})


