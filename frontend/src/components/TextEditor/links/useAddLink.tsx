import { EditorState, RichUtils } from "draft-js";
import { useContext } from "react";
import { TextEditorContext } from "../hooks/TextEditorContext";

function completeLink(link: string) {
  if (!link.includes("http")) return "http://" + link;
  return link;
}

export const useAddLink = () => {
  const { editorState, setEditorState } = useContext(TextEditorContext);
  return (url: string) => {
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
      setEditorState(
        RichUtils.toggleLink(
          newEditorState,
          newEditorState.getSelection(),
          entityKey
        )
      );
      return true;
    }
    return false;
  };
};
