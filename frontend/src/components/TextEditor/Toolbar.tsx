import {
  ColorMode,
  HStack,
  Icon,
  IconButton,
  StackProps,
  SystemProps,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { EditorState, RichUtils } from "draft-js";
import React from "react";
import BLOCK_TYPES from "./BlockStyleConstants";
import INLINE_STYLES from "./InlineStyleConstants";

const btnHover = { light: "blue.100", dark: "gray.400" };
const btnActive = { light: "blue.200", dark: "gray.500" };
const btnShadow = { light: "-1px 1px 1px 1px rgba(0, 0, 0, 0.2)", dark: "" };

const InlineStyleControls = (
  props: StackProps & DraftContext & { colorMode: ColorMode }
) => {
  const { editorState, setEditorState, colorMode } = props;
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <HStack {...props}>
      {INLINE_STYLES.map((type, index) => (
        <Tooltip hasArrow label={type.tooltip} key={index}>
          <IconButton
            key={index}
            aria-label={type.tooltip}
            isActive={currentStyle.has(type.style)}
            icon={<Icon boxSize={5} as={type.icon}></Icon>}
            boxShadow={btnShadow[colorMode]}
            _active={{
              bg: btnActive[colorMode],
              transform: "scale(0.98)",
            }}
            _hover={{
              bg: btnHover[colorMode],
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              setEditorState(
                RichUtils.toggleInlineStyle(editorState, type.style)
              );
            }}
          />
        </Tooltip>
      ))}
    </HStack>
  );
};

const BlockStyleControls = (
  props: StackProps & DraftContext & { colorMode: ColorMode }
) => {
  const { editorState, setEditorState, colorMode } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <HStack {...props}>
      {BLOCK_TYPES.map((type, index) => (
        <Tooltip hasArrow label={type.tooltip} key={index}>
          <IconButton
            key={index}
            aria-label={type.tooltip}
            isActive={type.style === blockType}
            icon={<Icon boxSize={5} as={type.icon}></Icon>}
            boxShadow={btnShadow[colorMode]}
            _active={{
              bg: btnActive[colorMode],
              transform: "scale(0.98)",
            }}
            _hover={{
              bg: btnHover[colorMode],
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              setEditorState(
                RichUtils.toggleBlockType(editorState, type.style)
              );
            }}
          />
        </Tooltip>
      ))}
    </HStack>
  );
};

interface DraftContext {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

interface ChildProps {
  buttonSpacing: SystemProps["margin"];
}

type ToolbarProps = StackProps & DraftContext & ChildProps;

export const Toolbar: React.FC<ToolbarProps> = ({
  buttonSpacing,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <HStack {...props}>
      <InlineStyleControls
        spacing={buttonSpacing}
        editorState={props.editorState}
        setEditorState={props.setEditorState}
        colorMode={colorMode}
      />
      <BlockStyleControls
        spacing={buttonSpacing}
        editorState={props.editorState}
        setEditorState={props.setEditorState}
        colorMode={colorMode}
      />
    </HStack>
  );
};
