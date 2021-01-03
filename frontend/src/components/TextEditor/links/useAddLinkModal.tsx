import { useContext, useState } from "react";
import { TextEditorContext } from "../hooks/TextEditorContext";

export const useAddLinkModal = () => {
  const [state, setState] = useState({ open: false });
  const { editorState, setEditorState, editorRef } = useContext(
    TextEditorContext
  );

  return {
    onClose: () => {
      setState({ open: false });
      editorRef.current?.blur();
      editorRef.current?.focus();
      setEditorState(editorState);
    },
    onOpen: () => {
      setState({ open: true });
    },
    isOpen: state.open,
  };
};
