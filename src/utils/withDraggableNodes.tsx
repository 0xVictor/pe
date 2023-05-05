// utils/withDraggableNodes.js
import { NodeSelection } from 'prosemirror-state';

export function withDraggableNodes(editor, EditorContentComponent) {
  const onDragStart = (event, node) => {
    if (!editor.view.dragging) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setDragImage(node, 0, 0);
      editor.view.dragging = { nodeId: node.id };
    }
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = event => {
    const nodeId = editor.view.dragging?.nodeId;
    if (nodeId) {
      const nodePos = editor.view.posAtCoords({
        left: event.clientX,
        top: event.clientY,
      });
      const node = editor.view.state.schema.nodes.paragraph.create({
        id: nodeId,
      });

      editor.view.dispatch(
        editor.view.state.tr
          .deleteSelection()
          .insert(nodePos.pos, node)
          .setSelection(
            NodeSelection.create(editor.view.state.doc, nodePos.pos)
          )
      );
    }
    editor.view.dragging = null;
  };

  const DraggableEditorContent = props => (
    <div onDragOver={onDragOver} onDrop={onDrop}>
      <EditorContentComponent {...props} />
    </div>
  );

  return DraggableEditorContent;
}
