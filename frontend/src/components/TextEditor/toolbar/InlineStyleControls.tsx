import { HStack, StackProps } from "@chakra-ui/react";
import { RichUtils } from "draft-js";
import React, { useContext } from "react";
import INLINE_STYLES from "../constants/InlineStyleConstants";
import { TextEditorContext } from "../hooks/TextEditorContext";
import { ToolbarButton, ToolbarButtonProps } from "./ToolbarButton";

export const InlineStyleControls: React.FC<StackProps & ToolbarButtonProps> = ({
  btnActive,
  btnShadow,
  btnHover,
  ...props
}) => {
  const { editorState, setEditorState } = useContext(TextEditorContext);
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <HStack {...props}>
      {INLINE_STYLES.map((type, index) => (
        <ToolbarButton
          key={index}
          icon={type.icon}
          label={type.tooltip}
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
          isActive={currentStyle.has(type.style)}
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleInlineStyle(editorState, type.style)
            );
          }}
        />
      ))}
    </HStack>
  );
};
