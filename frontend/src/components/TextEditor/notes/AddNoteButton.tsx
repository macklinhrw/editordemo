import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  ButtonProps,
  Text,
  Textarea,
  VStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { CgInsertAfterO } from "react-icons/cg";
import { TextEditorContext } from "../hooks/TextEditorContext";
import { useAddLinkModal } from "../links/useAddLinkModal";
import { ToolbarButton } from "../toolbar/ToolbarButton";
import { useInsertNote } from "./useInsertNote";

interface AddLinkButtonProps {
  btnShadow: { light: string; dark: string };
  btnActive: { light: string; dark: string };
  btnHover: { light: string; dark: string };
}

export const AddNoteButton: React.FC<ButtonProps & AddLinkButtonProps> = ({
  btnActive,
  btnShadow,
  btnHover,
  ...props
}) => {
  const { editorState, editorRef } = useContext(TextEditorContext);
  const { isOpen, onOpen, onClose } = useAddLinkModal();
  const [text, setText] = useState("");
  const [label, setLabel] = useState("1");
  // const selection = editorState.getSelection();
  // const start = selection.getStartOffset();
  // const end = selection.getEndOffset();
  // const isInsertLink = end === start;
  const insertNote = useInsertNote();
  const initRef = useRef();

  return (
    <>
      <ToolbarButton
        icon={CgInsertAfterO}
        label="Add Note"
        btnActive={btnActive}
        btnShadow={btnShadow}
        btnHover={btnHover}
        onMouseDown={() => {
          setText("");
          onOpen();
        }}
        {...props}
      />

      <Modal
        finalFocusRef={editorRef}
        //@ts-ignore
        initialFocusRef={initRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader>Insert Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start">
              <Text fontSize="sm">Label</Text>
              {/* <Input
                placeholder="Enter your note here..."
                value={label}
                onChange={(e) => {
                  setLabel(e.target.value);
                }}
                //@ts-ignore
                ref={initRef}
              /> */}
              <NumberInput
                onChange={(valueString) => {
                  setLabel(valueString);
                }}
                value={label}
                min={1}
                max={100}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text fontSize="sm">Text</Text>
              <Textarea
                placeholder="Enter your note here..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                //@ts-ignore
                ref={initRef}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                insertNote(text, label);
              }}
            >
              Save
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
