import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    {
      name: "content",
      type: "pageBuilder",
      options: {
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "home",
              title: "Home",
              of: ["aboutBlock", "featuredContent", "headerMedia"],
            },
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
                "longImageRight",
              ],
            },
            {
              name: "work",
              title: "Selected Work",
              of: [
                "creditsAndAwards",
                "imageCarousel",
                "headerInformationBlock",
                "workHeaderMedia",
                "workLandscapeMedia",
              ],
            },
            {
              name: "event",
              title: "Event",
              of: ["eventBlock"],
            },
            {
              name: "press",
              title: "Press",
              of: ["pressBlock"],
            },
          ],
        },
      },
    },
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
            Rule.required()
              .min(15)
              .max(70)
              .warning("Should be between 15–70 characters."),
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
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
