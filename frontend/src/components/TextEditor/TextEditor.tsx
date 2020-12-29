import { Box, StackDivider, useColorMode, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { EditorState, Editor } from "draft-js";
import { emptyContentState } from "./constants/emptyContentState";
import { Toolbar } from "./toolbar/Toolbar";
import styleMap from "./constants/styleMap";
import { EditorContext } from "./hooks/EditorContext";
import { linkDecorators } from "./links/linkDecorators";
import { useHandleKeyCommand } from "./hooks/useHandleKeyCommand";

const editorBg = { light: "white", dark: "gray.400" };
const dividerColor = { light: "gray.400", dark: "gray.600" };
const editorBorder = { light: "gray.600", dark: "gray.200" };

export const TextEditor: React.FC = () => {
  const { colorMode } = useColorMode();
  const editorRef = useRef<Editor>();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(emptyContentState, linkDecorators)
  );
  const [handleKeyCommand] = useHandleKeyCommand(editorState, setEditorState);

  return (
    <EditorContext.Provider value={{ editorState, setEditorState, editorRef }}>
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
        <Toolbar buttonSpacing={1} spacing={3} width="60%" />
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
            handleKeyCommand={handleKeyCommand}
            customStyleMap={styleMap}
          />
        </Box>
      </VStack>
    </EditorContext.Provider>
  );
};
