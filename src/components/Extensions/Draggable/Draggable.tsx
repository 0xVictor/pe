import { Plugin } from 'prosemirror-state';
import { DropCursor } from 'prosemirror-dropcursor';
import { Extension } from '@tiptap/core';

export default class Draggable extends Extension {
  get name() {
    return 'draggable';
  }

  get plugins() {
    return [
      new Plugin({
        key: new Plugin.Key('draggable'),
        view: editorView => new DraggableView(editorView),
      }),
      new DropCursor({ color: '#ccc' }),
    ];
  }
}

class DraggableView {
  constructor(editorView) {
    this.editorView = editorView;
    this.handle = null;
    this.draggedNode = null;

    this.editorView.dom.addEventListener('mousedown', this.onMouseDown);
  }

  onMouseDown = event => {
    if (!event.target.classList.contains('drag-handle')) return;
    this.handle = event.target;
    this.draggedNode = this.handle.closest('.draggable-node');
    const draggedNodeView = this.editorView.nodeDOMToView.get(this.draggedNode);

    event.preventDefault();

    const onMouseMove = event => {
      event.preventDefault();
    };

    const onMouseUp = event => {
      event.preventDefault();
      this.editorView.dom.removeEventListener('mousemove', onMouseMove);
      this.editorView.dom.removeEventListener('mouseup', onMouseUp);
      this.handle = null;
      this.draggedNode = null;
    };

    this.editorView.dom.addEventListener('mousemove', onMouseMove);
    this.editorView.dom.addEventListener('mouseup', onMouseUp);
  };

  destroy() {
    this.editorView.dom.removeEventListener('mousedown', this.onMouseDown);
  }
}
