import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const headerInformationBlockType = defineType({
  name: "headerInformationBlock",
  title: "Header Information Block",
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
    defineField({
      name: "title",
      title: "Title of Work",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "workDetails",
      title: "Work Details",
      type: "object",
      fields: [
        defineField({
          name: "role",
          title: "Role",
          description: "Role in the project",
          type: "string",
        }),
        defineField({
          name: "location",
          title: "Location",
          description: "Location of the project",
          type: "string",
        }),
        defineField({
          name: "year",
          title: "Year Created",
          type: "string",
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
        subtitle: "Work Information",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
