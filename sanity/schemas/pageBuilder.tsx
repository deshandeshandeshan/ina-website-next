import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "aboutBlock" }),
    defineArrayMember({ type: "featuredContent" }),
    defineArrayMember({ type: "headerMedia" }),
    defineArrayMember({ type: "doubleLandscape" }),
    defineArrayMember({ type: "doublePortrait" }),
    defineArrayMember({ type: "largeImageLeft" }),
    defineArrayMember({ type: "largeImageRight" }),
    defineArrayMember({ type: "singleLandscape" }),
    defineArrayMember({ type: "singlePortrait" }),
    defineArrayMember({ type: "creditsAndAwards" }),
    defineArrayMember({ type: "imageCarousel" }),
    defineArrayMember({ type: "headerInformationBlock" }),
    defineArrayMember({ type: "workHeaderMedia" }),
    defineArrayMember({ type: "workLandscapeMedia" }),
    defineArrayMember({ type: "eventBlock" }),
    defineArrayMember({ type: "pressBlock" }),
  ],
});
