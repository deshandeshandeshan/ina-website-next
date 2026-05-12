import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const fullBleedTextType = defineType({
  name: "fullBleedText",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "text",
      type: "text",
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Full Bleed Text",
        media: TextIcon,
      };
    },
  },
});
