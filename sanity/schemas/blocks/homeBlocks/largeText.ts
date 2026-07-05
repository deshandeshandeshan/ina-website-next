import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const largeTextType = defineType({
  name: "largeText",
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
        subtitle: "Large Text",
        media: TextIcon,
      };
    },
  },
});
