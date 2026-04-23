import { defineField, defineType } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const footerSettingsType = defineType({
  name: "footerSettings",
  title: "Footer Settings",
  type: "document",
  icon: ControlsIcon,
  fields: [
    defineField({
      name: "email",
      type: "email",
      title: "Email",
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      validation: (rule) =>
        rule
          .min(1)
          .max(3)
          .error("You must add at least 1 social link and no more than 3."),
      of: [
        {
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "siteDesignAndDevelopment",
      type: "string",
      title: "Site Design and Development",
      description: "Text to display for site design and development credit",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer Settings",
      };
    },
  },
});
