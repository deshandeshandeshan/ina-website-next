import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const workHeaderMediaType = defineType({
  name: "workHeaderMedia",
  title: "Work Header Media",
  type: "object",
  fields: [
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
        subtitle: "Work Header Meadia",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
