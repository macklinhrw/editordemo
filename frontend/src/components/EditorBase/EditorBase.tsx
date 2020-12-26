import { Box, HStack, Icon, IconButton } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { handleKeyCommand } from "./handleKeyCommand";
import { emptyContentState } from "./emptyContentState";
import { MdFormatBold } from "react-icons/md";

interface EditorProps {}

export const TextEditor: React.FC<EditorProps> = ({}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(emptyContentState)
  );
  const editorRef = useRef<Editor>();

  function onBoldClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }

  return (
    <Box mt={20} w="60%">
      <HStack spacing={1} mb={1}>
        <IconButton
          aria-label="Bold"
          onMouseDown={onBoldClick}
          isActive={editorState.getCurrentInlineStyle().has("BOLD")}
          icon={<Icon boxSize={5} as={MdFormatBold} />}
          _active={{
            bg: "gray.500",
            transform: "scale(0.98)",
          }}
        />
      </HStack>
      <Box
        border="2px"
        borderColor="gray.700"
        borderRadius="md"
        bg="gray.400"
        color="black"
        pl={2}
        onClick={() => editorRef.current?.focus()}
      >
        <Editor
          //@ts-ignore
          ref={editorRef}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={(command) =>
            handleKeyCommand(command, editorState, setEditorState)
          }
        />
      </Box>
    </Box>
  );
};
