import { Button } from "@chakra-ui/react";
import { ContentBlock, ContentState } from "draft-js";
import React from "react";

interface NoteComponentProps {
  block: ContentBlock;
  contentState: ContentState;
}

export const NoteComponent: React.FC<NoteComponentProps> = (props) => {
  const { block, contentState } = props;
  //@ts-ignore
  // const { foo } = props.blockProps;
  // const data = contentState.getEntity(block.getEntityAt(0)).getData();
  // const data = contentState;
  // console.log(block.getText());
  return (
    <>
      <Button ml={2} onClick={() => console.log(block.getText())}>
        {block.getText()}
      </Button>
    </>
  );
};
