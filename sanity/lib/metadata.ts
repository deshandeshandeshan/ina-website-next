import type { Metadata } from "next";
import { getSiteSettings } from "@/sanity/sanity.utils";

type PageSeo = {
  title?: string | null;
  description?: string | null;
} | null;

export async function buildPageMetadata(
  pageSeo: PageSeo | undefined,
): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: pageSeo?.title || settings?.siteTitle || "Ina Rufino",
    description: pageSeo?.description || settings?.defaultDescription || "",
  };
}
