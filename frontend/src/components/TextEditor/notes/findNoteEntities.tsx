import { ContentBlock, ContentState, CharacterMetadata } from "draft-js";

const findNoteEntities = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) => {
  contentBlock.findEntityRanges((character: CharacterMetadata) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "NOTE"
    );
  }, callback);
};
export { findNoteEntities };
