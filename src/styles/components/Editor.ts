import { styled } from '@stitches/react';
import ContentEditable from 'react-contenteditable';

export const Container = styled('div', {
  maxWidth: 800,
  margin: '0 auto',
});

export const Content = styled('div', {
  display: 'grid',
  gap: 20,

  position: 'relative',
});

export const Title = styled('input', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'auto 1fr',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '14px',
  border: 'none',
  outline: 'none',
  fontSize: '44px',
  color: '$textColor',

  '&::placeholder': {
    color: '$gray300',
  },
});

export const Social = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'auto 1fr',
  padding: '1rem',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '14px',

  '&:hover': {
    background: '#f1f1f1',
  },
});

export const EditableBlockContainer = styled(ContentEditable, {
  margin: '0.25rem 0',
  padding: '0.5rem',
  background: '#fafafa',
  borderRadius: '0.25rem',

  '&:hover': {
    background: '#f8f8f8',
    outlineColor: '#f5f6fb',
  },

  '&:focus': {
    background: '#f5f6fb',
  },
});

export const SelectSlashMenu = styled('div', {
  position: 'absolute',
  width: '6.875rem',
  height: '9rem',
  zIndex: 11,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  '& .Items': {
    background: '#fafafa',
    boxShadow:
      'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px',
    borderRadius: '0.5rem',
  },

  "& .Items div[role='button']": {
    fontSize: '0.875rem',
    fontWeight: 400,
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #f5f6fb',
  },

  "& .Items div[role='button']:hover": {
    background: '#f5f6fb',
    cursor: 'pointer',
  },

  "& .Items div[role='button']:last-of-type": {
    borderBottom: 'none',
  },

  "& .Items div[role='button']:hover, & .Items div[role='button']:focus": {
    background: '#f5f6fb',
    cursor: 'pointer',
  },

  "& .Items div[role='button']:first-of-type:hover, & .Items div[role='button']:first-of-type:focus":
    {
      borderTopRightRadius: '0.5rem',
      borderTopLeftRadius: '0.5rem',
    },

  "& .Items div[role='button']:last-of-type:hover, & .Items div[role='button']:last-of-type:focus":
    {
      borderBottomRightRadius: '0.5rem',
      borderBottomLeftRadius: '0.5rem',
    },

  '& .Selected': {
    background: '#f5f6fb',
    borderRadius: '0.5rem',
  },
});

export const Icon = styled('div', {
  borderRadius: '40px',
  height: '64px',
  width: '64px',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
  },
});

export const Data = styled('div', {
  display: 'grid',
  gap: 8,
  gridTemplateRows: 'auto auto',

  h6: {
    fontSize: 24,
    color: '$black900',
  },

  span: {
    fontSize: 20,
    color: '$black500',
  },
});

export const EditorStyle = styled('div', {
  color: '$black900',

  svg: {
    fontSize: 16,
    color: '$black500',
  },

  '.ProseMirror': {
    border: 0,
    outline: 'none',

    '> * + *': {
      marginTop: '0.75em',
    },
  },

  '.ProseMirror p.is-editor-empty:first-child::before': {
    color: '#adb5bd',
    content: 'Enter "/" for commands',
    float: 'left',
    height: 0,
    pointerEvents: 'none',
  },

  '.ProseMirror p.is-empty::before': {
    color: '#adb5bd',
    content: 'Enter "/" for commands',
    float: 'left',
    height: 0,
    pointerEvents: 'none',
  },

  '.bubble': {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: 4,
    background: '$white',
    padding: '0.2rem',
    border: '1px solid $lightgray',
    borderRadius: 6,

    button: {
      background: '$white',
      padding: '0.2rem 0.4rem',

      '&:hover': {
        background: '$hover',
        borderRadius: 4,
      },
    },
  },

  code: {
    color: 'red',
    padding: '0.25rem 0.4rem',
  },

  pre: {
    background: '#0d0d0d',
    borderRadius: '0.5rem',
    color: '#fff',
    fontFamily: '"JetBrainsMono", monospace',
    padding: '0.75rem 1rem',

    '& code': {
      background: 'none',
      color: 'inherit',
      fontSize: '0.8rem',
      padding: '0',
    },

    '& .hljs-comment, & .hljs-quote': {
      color: '#616161',
    },

    '& .hljs-variable, & .hljs-template-variable, & .hljs-attribute, & .hljs-tag, & .hljs-name, & .hljs-regexp, & .hljs-link, & .hljs-name, & .hljs-selector-id, & .hljs-selector-class':
      {
        color: '#f98181',
      },

    '& .hljs-number, & .hljs-meta, & .hljs-built_in, & .hljs-builtin-name, & .hljs-literal, & .hljs-type, & .hljs-params':
      {
        color: '#fbbc88',
      },

    '& .hljs-string, & .hljs-symbol, & .hljs-bullet': {
      color: '#b9f18d',
    },

    '& .hljs-title, & .hljs-section': {
      color: '#faf594',
    },

    '& .hljs-keyword, & .hljs-selector-tag': {
      color: '#70cff8',
    },

    '& .hljs-emphasis': {
      fontStyle: 'italic',
    },

    '& .hljs-strong': {
      fontWeight: '700',
    },
  },

  '.slash-menu': {
    position: 'absolute',
    backgroundColor: '$white',
    border: '1px solid #ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
  },

  '.items': {
    position: 'relative',
    borderRadius: '0.25rem',
    backgroundColor: '$white',
    color: '$textColor',
    overflow: 'hidden',
    fontSize: '0.9rem',
    padding: '0.25rem',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',
  },

  '.item': {
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
  },

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
});
