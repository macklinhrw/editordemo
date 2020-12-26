import React from "react";
import { Base } from "../components/Base";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { TextEditor } from "../components/TextEditor/TextEditor";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  return (
    <Base height="100vh">
      <DarkModeSwitch />
      <TextEditor />
    </Base>
  );
};

export default withApollo({ ssr: false })(Index);
