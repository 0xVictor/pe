import { useCallback, useState, useRef, useEffect } from 'react';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { ToolbarDropdown, ToolbarButton } from '@blocknote/react';
import {
  NotePencil,
  ArrowDown,
  CaretDown,
  CaretUp,
  Note,
  Sparkle,
  Pen,
  BookOpen,
  ArrowsOut,
  SortDescending,
  Lightbulb,
  ArrowRight,
  Lightning,
  MagicWand,
  ArrowCircleRight,
} from '@phosphor-icons/react';
import Typing from 'react-typing-animation';
import { Button } from '@nextui-org/react';
import { useGlobalState } from '@/context/Store';
import {
  Container,
  Content,
  AIInteract,
  Prompt,
  Actions,
  AIOptions,
  Option,
  PromptOutput,
  AIContent,
} from '@/styles/components/AIToolbar';
import EditSelection from './EditSelection';
import WriteWithAI from './WriteWithAI';

const AIToolbar = (props: {
  editor: BlockNoteEditor;
  top: string;
  left: string;
}) => {
  const textareaRef = useRef(null);
  const isAIToolbarOpen = useGlobalState(state => state.isAIToolbarOpen);
  const toggleAIToolbar = useGlobalState(state => state.toggleAIToolbar);
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateIsDone, setGenerateIsDone] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const modalRef = useRef();

  const callGenerateEndpoint = async (userInput: string, command: string) => {
    setIsGenerating(true);
    setGenerateIsDone(false);
    setIsMoreOptionsOpen(false);

    console.log('Calling OpenAI...');
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput, command }),
    });

    const data = await response.json();
    const { output } = data;
    console.log('OpenAI replied...', output.text);

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

    console.log(currentBlock, 'block');

    const summaryByAI: PartialBlock = {
      type: 'paragraph',
      content: [{ type: 'text', text: apiOutput, styles: {} }],
    };

    props.editor.insertBlocks([summaryByAI], currentBlock, 'after');

    toggleAIToolbar();
  };

  const handleGenerate = async (command: string) => {
    const selection = props.editor.getSelectedText();

    await callGenerateEndpoint(selection, command);
  };

  const handleGenerateFromPage = async (
    blockContent: string,
    command: string
  ) => {
    await callGenerateEndpoint(blockContent, command);
  };

  const handlePromptAreaChange = e => {
    setTextAreaValue(e.target.value);
  };

  const handleInput = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  };

  useEffect(() => {
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }, []);

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
    <Container
      ref={modalRef}
      style={{ position: 'absolute', top: `${props.top}px` }}
    >
      <Content>
        <AIContent>
          {!isGenerating && !generateIsDone && (
            <AIInteract>
              <MagicWand size={22} weight="fill" />
              <Prompt
                autoFocus
                ref={textareaRef}
                value={textAreaValue}
                onChange={handlePromptAreaChange}
                className="auto-resize-textarea"
                onInput={handleInput}
                onSubmit={() => callGenerateEndpoint(textAreaValue, 'personal')}
                placeholder="Ask Perso AI anything..."
              />
            </AIInteract>
          )}
          {isGenerating && !generateIsDone && (
            <AIInteract>
              <Lightning size={16} weight="fill" />
              <PromptOutput
                ref={textareaRef}
                className="auto-resize-textarea"
                onInput={handleInput}
              >
                <span>AI is writting</span>
              </PromptOutput>{' '}
            </AIInteract>
          )}
          {!isGenerating && generateIsDone && (
            <AIInteract>
              <Lightning size={16} weight="fill" />
              <PromptOutput
                ref={textareaRef}
                className="auto-resize-textarea"
                onInput={handleInput}
              >
                <span>
                  <Typing cursor={<Typing.Cursor />} speed={50}>
                    {apiOutput}
                  </Typing>
                </span>
              </PromptOutput>{' '}
            </AIInteract>
          )}
          <Actions>
            {/* <button
              onClick={() => toggleAIToolbar()}
              style={{ background: "$white !important", color: "$textColor !important" }}
            >
              Discard
            </button> */}

            {/* {generateIsDone && !isGenerating && (
              <button
                onClick={() => insertBelow()}
                style={{ background: "$white", color: "$textColor" }}
              >
                Insert below
              </button>
            )} */}

            {!generateIsDone && (
              <button
                shadow
                disabled={isGenerating}
                onClick={() => callGenerateEndpoint(textAreaValue, 'personal')}
              >
                {isGenerating ? (
                  'Stop'
                ) : (
                  <ArrowCircleRight size={32} weight="duotone" />
                )}
              </button>
            )}
          </Actions>
        </AIContent>
        {!isGenerating && !generateIsDone && props.editor.getSelection() && (
          <EditSelection handleGenerate={handleGenerate} />
        )}

        {!isGenerating && !generateIsDone && !props.editor.getSelection() && (
          <WriteWithAI
            handleGenerateFromPage={handleGenerateFromPage}
            setTextAreaValue={setTextAreaValue}
          />
        )}
      </Content>
    </Container>
  );
};

export default AIToolbar;
