import { Text } from "@chakra-ui/react";
export const TextRenderBlock: React.FC = (props) => {
  return (
    <Text>
      {/* here, this.props.children contains a <section> container, as that was the matching element */}
      {/* {props.children} */}
    </Text>
  );
};
