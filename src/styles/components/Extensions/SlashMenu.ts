import { styled } from '@stitches/react';

export const Items = styled('div', {
  position: 'relative',
  borderRadius: '0.25rem',
  backgroundColor: '$white',
  color: '$textColor',
  overflow: 'hidden',
  fontSize: '0.9rem',
  padding: '0.25rem',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',

  '.editor-output': {
    fontSize: '0.8rem',
    borderLeft: '5px solid purple',
    padding: '0.5em 1em',
  },

  '.add-image-btn': {
    marginTop: '2em',
    padding: '1em 2em',
    backgroundColor: 'teal',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '700',
    border: '0',
    borderRadius: '4em',
  },

  '.upload-modal': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    textAlign: 'center',
  },

  '.drag-handle': {
    display: 'inline-block',
    marginRight: 4,
    cursor: 'move',
    userSelect: 'none',
  },
});

export const Button = styled('button', {
  display: 'block',
  width: '100%',
  textAlign: 'left',
  background: '$white',
  border: 'none',
  padding: '0.2rem 0.5rem',

  button: {
    background: '$white',
  },

  '&.is-selected, &:hover': {
    color: '$selected',
    background: 'rgba(167, 117, 255, 0.1)',
  },
});
