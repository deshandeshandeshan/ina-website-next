import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const creditsAndAwardsType = defineType({
  name: "creditsAndAwards",
  title: "Credits and Awards",
  type: "object",
  fields: [
    defineField({
      name: "credits",
      type: "array",
      title: "Credits",
      validation: (rule) =>
        rule.max(30).error("You must add no more than 30 credits."),
      of: [
        {
          type: "object",
          name: "credit",
          title: "Credit",
          fields: [
            defineField({
              name: "roleInWork",
              type: "string",
              title: "Role in Work",
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Name",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "awards",
      type: "array",
      title: "Awards",
      validation: (rule) =>
        rule.max(10).error("You must add no more than 10 awards."),
      of: [
        {
          type: "object",
          name: "award",
          title: "Award",
          fields: [
            defineField({
              name: "awardName",
              type: "string",
              title: "Award Name",
            }),
            defineField({
              name: "awardedFrom",
              type: "string",
              title: "Awarded From",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "exhibitions",
      type: "array",
      title: "Exhibitions",
      validation: (rule) =>
        rule.max(10).error("You must add no more than 10 exhibitions."),
      of: [
        {
          type: "object",
          name: "exhibition",
          title: "Exhibition",
          fields: [
            defineField({
              name: "exhibitionName",
              type: "string",
              title: "Exhibition Name",
            }),
            defineField({
              name: "exhibitedAt",
              type: "string",
              title: "Exhibited At",
            }),
          ],
        },
      ],
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
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Credits and Awards",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
