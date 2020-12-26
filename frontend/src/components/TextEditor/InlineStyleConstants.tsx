import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from "react-icons/md";
import { ImSubscript, ImSuperscript } from "react-icons/im";

const INLINE_STYLES = [
  { icon: MdFormatBold, style: "BOLD", tooltip: "Bold" },
  { icon: MdFormatItalic, style: "ITALIC", tooltip: "Italic" },
  { icon: MdFormatUnderlined, style: "UNDERLINE", tooltip: "Underline" },
  { icon: ImSuperscript, style: "SUPER", tooltip: "Superscript" },
  { icon: ImSubscript, style: "SUB", tooltip: "Subscript" },
];

export default INLINE_STYLES;
