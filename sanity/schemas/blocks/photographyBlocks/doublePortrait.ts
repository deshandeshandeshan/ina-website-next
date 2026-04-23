import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const doublePortraitType = defineType({
  name: "doublePortrait",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "leftImage",
      type: "image",
      options: {
        hotspot: true,
      },
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
      name: "rightImage",
      type: "image",
      options: {
        hotspot: true,
      },
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
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Double Portrait",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
