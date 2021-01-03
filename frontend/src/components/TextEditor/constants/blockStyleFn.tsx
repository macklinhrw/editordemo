import { ContentBlock } from "draft-js";

export const blockStyleFn = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
  if (type === "unstyled") {
    return "paragraph";
  }
  return type;
};
