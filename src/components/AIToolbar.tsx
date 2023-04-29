import { useCallback, useState } from "react";
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { ToolbarDropdown, ToolbarButton } from "@blocknote/react";
import {
  NotePencil,
  ArrowDown,
  CaretDown,
  CaretUp,
  Note,
} from "@phosphor-icons/react";

import { useGlobalState } from "@/context/Store";
import {
  Container,
  Content,
  Prompt,
  Actions,
  AIOptions,
  Option,
  PromptOutput,
} from "@/styles/components/AIToolbar";

const AIToolbar = (props: {
  editor: BlockNoteEditor;
  top: string;
  left: string;
}) => {
  const isAIToolbarOpen = useGlobalState((state) => state.isAIToolbarOpen);
  const toggleAIToolbar = useGlobalState((state) => state.toggleAIToolbar);
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateIsDone, setGenerateIsDone] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);

  const callGenerateEndpoint = async (userInput: string, command: string) => {
    setIsGenerating(true);
    setGenerateIsDone(false);
    setIsMoreOptionsOpen(false);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput, command }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    setGenerateIsDone(true);

    return output.text;
  };

  const toggleOptions = () => {
    setIsMoreOptionsOpen(!isMoreOptionsOpen);
  };

  const insertBelow = () => {
    const blockSelected = props.editor.getSelection();

    // Block that the text cursor is currently in.
    const currentBlock: Block =
      blockSelected?.blocks[blockSelected?.blocks.length - 1];

    const summaryByAI: PartialBlock = {
      type: "paragraph",
      content: [{ type: "text", text: apiOutput, styles: {} }],
    };

    props.editor.insertBlocks([summaryByAI], currentBlock, "after");

    toggleAIToolbar();
  };

  const handleGenerate = async (command: string) => {
    const selection = props.editor.getSelectedText();

    await callGenerateEndpoint(selection, command);
  };

  return (
    <Container style={{ position: "absolute", top: `${props.top}px` }}>
      <Content>
        {!isGenerating && !generateIsDone && (
          <Prompt placeholder="Ask Perso AI anything..." />
        )}
        {isGenerating && !generateIsDone && (
          <PromptOutput>
            <span>Generating</span>
          </PromptOutput>
        )}
        {!isGenerating && generateIsDone && (
          <PromptOutput>
            <span>{apiOutput}</span>
          </PromptOutput>
        )}
        <Actions>
          <button onClick={() => toggleOptions()}>
            More
            {isMoreOptionsOpen ? <CaretUp /> : <CaretDown />}
          </button>

          {generateIsDone && !isGenerating && (
            <button
              onClick={() => insertBelow()}
              style={{ background: "$white", color: "$textColor" }}
            >
              Insert below
            </button>
          )}

          {!generateIsDone && (
            <button disabled={isGenerating}>
              {isGenerating ? "Stop" : "Generate"}
            </button>
          )}
        </Actions>
        {isMoreOptionsOpen && (
          <AIOptions>
            <label>General</label>
            <ul>
              <Option>
                <button onClick={() => handleGenerate("summarize")}>
                  <Note size={16} /> Summarize
                </button>
              </Option>
              <Option>
                <button onClick={() => handleGenerate("rewrite")}>
                  <Note size={16} /> Rewrite
                </button>
              </Option>
              <Option>
                <button onClick={() => handleGenerate("shorter")}>
                  <Note size={16} /> Make shorter
                </button>
              </Option>
              <Option>
                <button onClick={() => handleGenerate("longer")}>
                  <Note size={16} /> Make Longer
                </button>
              </Option>
            </ul>
          </AIOptions>
        )}
      </Content>
    </Container>
  );
};

export default AIToolbar;
