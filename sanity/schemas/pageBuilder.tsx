import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "doubleLandscape" }),
    defineArrayMember({ type: "doublePortrait" }),
    defineArrayMember({ type: "largeImageLeft" }),
    defineArrayMember({ type: "largeImageRight" }),
    defineArrayMember({ type: "singleLandscape" }),
    defineArrayMember({ type: "singlePortrait" }),
    defineArrayMember({ type: "fullBleedText" }),
    defineArrayMember({ type: "enquireFaq" }),
  ],
});
