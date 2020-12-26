import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex as="footer" bottom="1em" pos="fixed" {...props} />
);
