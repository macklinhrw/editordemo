import { EditorState } from "draft-js";
import { createContext } from "react";

interface EditorStateContextProps {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

//@ts-ignore
export const EditorStateContext = createContext<EditorStateContextProps>({});
