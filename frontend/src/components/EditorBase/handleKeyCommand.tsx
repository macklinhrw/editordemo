import { DraftHandleValue, EditorState, RichUtils } from "draft-js";

/**
 * Handles key commands using the RichUtils module from draftjs
 * @param command Key command
 * @param editorState EditorState from useState hook
 * @param setEditorState setEditorState function from useState hook
 */
export const handleKeyCommand = (
  command: string,
  editorState: EditorState,
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
): DraftHandleValue => {
  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState) {
    setEditorState(newState);
    return "handled";
  }

  return "not-handled";
};
