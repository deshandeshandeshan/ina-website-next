import { defineField, defineType } from "sanity";

export const enquireFaq = defineType({
  name: "enquireFaq",
  title: "Enquire FAQ",
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
      type: "text",
    }),
  ],
});
