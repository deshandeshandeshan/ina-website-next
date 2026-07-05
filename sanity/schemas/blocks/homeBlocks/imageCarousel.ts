import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const imageCarouselType = defineType({
  name: "imageCarousel",
  title: "Image Carousel",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        defineField({
          name: "carouselImage",
          title: "Carousel Image",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
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
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Image Carousel",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
