import {
  ContentBlock,
  ContentState,
  CharacterMetadata,
  CompositeDecorator,
} from "draft-js";
import { LinkComponenet } from "./LinkComponent";

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) {
  contentBlock.findEntityRanges((character: CharacterMetadata) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

export const linkDecorators = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: LinkComponenet,
  },
]);
