import { defineField, defineType } from "sanity";

export const filmType = defineType({
  name: "film",
  title: "Film Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role in Project",
    }),
    defineField({
      name: "filmImage",
      type: "image",
      title: "Selected Work Image",
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
    defineField({
      name: "content",
      type: "pageBuilder",
      options: {
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "home",
              title: "Home",
              of: ["aboutBlock", "featuredContent", "headerMedia"],
            },
            {
              name: "photography",
              title: "Photography",
              of: [
                "doubleLandscape",
                "doublePortrait",
                "largeImageLeft",
                "largeImageRight",
                "singleLandscape",
                "singlePortrait",
                "longImageRight",
              ],
            },
            {
              name: "work",
              title: "Selected Work",
              of: [
                "creditsAndAwards",
                "imageCarousel",
                "headerInformationBlock",
                "workHeaderMedia",
                "workLandscapeMedia",
              ],
            },
            {
              name: "event",
              title: "Event",
              of: ["eventBlock"],
            },
            {
              name: "press",
              title: "Press",
              of: ["pressBlock"],
            },
          ],
        },
      },
    }),
  ],
});
