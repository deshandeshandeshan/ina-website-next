import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
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
      name: "defaultDescription",
      title: "Short paragraph for SEO & social sharing (meta description)",
      type: "text",
      rows: 3,
      description:
        "⚡ Optional but highly encouraged as it helps convert more visitors from Google & social. Ideally between 70 and 160 characters.",
      validation: (Rule) =>
        Rule.max(160).warning("Should be under 160 characters."),
    }),
    defineField({
      name: "navSubheading",
      title: "Nav subheading",
      type: "string",
    }),
  ],
});
