import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "aboutImage",
      type: "image",
      title: "About Image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "caption",
          type: "string",
        }),
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        }),
      ],
    }),
    defineField({
      name: "aboutSocialLinks",
      title: "About Social Links",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          type: "object",
          title: "Social Link",
          fields: [
            defineField({
              name: "platform",
              type: "string",
              title: "Platform",
            }),
            defineField({
              name: "url",
              type: "url",
              title: "URL",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "designAndDevelopment",
      type: "object",
      title: "Design & Development",
      fields: [
        defineField({
          name: "name",
          type: "string",
          title: "Name",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "Website Url",
        }),
      ],
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
});
