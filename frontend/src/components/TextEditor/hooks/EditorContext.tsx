import { EditorState } from "draft-js";
import React, { createContext } from "react";

interface EditorContextProps {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  editorRef: any;
  scrollLock: boolean;
  setScrollLock: React.Dispatch<React.SetStateAction<boolean>>;
}

//@ts-ignore
export const EditorContext = createContext<EditorContextProps>({});
