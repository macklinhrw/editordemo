import { StyleConfig } from "@chakra-ui/theme-tools";
import { timeStamp } from "console";

export const Editor: StyleConfig = {
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {
    sm: {
      minWidth: 640,
    },
    md: {
      minWidth: 1280,
    },
  },
};
