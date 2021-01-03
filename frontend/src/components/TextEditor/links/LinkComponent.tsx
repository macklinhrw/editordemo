import {
  Button,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { TextEditorContext } from "../hooks/TextEditorContext";
import { LinkContext } from "./LinkContext";

export const LinkComponent: React.FC = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { setScrollLock } = useContext(TextEditorContext);
  const { setShow } = useContext(LinkContext);
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
      >
        <PopoverTrigger>
          <Link
            color="blue.600"
            _hover={{
              color: "blue.500",
              textDecoration: "underline",
            }}
          >
            {props.children}
          </Link>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              This will take you to: <Text color="blue.500">{url}</Text>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody ml="auto">
              <Link href={url} _hover={{}} isExternal>
                <Button colorScheme="blue">Go to url</Button>
              </Link>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};
