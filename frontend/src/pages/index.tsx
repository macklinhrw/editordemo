import { Flex, Button } from "@chakra-ui/react";
import { EditorState } from "draft-js";
import React, { useState } from "react";
import { Base } from "../components/Base";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  return (
    <Base height="100vh">
      <DarkModeSwitch />
    </Base>
  );
};

export default withApollo({ ssr: false })(Index);
