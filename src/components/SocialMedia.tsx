import React, { useEffect, useState } from 'react';
import {
  Block,
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";
import {
  BlockNoteView,
  defaultReactSlashMenuItems,
  ReactSlashMenuItem,
  useBlockNote
} from "@blocknote/react";
import { HiOutlineGlobeAlt } from "react-icons/all";

import FormattingToolbar from '@/components/FormattingToolbar'


import { Container, Content, Title, Social, Icon, Data } from '@/styles/components/Editor';
import AIToolbar from './AIToolbar';
import { useGlobalState } from '@/context/Store';

const Editor: React.FC = () => {
  const isAIToolbarOpen = useGlobalState((state) => state.isAIToolbarOpen);
  const toggleAIToolbar = useGlobalState((state) => state.toggleAIToolbar);
  const [selectedElementPosition, setSelectedElementPosition] = useState({ top: 0, left: 0 });

  const editor: BlockNoteEditor = useBlockNote({
    customElements: {
      // Makes the editor instance use the custom toolbar.
      formattingToolbar: FormattingToolbar
    },

  });


  const handleClick = (event) => {
    const element = document.elementFromPoint(event.clientX, event.clientY);

    // You can add a condition to ensure you're only capturing elements inside BlockNoteView
    if (element && element.closest('._blockContent_63zqr_10')) {
      const rect = element.getBoundingClientRect();
      setSelectedElementPosition({ top: rect.top, left: rect.left });
    }
  };


  return (
    <Container>
      <Content onClick={handleClick}>
        <Title placeholder='Type the title here' />
        <BlockNoteView editor={editor} />
        {isAIToolbarOpen && (
          <AIToolbar editor={editor} top={selectedElementPosition.top - 50} left={selectedElementPosition.left} />
        )}

      </Content>
    </Container>
  )
}

export default Editor;