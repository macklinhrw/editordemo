import { EditorState, Modifier } from "draft-js";
import { useContext } from "react";
import { TextEditorContext } from "../hooks/TextEditorContext";

export const useInsertNote = () => {
  const { editorState, setEditorState } = useContext(TextEditorContext);
  return (text: string, label: string) => {
    const contentState = editorState?.getCurrentContent();
    const contentStateWithEntity = contentState?.createEntity(
      "NOTE",
      "IMMUTABLE",
      {
        text,
        label,
      }
    );
    const entityKey = contentStateWithEntity?.getLastCreatedEntityKey();
    if (
      editorState &&
      setEditorState &&
      entityKey &&
      editorState.getSelection().isCollapsed()
    ) {
      //insert text label text with entity key
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });
      const contentWithText = Modifier.insertText(
        contentStateWithEntity,
        newEditorState.getSelection(),
        label,
        undefined,
        entityKey
      );
      const editorStateWithText = EditorState.set(editorState, {
        currentContent: contentWithText,
      });
      // move selection to end of note and apply entity
      const selection = editorStateWithText.getSelection();
      const newSelection = selection.merge({
        focusOffset: selection.getFocusOffset() + label.length,
        anchorOffset: selection.getAnchorOffset() + label.length,
      });
      const newEditor = EditorState.forceSelection(
        editorStateWithText,
        newSelection
      );
      const finalContent = Modifier.applyEntity(
        newEditor.getCurrentContent(),
        newSelection,
        entityKey
      );
      // TODO : am I applying the entitiies to the wrong selection state, should I be applying it to the original selection state instead?
      setEditorState(EditorState.push(newEditor, finalContent, "apply-entity"));
    }
  };
};
