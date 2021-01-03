import { RichUtils } from "draft-js";
import { useContext } from "react";
import { TextEditorContext } from "../hooks/TextEditorContext";

export const useRemoveLink = () => {
  const { editorState, setEditorState } = useContext(TextEditorContext);
  return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    }
  };
};
