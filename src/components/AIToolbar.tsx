import { useCallback, useState } from 'react'
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  ToolbarDropdown, ToolbarButton
} from "@blocknote/react";
import { NotePencil, ArrowDown, CaretDown, CaretUp } from "@phosphor-icons/react";
import { Container, Content, Prompt, Actions } from '@/styles/components/AIToolbar'

const AIToolbar = (props: { editor: BlockNoteEditor, top: string, left: string }) => {
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false)

  const callGenerateEndpoint = async (userInput: string) => {
    setIsGenerating(true);

    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)


    setApiOutput(`${output.text}`);
    setIsGenerating(false);

    return output.text
  }

  const toggleOptions = () => {
    setIsMoreOptionsOpen(!isMoreOptionsOpen)
  }

  const rewrite = useCallback(async () => {

    const blockSelected = props.editor.getSelection()

    // Block that the text cursor is currently in.
    const currentBlock: Block = blockSelected?.blocks[blockSelected?.blocks.length - 1];


    // props.editor.getSelectedText();

    // create a function to filter the selected text on the block content
    const selection = props.editor.getSelectedText()

    // get the ai response 
    const response = await callGenerateEndpoint(selection)
    // put the ai response on a string + the resto of the block content

    // put the result above bellow
    console.log(blockSelected?.blocks[blockSelected?.blocks.length - 1], 'block')
    props.editor.getSelection();
    // props.editor.updateBlock(blockSelected?.blocks, {
    //   content: { text: 'oi' }
    // })

    const summaryByAI: PartialBlock = {
      type: "paragraph",
      content: [{ type: "text", text: response, styles: {} }],
    };

    props.editor.insertBlocks([summaryByAI], currentBlock, 'after')
  }, [])


  console.log(props.top, props.left, 'positions')

  return (


    <Container style={{ position: 'absolute', top: `${props.top}px` }}>
      <Content>
        <Prompt placeholder='Ask Perso AI anything...' />
        <Actions>
          <button onClick={() => toggleOptions()}>

            More

            {isMoreOptionsOpen ? (<CaretUp />) : (<CaretDown />)}
          </button>

          <button disabled={isGenerating} >
            {isGenerating ? 'Generating' : 'Generate'}
          </button>
        </Actions>

      </Content>
    </Container>
  );
};

export default AIToolbar