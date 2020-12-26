import Draft from "draft-js";

// Due to non-matching block keys with NextJS: https://github.com/facebook/draft-js/issues/1199#issuecomment-331677160
export const emptyContentState = Draft.convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },
  ],
});
