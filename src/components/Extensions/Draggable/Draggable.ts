import { NodeSelection } from 'prosemirror-state';
import { Extension } from '@tiptap/core';

export default class DraggableNodeExtension extends Extension {
  get name() {
    return 'draggableNode';
  }

  get defaultOptions() {
    return {
      nodeTypes: [],
    };
  }

  addProseMirrorPlugins() {
    let dragging = null;

    const handleMouseDown = (view, event) => {
      if (event.target.classList.contains('draggable-handle')) {
        event.preventDefault();

        const { state } = view;
        const { from } = state.selection;
        const node = state.doc.nodeAt(from);

        if (node && this.options.nodeTypes.includes(node.type.name)) {
          dragging = { from, node };
        }
      }
    };

    const handleMouseMove = (view, event) => {
      if (dragging) {
        event.preventDefault();

        const pos = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        });
        const to = pos ? pos.pos : null;

        if (to !== null && to !== dragging.from) {
          const { state, dispatch } = view;
          const tr = state.tr;
          tr.delete(dragging.from, dragging.from + dragging.node.nodeSize);
          tr.insert(to, dragging.node);
          tr.setSelection(NodeSelection.create(tr.doc, to));
          dispatch(tr);
        }
      }
    };

    const handleMouseUp = (view, event) => {
      if (dragging) {
        event.preventDefault();
        dragging = null;
      }
    };

    return [
      {
        props: {
          handleDOMEvents: {
            mousedown: handleMouseDown,
            mousemove: handleMouseMove,
            mouseup: handleMouseUp,
          },
        },
      },
    ];
  }
}
