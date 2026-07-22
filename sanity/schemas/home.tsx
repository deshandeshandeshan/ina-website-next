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
    defineField({
      name: "heroImage",
      title: "Hero Image",
      description:
        "Image displayed centered behind the hero logo at the top of the home page.",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        }),
      ],
    }),
    {
      name: "content",
      type: "pageBuilder",
      options: {
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
                "longImageRight",
              ],
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
      media: "heroImage",
    },
  },
});
