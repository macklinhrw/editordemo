import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme";
import { AppProps } from "next/app";

import "../styles/Editor.css";
import "../styles/DraftModified.css";
import "../styles/ScrollBar.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
