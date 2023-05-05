import React, { useMemo } from 'react';
import {

  Sparkle,
  Pen,
  BookOpen,
  ArrowsOut,
  SortDescending,
  Lightbulb,
  ArrowRight,

} from "@phosphor-icons/react";
import { useGlobalState } from "@/context/Store";
import { AIOptions, Option, } from '@/styles/components/AIToolbar';

interface WriteWithAIProps {
  handleGenerateFromPage: (blockContent: string, command: string) => void,
  setTextAreaValue: (value: string) => void
}

const WriteWithAI: React.FC<WriteWithAIProps> = ({ handleGenerateFromPage, setTextAreaValue }) => {
  const toggleAIToolbar = useGlobalState((state) => state.toggleAIToolbar);
  const blocks = useGlobalState((state) => state.blocks);
  console.log(blocks, 'from writeWithAI component')

  const blockContent = useMemo(() => {
    let content = "";

    blocks.map((block) => {
      if (block.content.length == 0) return;

      content += block.content[0].text;
    })

    return content;
  }, [blocks])

  const changePromptValue = () => {
    setTextAreaValue('Translate to ');
  }



  return (
    <AIOptions>
      <label>Write with AI</label>
      <ul>
        <Option>
          <button onClick={() => handleGenerateFromPage(blockContent, "continue")}>
            <Lightbulb size={16} /> Continue writing
          </button>
        </Option>
      </ul>
      <hr />
      <label>Generate from page</label>
      <ul>
        <Option>
          <button onClick={() => handleGenerateFromPage(blockContent, "summarize")}>
            <Sparkle size={16} /> Summarize
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerateFromPage(blockContent, "explain")}>
            <ArrowRight size={16} /> Explain
          </button>
        </Option>
        <Option>
          <button onClick={() => changePromptValue()}>
            <SortDescending size={16} /> Translate to
          </button>
        </Option>

      </ul>
      <hr />

    </AIOptions>)
}

export default WriteWithAI;