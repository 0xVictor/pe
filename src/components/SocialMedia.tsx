import React, { useEffect, useState, useRef } from 'react';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import {
  BlockNoteView,
  defaultReactSlashMenuItems,
  ReactSlashMenuItem,
  useBlockNote,
} from '@blocknote/react';
import { Sparkle } from '@phosphor-icons/react';

import FormattingToolbar from '@/components/FormattingToolbar';

import {
  Container,
  Content,
  Title,
  Social,
  Icon,
  Data,
} from '@/styles/components/Editor';
import AIToolbar from './AIToolbar';
import { useGlobalState } from '@/context/Store';

const Editor: React.FC = () => {
  const isAIToolbarOpen = useGlobalState(state => state.isAIToolbarOpen);
  const toggleAIToolbar = useGlobalState(state => state.toggleAIToolbar);
  const blocks = useGlobalState(state => state.blocks);
  const setBlocks = useGlobalState(state => state.setBlocks);

  const [selectedElementPosition, setSelectedElementPosition] = useState({
    top: 0,
    left: 0,
  });
  const modalRef = useRef();

  const askPersoAI = () => {
    toggleAIToolbar();
  };
  // Slash Menu item which executes the command.
  const AskPersoAI: ReactSlashMenuItem = new ReactSlashMenuItem(
    'Ask PersoAI',
    askPersoAI,
    ['persoai', 'pai', 'ai'],
    'Perso AI',
    <Sparkle size={18} />,
    'Used to ask anything to AI.'
  );

  const editor: BlockNoteEditor = useBlockNote({
    customElements: {
      // Makes the editor instance use the custom toolbar.
      formattingToolbar: FormattingToolbar,
    },
    slashCommands: [AskPersoAI, ...defaultReactSlashMenuItems],
    onEditorContentChange: (editor: BlockNoteEditor) =>
      // Converts the editor's contents to an array of Block objects.
      setBlocks(editor.topLevelBlocks),
  });

  const handleClick = event => {
    const element = document.elementFromPoint(event.clientX, event.clientY);

    // You can add a condition to ensure you're only capturing elements inside BlockNoteView
    if (element && element.closest('._blockContent_63zqr_10')) {
      const rect = element.getBoundingClientRect();
      setSelectedElementPosition({ top: rect.top, left: rect.left });
    }
  };

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleAIToolbar();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Content onClick={handleClick}>
        <Title placeholder="Enter title" />
        <BlockNoteView editor={editor} />
        {isAIToolbarOpen && (
          <AIToolbar
            ref={modalRef}
            editor={editor}
            top={selectedElementPosition.top - 50}
            left={selectedElementPosition.left}
          />
        )}
      </Content>
    </Container>
  );
};

export default Editor;
