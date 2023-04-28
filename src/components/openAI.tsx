import { useCallback, useState } from 'react'
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  ToolbarDropdown, ToolbarButton
} from "@blocknote/react";
import { NotePencil } from "@phosphor-icons/react";
import { Container, Content } from '@/styles/components/AIToolbar'

import { useGlobalState } from '@/context/Store';

const OpenAI: React.FC = () => {
  const isAIToolbarOpen = useGlobalState((state) => state.isAIToolbarOpen);
  const toggleAIToolbar = useGlobalState((state) => state.toggleAIToolbar);
  console.log(isAIToolbarOpen, 'isOpen')
  const openAI = useCallback(async () => {
    toggleAIToolbar()
  }, [])


  return (
    <ToolbarButton
      mainTooltip={"Summarize the sentence"}
      onClick={() => openAI()}
    >Ask AI
    </ToolbarButton>
  )
}

export default OpenAI;