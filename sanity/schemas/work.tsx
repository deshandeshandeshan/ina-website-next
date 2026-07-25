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

export const workCategoryType = defineType({
  name: "workCategory",
  title: "Category",
  type: "object",
  fields: [
    defineField({
      name: "categoryName",
      title: "Category Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "pageBuilder",
      options: photographyInsertMenu,
    }),
  ],
  preview: {
    select: { title: "categoryName" },
  },
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
    defineField({
      name: "categories",
      title: "Categories",
      description: "The tabs shown on the Work page, in order.",
      type: "array",
      of: [{ type: "workCategory" }],
      validation: (rule) => rule.min(1).required(),
    }),
    defineField({
      name: "seo",
      title: "SEO & Social",
      type: "object",
      fieldset: "seo",
      fields: [
        defineField({
          name: "title",
          title: "Title for SEO & social sharing",
          type: "string",
          description:
            "Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.",
          validation: (Rule) =>
            Rule.min(15).max(70).warning("Should be between 15–70 characters."),
        }),
        defineField({
          name: "description",
          title: "Short paragraph for SEO & social sharing (meta description)",
          type: "text",
          rows: 3,
          description:
            "⚡ Optional but highly encouraged as it helps convert more visitors from Google & social. Ideally between 70 and 160 characters.",
          validation: (Rule) =>
            Rule.max(160).warning("Should be under 160 characters."),
        }),
      ],
    }),
  ],
  fieldsets: [
    {
      name: "seo",
      title: "SEO & social",
      options: { collapsible: true, collapsed: false },
    },
  ],
  preview: {
    select: { title: "title" },
  },
});
