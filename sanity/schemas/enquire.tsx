import { defineField, defineType } from "sanity";

export const enquireType = defineType({
  name: "enquire",
  title: "Enquire",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "enquireFaq" }],
    }),
  ],
});
