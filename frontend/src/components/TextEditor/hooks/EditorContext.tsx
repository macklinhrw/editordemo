import { EditorState } from "draft-js";
import React, { createContext } from "react";

interface EditorContextProps {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  editorRef: any;
}

//@ts-ignore
export const EditorContext = createContext<EditorContextProps>({});
