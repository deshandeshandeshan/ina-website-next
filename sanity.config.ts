import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "@/sanity/structure";
import { schema } from "./sanity/schemas/index";
import { muxInput } from "sanity-plugin-mux-input";

const config = defineConfig({
  projectId: "5wl8so4j",
  dataset: "production",
  title: "Zishun Studios",
  apiVersion: "2025-07-23",
  basePath: "/admin",

  schema,
  plugins: [structureTool({ structure }), muxInput()],
});

export default config;
