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
  ],
});
