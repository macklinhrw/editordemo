import React from "react";
import { EditorStateContext } from "../components/EditorPage/hooks/EditorStateContext";
import { useState } from "react";
import { EditorState } from "draft-js";
import { linkDecorators } from "../components/TextEditor/decorators";
import { withApollo } from "../utils/withApollo";
import { emptyContentState } from "../components/TextEditor/constants/emptyContentState";
import { TextEditor } from "../components/TextEditor/TextEditor";
import { Button, Flex } from "@chakra-ui/react";
import { TextReader } from "../components/TextReader/TextReader";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Base } from "../components/Base";

const editor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(emptyContentState, linkDecorators)
  );
  const [reader, setReader] = useState(false);
  return (
    <Base height="100vh">
      <EditorStateContext.Provider value={{ editorState, setEditorState }}>
        <DarkModeSwitch />
        {!reader ? (
          <>
            <TextEditor />
            <Flex width="60%" ml="auto" mr="auto" mt={2} mb={10}>
              <Button ml="auto" onClick={() => setReader(!reader)}>
                Preview
              </Button>
            </Flex>
          </>
        ) : (
          <>
            <Button
              pos="fixed"
              left="3rem"
              top="1rem"
              onClick={() => setReader(!reader)}
            >
              Back
            </Button>
            <TextReader content={editorState.getCurrentContent()} />
          </>
        )}
      </EditorStateContext.Provider>
    </Base>
  );
};

export default withApollo({ ssr: false })(editor);
