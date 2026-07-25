import type { Metadata } from "next";
import { WORK_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity.utils";
import { WorkTabs } from "./WorkTabs";
import { buildPageMetadata } from "@/sanity/lib/metadata";

export const revalidate = 5;

export async function generateMetadata(): Promise<Metadata> {
  const workContent = await client.fetch(WORK_QUERY);
  return buildPageMetadata(workContent?.seo);
}

export default async function Work() {
  const workContent = await client.fetch(WORK_QUERY);

  if (!workContent) return null;

  return (
    <div className="work">
      <WorkTabs categories={workContent.categories} />
    </div>
  );
}
