import { useContext, useState } from "react";
import { EditorContext } from "../hooks/EditorContext";

export const useAddLinkModal = () => {
  const [state, setState] = useState({ open: false });
  const { editorState, setEditorState, editorRef } = useContext(EditorContext);

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
