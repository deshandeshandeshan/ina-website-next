import { defineField, defineType } from "sanity";

export const paintingType = defineType({
  name: "painting",
  title: "Paintings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "yearCreated",
      title: "Year Created",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "paintingImage",
      type: "image",
      title: "Painting Image",
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
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        defineField({
          name: "galleryImage",
          title: "Gallery Image",
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Image",
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
          ],
        }),
      ],
    }),
  ],
});
