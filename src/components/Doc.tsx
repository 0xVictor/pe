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

import EditablePage from './EditablePage';

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

const Doc: React.FC = () => {
  const isAIToolbarOpen = useGlobalState(state => state.isAIToolbarOpen);
  const toggleAIToolbar = useGlobalState(state => state.toggleAIToolbar);

  const [selectedElementPosition, setSelectedElementPosition] = useState({
    top: 0,
    left: 0,
  });
  const modalRef = useRef();

  const askPersoAI = () => {
    toggleAIToolbar();
  };

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleAIToolbar();
    }
  };

  return (
    <Container>
      <Content onClick={handleClickOutside}>
        <Title placeholder="Enter title" />
        <EditablePage />
      </Content>
    </Container>
  );
};

export default Doc;
