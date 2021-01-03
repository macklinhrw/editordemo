import { Box, StackDivider, useColorMode, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { EditorState, Editor, DefaultDraftBlockRenderMap } from "draft-js";
import styleMap from "../TextEditor/constants/styleMap";
import { linkDecorators } from "../TextEditor/decorators";
import { TextEditorContext } from "../TextEditor/hooks/TextEditorContext";
import { useHandleKeyCommand } from "../TextEditor/hooks/useHandleKeyCommand";
import { blockRenderMap } from "../TextEditor/constants/blockRenderMap";
import { blockStyleFn } from "../TextEditor/constants/blockStyleFn";

const readerBg = { light: "white", dark: "gray.900" };
const dividerColor = { light: "gray.400", dark: "gray.600" };
const readerBorder = { light: "gray.600", dark: "gray.400" };

interface TextReaderProps {
  content: Draft.ContentState;
}

const renderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export const TextReader: React.FC<TextReaderProps> = ({ content }) => {
  const { colorMode } = useColorMode();
  const editorRef = useRef<Editor>();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(content, linkDecorators)
  );
  const [handleKeyCommand] = useHandleKeyCommand(editorState, setEditorState);
  const [scrollLock, setScrollLock] = useState(false);

  return (
    <TextEditorContext.Provider
      value={{
        editorState,
        setEditorState,
        editorRef,
        scrollLock,
        setScrollLock,
      }}
    >
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
        <Box
          w="50%"
          border="2px"
          borderColor={readerBorder[colorMode]}
          borderRadius="md"
          bg={readerBg[colorMode]}
          color="black"
          pr={5}
          pl={5}
          pb={5}
          onClick={() => editorRef.current?.focus()}
          id="reader"
        >
          <Editor
            //@ts-ignore
            ref={editorRef}
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            customStyleMap={styleMap}
            blockStyleFn={blockStyleFn}
            // blockRenderMap={renderMap}
            readOnly
          />
        </Box>
      </VStack>
    </TextEditorContext.Provider>
  );
};
