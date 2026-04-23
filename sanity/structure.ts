import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Zishun Studios")
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
      S.documentTypeListItem("film").title("Film Work"),
      S.documentTypeListItem("painting").title("Painting"),
      S.documentTypeListItem("performance").title("Performance Work"),
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
        .title("Website Settings")
        .icon(() => "🌐")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
