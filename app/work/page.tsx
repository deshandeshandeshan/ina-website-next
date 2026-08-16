import type { Metadata } from "next";
import { getWork } from "@/sanity/sanity.utils";
import { WorkTabs } from "./WorkTabs";
import { buildPageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const workContent = await getWork();
  return buildPageMetadata(workContent?.seo);
}

export default async function Work() {
  const workContent = await getWork();

  if (!workContent) return null;

  return (
    <div className="work">
      <WorkTabs categories={workContent.categories} />
    </div>
  );
}
