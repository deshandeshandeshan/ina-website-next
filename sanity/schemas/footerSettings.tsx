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
      name: "siteDesignAndDevelopment",
      type: "object",
      title: "Site Design and Development",
      description:
        "Credit displayed in the footer, linking to the published URL.",
      fields: [
        defineField({
          name: "name",
          type: "string",
          title: "Name",
        }),
        defineField({
          name: "url",
          type: "url",
          title: "URL",
        }),
      ],
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
