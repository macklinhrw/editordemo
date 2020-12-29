import { HStack, StackProps } from "@chakra-ui/react";
import { RichUtils } from "draft-js";
import React, { useContext } from "react";
import BLOCK_TYPES from "../constants/BlockStyleConstants";
import { EditorContext } from "../hooks/EditorContext";
import { ToolbarButton, ToolbarButtonProps } from "./ToolbarButton";

export const BlockStyleControls: React.FC<StackProps & ToolbarButtonProps> = ({
  btnActive,
  btnShadow,
  btnHover,
  ...props
}) => {
  const { editorState, setEditorState } = useContext(EditorContext);
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <HStack {...props}>
      {BLOCK_TYPES.map((type, index) => (
        <ToolbarButton
          key={index}
          icon={type.icon}
          label={type.tooltip}
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
          isActive={type.style === blockType}
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(RichUtils.toggleBlockType(editorState, type.style));
          }}
        />
      ))}
    </HStack>
  );
};
