import { Box, StackDivider, useColorMode, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { ContentBlock, EditorState, Editor } from "draft-js";
import { handleKeyCommand } from "./handleKeyCommand";
import { emptyContentState } from "./emptyContentState";
import { Toolbar } from "./Toolbar";
import styleMap from "./styleMap";
import { NoteComponent } from "./NoteComponent";
// import { UnorderedListComponent } from "./UnorderedListComponent";
// import Editor from "draft-js-plugins-editor";

const blockRenderer: any = (block: ContentBlock) => {
  const type = block.getType();
  if (type === "note-item") {
    return {
      component: NoteComponent,
      editable: false,
      // props: {
      //   foo: "bar",
      // },
    };
  }
};

const getBlockStyle = (block: ContentBlock) => {
  const type = block.getType();
  return type;
};

interface EditorProps {}

export const TextEditor: React.FC<EditorProps> = ({}) => {
  const { colorMode } = useColorMode();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(emptyContentState)
  );
  const editorRef = useRef<Editor>();

  const editorBg = { light: "white", dark: "gray.400" };
  const dividerColor = { light: "gray.400", dark: "gray.600" };
  const editorBorder = { light: "gray.600", dark: "gray.200" };

  return (
    <VStack
      mt={20}
      w="100%"
      align="center"
      spacing={4}
      divider={
        <StackDivider
          marginLeft="auto !important"
          marginRight="auto !important"
          width="95%"
          borderColor={dividerColor[colorMode]}
        />
      }
    >
      <Toolbar
        buttonSpacing={1}
        width="60%"
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <Box
        w="60%"
        border="2px"
        borderColor={editorBorder[colorMode]}
        borderRadius="md"
        bg={editorBg[colorMode]}
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
          blockStyleFn={getBlockStyle}
          blockRendererFn={blockRenderer}
          customStyleMap={styleMap}
        />
      </Box>
    </VStack>
  );
};
