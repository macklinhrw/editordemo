import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "lg",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
        bg: props.colorMode === "dark" ? "gray.800" : "gray.200",
      },
      h1: {
        fontSize: "2.5rem",
        fontWeight: "semibold",
      },
      blockquote: {
        borderLeft: "10px solid",
        borderColor: props.colorMode === "dark" ? "gray.700" : "gray.400",
        margin: "0 0 0 0",
        padding: "0.5em 10px",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
      "#reader": {
        color: props.colorMode === "dark" ? "gray.300" : "black",
      },
      ".paragraph": {
        margin: "0.8em 0",
        lineHeight: "1.8",
      },
    }),
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
