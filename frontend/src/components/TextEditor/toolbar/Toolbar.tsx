import { HStack, StackProps, SystemProps } from "@chakra-ui/react";
import React from "react";
// import { CgInsertAfterO } from "react-icons/cg";
import { IoUnlink } from "react-icons/io5";
import { ToolbarButton } from "./ToolbarButton";
import { AddLinkButton } from "../links/AddLinkButton";
import { InlineStyleControls } from "./InlineStyleControls";
import { BlockStyleControls } from "./BlockStyleControls";
import { useRemoveLink } from "../links/useRemoveLink";

const btnHover = { light: "blue.100", dark: "gray.400" };
const btnActive = { light: "blue.200", dark: "gray.500" };
const btnShadow = { light: "-1px 1px 1px 1px rgba(0, 0, 0, 0.2)", dark: "" };

interface ChildProps {
  buttonSpacing: SystemProps["margin"];
}

type ToolbarProps = StackProps & ChildProps;

export const Toolbar: React.FC<ToolbarProps> = ({
  buttonSpacing,
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
        {/* <ToolbarButton
          icon={CgInsertAfterO}
          label="Add Note"
          btnActive={btnActive}
          btnShadow={btnShadow}
          btnHover={btnHover}
          onMouseDown={removeLink}
        /> */}
      </HStack>
    </HStack>
  );
};
