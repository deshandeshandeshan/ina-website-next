import { defineField, defineType } from "sanity";

export const bookFaq = defineType({
  name: "bookFaq",
  title: "Book FAQ",
  type: "object",
  fields: [
    defineField({
      name: "faqTitle",
      title: "Faq Title",
      type: "string",
    }),
    defineField({
      name: "faqDescription",
      title: "Faq Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
