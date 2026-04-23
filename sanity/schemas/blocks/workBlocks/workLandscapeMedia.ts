import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const workLandscapeMediaType = defineType({
  name: "workLandscapeMedia",
  title: "Work Landscape Media",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
    defineField({
      title: "Video file",
      name: "video",
      type: "mux.video",
    }),
    defineField({
      name: "image",
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
        subtitle: "Work Landscape Meadia",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
