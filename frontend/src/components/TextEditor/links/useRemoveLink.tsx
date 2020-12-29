import { RichUtils } from "draft-js";
import { useContext } from "react";
import { EditorContext } from "../hooks/EditorContext";

export const useRemoveLink = () => {
  const { editorState, setEditorState } = useContext(EditorContext);
  return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    }
  };
};
