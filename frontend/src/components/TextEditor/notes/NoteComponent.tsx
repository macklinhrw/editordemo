import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useColorMode,
  Text,
  useDisclosure,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { EditorContext } from "../hooks/EditorContext";
import { NoteContext } from "./NoteContext";

interface NoteComponentProps {}
const btnHover = { light: "gray.500", dark: "gray.800" };
const btnColor = { light: "black", dark: "gray.200" };
const btnActive = { light: "gray.500", dark: "gray.800" };
const btnBg = { light: "gray.500", dark: "gray.800" };

export const NoteComponent: React.FC<NoteComponentProps> = React.memo(
  (props: any) => {
    const { text, label } = props.contentState
      .getEntity(props.entityKey)
      .getData();
    const { colorMode } = useColorMode();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const { setShow } = useContext(NoteContext);
    const { setScrollLock } = useContext(EditorContext);
    useEffect(() => {
      onOpen();
      setScrollLock(true);
    });
    return (
      <>
        <Popover
          onOpen={() => {
            onOpen();
          }}
          onClose={() => {
            onClose();
            setShow(false);
            setScrollLock(false);
          }}
          isOpen={isOpen}
          id={label}
        >
          <PopoverTrigger>
            <Button
              bg={btnBg[colorMode]}
              color={btnColor[colorMode]}
              _hover={{ bg: btnHover[colorMode] }}
              _active={{ bg: btnActive[colorMode] }}
              borderRadius={100}
              size="xs"
            >
              <Text fontSize={11}>{props.children}</Text>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>{label}</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Text style={{ whiteSpace: "pre-wrap" }}>{text}</Text>
                <Flex>
                  <Button
                    ml="auto"
                    colorScheme="red"
                    onClick={() => {
                      onClose();
                      setShow(false);
                      setScrollLock(false);
                    }}
                  >
                    Close
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </>
    );
  }
);
