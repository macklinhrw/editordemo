import { Box, StackDivider, useColorMode, VStack } from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { DefaultDraftBlockRenderMap, Editor } from "draft-js";
import { Toolbar } from "./toolbar/Toolbar";
import styleMap from "./constants/styleMap";
import { TextEditorContext } from "./hooks/TextEditorContext";
import { useHandleKeyCommand } from "./hooks/useHandleKeyCommand";
import { EditorStateContext } from "../EditorPage/hooks/EditorStateContext";
import { blockRenderMap } from "./constants/blockRenderMap";
import { blockStyleFn } from "./constants/blockStyleFn";

const editorBg = { light: "white", dark: "gray.400" };
const dividerColor = { light: "gray.400", dark: "gray.600" };
const editorBorder = { light: "gray.600", dark: "gray.200" };
const btnHover = { light: "blue.100", dark: "gray.400" };
const btnActive = { light: "blue.200", dark: "gray.500" };
const btnShadow = { light: "-1px 1px 1px 1px rgba(0, 0, 0, 0.2)", dark: "" };

const renderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export const TextEditor: React.FC = () => {
  const { colorMode } = useColorMode();
  const editorRef = useRef<Editor>();
  const { editorState, setEditorState } = useContext(EditorStateContext);
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
        <Toolbar
          buttonSpacing={1}
          spacing={3}
          width="60%"
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
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
          overflowY={scrollLock ? "hidden" : "auto"}
          pr={scrollLock ? "1vh" : 0}
          id="editor"
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
          />
        </Box>
      </VStack>
    </TextEditorContext.Provider>
  );
};
