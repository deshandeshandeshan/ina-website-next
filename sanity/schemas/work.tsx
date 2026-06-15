import { defineField, defineType } from "sanity";

const photographyInsertMenu = {
  insertMenu: {
    filter: true,
    groups: [
      {
        name: "photography",
        title: "Photography",
        of: [
          "doubleLandscape",
          "doublePortrait",
          "largeImageLeft",
          "largeImageRight",
          "singleLandscape",
          "singlePortrait",
        ],
      },
    ],
  },
};

const categoryField = (name: string, defaultName: string) =>
  defineField({
    name,
    title: defaultName,
    type: "object",
    fields: [
      defineField({
        name: "categoryName",
        title: "Category Name",
        type: "string",
        initialValue: defaultName,
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "content",
        title: "Content",
        type: "pageBuilder",
        options: photographyInsertMenu,
      }),
    ],
  });

export const workType = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    categoryField("tattoo", "Tattoo"),
    categoryField("illustration", "Illustration"),
    categoryField("painting", "Painting"),
  ],
  preview: {
    select: { title: "title" },
  },
});
