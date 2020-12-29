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
  Switch,
  HStack,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { IoLink } from "react-icons/io5";
import { EditorContext } from "../hooks/EditorContext";
import { useAddLink } from "./useAddLink";
import { ToolbarButton } from "../toolbar/ToolbarButton";
import { useInsertLink } from "./useInsertLink";
import { useAddLinkModal } from "./useAddLinkModal";

interface AddLinkButtonProps {
  btnShadow: { light: string; dark: string };
  btnActive: { light: string; dark: string };
  btnHover: { light: string; dark: string };
}

export const AddLinkButton: React.FC<ButtonProps & AddLinkButtonProps> = ({
  btnActive,
  btnShadow,
  btnHover,
  ...props
}) => {
  const { editorState, editorRef } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useAddLinkModal();
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [isUrl, setIsUrl] = useState(true);
  const handleTextIsUrlChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsUrl(event.target.checked);
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(event.target.value);
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  const addLink = useAddLink();
  const insertLink = useInsertLink();
  const selection = editorState.getSelection();
  const start = selection.getStartOffset();
  const end = selection.getEndOffset();
  const isInsertLink = end === start;
  const initRef = useRef();

  return (
    <>
      <ToolbarButton
        icon={IoLink}
        label="Add Link"
        btnActive={btnActive}
        btnShadow={btnShadow}
        btnHover={btnHover}
        onMouseDown={() => {
          setUrl("");
          setText("");
          setIsUrl(true);
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
        returnFocusOnClose={true}
      >
        <ModalContent>
          <ModalHeader>{isInsertLink ? "Insert Link" : "Add Link"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter a url..."
              value={url}
              onChange={handleUrlChange}
              //@ts-ignore
              ref={initRef}
            />
            {isInsertLink ? (
              <>
                <HStack spacing={4} mt={2}>
                  <Switch
                    onChange={handleTextIsUrlChange}
                    defaultIsChecked={true}
                  />
                  <Text fontSize="sm">Text is same as url</Text>
                </HStack>
                <Input
                  mt={3}
                  placeholder="Enter some text..."
                  value={text}
                  onChange={handleTextChange}
                  isDisabled={isUrl}
                />
              </>
            ) : (
              ""
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                if (!isInsertLink) {
                  onClose();
                  addLink(url);
                } else {
                  onClose();
                  insertLink(url, isUrl ? url : text);
                }
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
