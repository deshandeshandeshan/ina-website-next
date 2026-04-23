import { defineField, defineType } from "sanity";

export const eventBlockType = defineType({
  name: "eventBlock",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "locationTitle",
      title: "Location Title",
      type: "string",
    }),
    defineField({
      name: "eventImage",
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
      name: "description",
      title: "Event Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "timeAndDate",
      title: "Time and Date",
      type: "object",
      fields: [
        defineField({
          name: "date",
          title: "Date",
          type: "string",
        }),
        defineField({
          name: "time",
          title: "Time",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "location",
      title: "Location (e.g., City, Venue)",
      type: "text",
    }),
    defineField({
      name: "details",
      title: "Event Details",
      type: "text",
    }),
    defineField({
      name: "infoAndTickets",
      title: "Info and Tickets (URL to event page)",
      type: "url",
    }),
  ],
});
