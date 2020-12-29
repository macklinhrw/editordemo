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
} from "@chakra-ui/react";
import React from "react";

export const LinkComponenet: React.FC = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Link
            href={url}
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
