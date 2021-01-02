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
      >
        <ModalContent>
          <ModalHeader>{isInsertLink ? "Insert Link" : "Add Link"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm">Link</Text>
            <Input
              placeholder="Enter a link..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              //@ts-ignore
              ref={initRef}
            />
            {isInsertLink ? (
              <>
                <Text mt={2} fontSize="sm">
                  Text
                </Text>
                <Input
                  placeholder="Enter some text..."
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  isDisabled={isUrl}
                />
                <HStack spacing={4} mt={4}>
                  <Switch
                    onChange={(e) => {
                      setIsUrl(e.target.checked);
                    }}
                    defaultIsChecked={true}
                  />
                  <Text fontSize="sm">Text is same as url</Text>
                </HStack>
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
