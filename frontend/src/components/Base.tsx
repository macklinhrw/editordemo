import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

export const Base = (props: FlexProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      {...props}
    />
  );
};
