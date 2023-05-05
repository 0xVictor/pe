import React, { useEffect, useState, useRef } from 'react';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  ChatTeardropDots,
  TextB,
  TextItalic,
  TextStrikethrough,
} from '@phosphor-icons/react';
import Paragraph from '@tiptap/extension-paragraph';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import HardBreak from '@tiptap/extension-hard-break';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

import { lowlight } from 'lowlight';

import {
  Container,
  Content,
  Title,
  EditorStyle,
} from '@/styles/components/Editor';
import { withDraggableNodes } from '@/utils/withDraggableNodes';
import Gapcursor from '@tiptap/extension-gapcursor';
import Commands from '@/components/Extensions/SlashMenu/Commands';
import getSuggestionItems from '@/components/Extensions/SlashMenu/Items';
import renderItems from '@/components/Extensions/SlashMenu/RenderItems';
import Drop from './Extensions/Draggable/Draggable';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

const Editor: React.FC = () => {
  const [selectedElementPosition, setSelectedElementPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const modalRef = useRef();

  const askPersoAI = () => {
    toggleAIToolbar();
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph,
      HardBreak,
      Gapcursor,
      Drop,
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Type "/" to see commands',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Commands.configure({
        suggestion: {
          items: getSuggestionItems,
          render: renderItems,
        },
      }),
      Highlight.configure({ multicolor: true }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: `Click the button below or use / command to insert image`,
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
    setIsLoaded(true);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Content onClick={handleClick}>
        <Title placeholder="Enter title" />
        {isLoaded && (
          <EditorStyle>
            {editor && (
              <BubbleMenu
                editor={editor}
                tippyOptions={{ duration: 100 }}
                className="bubble"
              >
                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={editor.isActive('bold') ? 'is-active' : ''}
                >
                  <TextB size={18} color="$black900" />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={editor.isActive('italic') ? 'is-active' : ''}
                >
                  <TextItalic size={18} color="$black900" />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  className={editor.isActive('strike') ? 'is-active' : ''}
                >
                  <TextStrikethrough size={18} color="$black900" />
                </button>
                <button
                  onClick={() => editor.commands.toggleTaskList()}
                  className={editor.isActive('strike') ? 'is-active' : ''}
                >
                  <ChatTeardropDots size={18} color="$black900" />
                </button>
              </BubbleMenu>
            )}

            <EditorContent editor={editor} />
          </EditorStyle>
        )}
      </Content>
    </Container>
  );
};

export default Editor;
