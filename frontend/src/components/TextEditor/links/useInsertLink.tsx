import { EditorState, Modifier, RichUtils, SelectionState } from "draft-js";
import { useContext } from "react";
import { EditorContext } from "../hooks/EditorContext";

function completeLink(link: string) {
  if (!link.includes("http://")) return "https://" + link;
  return link;
}

export const useInsertLink = () => {
  const { editorState, setEditorState } = useContext(EditorContext);
  return (url: string, text: string) => {
    const contentState = editorState?.getCurrentContent();
    const contentStateWithEntity = contentState?.createEntity(
      "LINK",
      "MUTABLE",
      {
        url: completeLink(url),
      }
    );
    const entityKey = contentStateWithEntity?.getLastCreatedEntityKey();
    if (editorState && setEditorState && entityKey) {
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });
      const contentWithText = Modifier.insertText(
        contentStateWithEntity,
        newEditorState.getSelection(),
        text,
        undefined,
        entityKey
      );
      const editorStateWithText = EditorState.set(editorState, {
        currentContent: contentWithText,
      });
      const selection = editorStateWithText.getSelection();
      const newSelection = new SelectionState(
        selection
          .set("anchorOffset", selection.getAnchorOffset() + text.length)
          .set("focusOffset", selection.getFocusOffset() + text.length)
      );
      setEditorState(
        RichUtils.toggleLink(editorStateWithText, newSelection, entityKey)
      );
      return newSelection;
    }
    return editorState.getSelection();
  };
};