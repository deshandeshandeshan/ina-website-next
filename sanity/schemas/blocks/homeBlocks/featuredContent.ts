import { defineField, defineType } from "sanity";

export const featuredContentType = defineType({
  name: "featuredContent",
  title: "Featured Content",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "selectedProjects",
      type: "array",
      title: "Selected Projects",
      validation: (rule) =>
        rule
          .min(1)
          .max(5)
          .error("You must add at least 1 selected work and no more than 5."),
      of: [
        {
          type: "object",
          name: "selectedProject",
          title: "Selected Project",
          fields: [
            defineField({
              name: "projectTitle",
              type: "string",
              title: "Project Title",
            }),
            defineField({
              name: "projectRoute",
              type: "string",
              title:
                "Project Route (Internal Link `/selected-work/work-title`)",
            }),
            defineField({
              name: "selectedProjectImage",
              type: "image",
              title: "Selected Project Image",
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
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      title: "Categories",
      validation: (rule) =>
        rule
          .min(1)
          .max(5)
          .error("You must add at least 1 selected work and no more than 5."),
      of: [
        {
          type: "object",
          name: "category",
          title: "Category",
          fields: [
            defineField({
              name: "categoryName",
              type: "string",
              title: "Category Name",
            }),
            defineField({
              name: "workRoute",
              type: "string",
              title: "Category Route (Internal Link eg. `/selected-works`)",
            }),
            defineField({
              name: "categoryImage",
              type: "image",
              title: "Category Image",
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
        },
      ],
    }),
  ],
});
