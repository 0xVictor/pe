import { BlockNoteEditor } from "@blocknote/core";
import {
  ToggledStyleButton,
  Toolbar,
  ToolbarButton, ColorStyleButton, TextAlignButton, BlockTypeDropdown, ToolbarDropdown
} from "@blocknote/react";
import { TfiWrite } from 'react-icons/tfi'
import OpenAI from "./openAI";

const FormattingToolbar = (props: { editor: BlockNoteEditor }) => {
  return (
    <Toolbar>
      {/*Default button to toggle bold.*/}
      <BlockTypeDropdown editor={props.editor} />
      {/*Default button to toggle bold.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"bold"} />
      {/*Default button to toggle italic.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"italic"} />
      {/*Default button to toggle underline.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"underline"} />
      {/*Default button to toggle strike.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"strike"} />
      {/*Default button to toggle code.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"code"} />
      {/*Default button to set a color.*/}
      <ColorStyleButton editor={props.editor} />
      {/*Custom button to toggle blue text & background color.*/}
      <OpenAI editor={props.editor} />
    </Toolbar >
  );
};

export default FormattingToolbar