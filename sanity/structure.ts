import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ina Website")
    .items([
      S.listItem()
        .title("Home Page")
        .id("home")
        .child(
          S.editor()
            .title("Home Page")
            .id("home")
            .schemaType("home")
            .documentId("home")
        ),
      S.listItem()
        .title("Work Page")
        .id("work")
        .child(
          S.editor()
            .title("Work Page")
            .id("work")
            .schemaType("work")
            .documentId("work")
        ),
      S.listItem()
        .title("About Page")
        .id("about")
        .schemaType("about")
        .child(
          S.editor()
            .title("About Page")
            .id("about")
            .schemaType("about")
            .documentId("about")
        ),
      S.listItem()
        .id("footerSettings")
        .schemaType("footerSettings")
        .title("Footer Settings")
        .child(
          S.editor()
            .title("Footer Settings")
            .id("footerSettings")
            .schemaType("footerSettings")
            .documentId("footerSettings")
        ),
      S.listItem()
        .title("Book Page")
        .id("book")
        .schemaType("book")
        .child(
          S.editor()
            .title("Book Page")
            .id("book")
            .schemaType("book")
            .documentId("book")
        ),
      S.listItem()
        .title("Website Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
