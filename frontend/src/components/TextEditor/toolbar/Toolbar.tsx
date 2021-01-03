import { HStack, StackProps, SystemProps } from "@chakra-ui/react";
import React from "react";
import { IoUnlink } from "react-icons/io5";
import { ToolbarButton } from "./ToolbarButton";
import { AddLinkButton } from "../links/AddLinkButton";
import { InlineStyleControls } from "./InlineStyleControls";
import { BlockStyleControls } from "./BlockStyleControls";
import { useRemoveLink } from "../links/useRemoveLink";
import { AddNoteButton } from "../notes/AddNoteButton";

interface ChildProps {
  buttonSpacing: SystemProps["margin"];
}
interface ToolbarProps {
  btnShadow: { light: string; dark: string };
  btnActive: { light: string; dark: string };
  btnHover: { light: string; dark: string };
}

type ToolbarCombinedProps = ToolbarProps & StackProps & ChildProps;

export const Toolbar: React.FC<ToolbarCombinedProps> = ({
  buttonSpacing,
  btnShadow,
  btnActive,
  btnHover,
  ...props
}) => {
  // const logState = () => {
  //   const content = editorState.getCurrentContent();
  //   console.log(convertToRaw(content));
  // };
  const removeLink = useRemoveLink();
  return (
    <HStack {...props}>
      <InlineStyleControls
        spacing={buttonSpacing}
        btnActive={btnActive}
        btnHover={btnHover}
        btnShadow={btnShadow}
      />
      <BlockStyleControls
        spacing={buttonSpacing}
        btnActive={btnActive}
        btnHover={btnHover}
        btnShadow={btnShadow}
      />
      <HStack spacing={buttonSpacing}>
        <AddLinkButton
          btnActive={btnActive}
          btnHover={btnHover}
          btnShadow={btnShadow}
        />
        <ToolbarButton
          icon={IoUnlink}
          label="Remove Link"
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
          onMouseDown={removeLink}
        />
        <AddNoteButton
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
        />
        {/* <ToolbarButton
          icon={CgInsertAfterO}
          label="Add Note"
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
          onMouseDown={(e) => {
            e.preventDefault();
            insertNote("This is inside the note");
          }}
        /> */}
      </HStack>
    </HStack>
  );
};
