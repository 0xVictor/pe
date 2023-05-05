const getSuggestionItems = (query: string) => {
  return [
    {
      title: 'H1',
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 1 })
          .run();
      },
    },
    {
      title: 'H2',
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode('heading', { level: 2 })
          .run();
      },
    },
    {
      title: 'highlight',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark('highlight').run();
      },
    },
    {
      title: 'code',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).run();
        editor.commands.setCodeBlock();
      },
    },
    {
      title: 'task',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).run();
        editor.commands.toggleTaskList();
      },
    },
    {
      title: 'bold',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark('bold').run();
      },
    },
    {
      title: 'italic',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark('italic').run();
      },
    },
  ];
};

export default getSuggestionItems;
