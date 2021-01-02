import { CompositeDecorator } from "draft-js";
import { findLinkEntities } from "./links/findLinkEntities";
import { LinkWrapper } from "./links/LinkWrapper";
import { findNoteEntities } from "./notes/findNoteEntities";
import { NoteWrapper } from "./notes/NoteWrapper";

export const linkDecorators = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: LinkWrapper,
  },
  {
    strategy: findNoteEntities,
    component: NoteWrapper,
  },
]);
