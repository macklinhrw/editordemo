import { Button, useColorMode, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NoteComponent } from "./NoteComponent";
import { NoteContext } from "./NoteContext";

interface NoteWrapperProps {}
const btnHover = { light: "gray.500", dark: "gray.600" };
const btnColor = { light: "black", dark: "gray.200" };
const btnBg = { light: "gray.300", dark: "gray.700" };
const btnActive = { light: "gray.500", dark: "gray.600" };

export const NoteWrapper: React.FC<NoteWrapperProps> = React.memo(
  (props: any) => {
    const [show, setShow] = useState(false);
    const { colorMode } = useColorMode();
    return (
      <NoteContext.Provider value={{ show, setShow }}>
        {!show ? (
          <Button
            bg={btnBg[colorMode]}
            color={btnColor[colorMode]}
            _hover={{ bg: btnHover[colorMode] }}
            _active={{ bg: btnActive[colorMode] }}
            borderRadius={100}
            size="xs"
            onClick={() => setShow(true)}
          >
            <Text fontSize={11}>{props.children}</Text>
          </Button>
        ) : (
          <>
            <NoteComponent {...props}>{props.children}</NoteComponent>
          </>
        )}
      </NoteContext.Provider>
    );
  }
);
