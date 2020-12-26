import {
  MdFormatBold,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
} from "react-icons/md";
import { FaHeading } from "react-icons/fa";

const BLOCK_TYPES = [
  { icon: FaHeading, style: "header-one", tooltip: "Heading" },
  { icon: MdFormatQuote, style: "blockquote", tooltip: "Block Quote" },
  {
    icon: MdFormatListBulleted,
    style: "unordered-list-item",
    tooltip: "Bulleted List",
  },
  {
    icon: MdFormatListNumbered,
    style: "ordered-list-item",
    tooltip: "Numbered List",
  },
  { icon: MdFormatBold, style: "note-item", tooltip: "Note Item" },
];

export default BLOCK_TYPES;
