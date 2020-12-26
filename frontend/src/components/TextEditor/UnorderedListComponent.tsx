import { Button } from "@chakra-ui/react";
import { ContentBlock, ContentState } from "draft-js";
import React from "react";

interface UnorderedListComponentProps {
  block: ContentBlock;
  contentState: ContentState;
}

export const UnorderedListComponent: React.FC<UnorderedListComponentProps> = (
  props
) => {
  const { block, contentState } = props;
  //@ts-ignore
  // const { foo } = props.blockProps;
  // const data = contentState.getEntity(block.getEntityAt(0)).getData();
  // const data = contentState;
  // console.log(block.getText());
  return (
    <ul>
      <li>{block.getText()}</li>
    </ul>
  );
};
