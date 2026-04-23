import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const headerMediaType = defineType({
  name: "headerMedia",
  title: "Header Media",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      title: "Video file",
      name: "video",
      type: "mux.video",
    }),
    defineField({
      title: "Video Caption",
      name: "videoCaption",
      type: "string",
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
        subtitle: "Header Meadia",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
