import type { Metadata } from "next";
import { PageBuilder } from "@/components/PageBuilder";
import HeroLogo from "@/components/HeroLogo";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity.utils";
import { buildPageMetadata } from "@/sanity/lib/metadata";

export const revalidate = 5;

export async function generateMetadata(): Promise<Metadata> {
  const homeContent = await client.fetch(HOME_QUERY);
  return buildPageMetadata(homeContent?.seo);
}

export default async function Home() {
  const homeContent = await client.fetch(HOME_QUERY);

  return homeContent?.content ? (
    <div className="home">
      <HeroLogo heroImage={homeContent.heroImage} />
      <PageBuilder content={homeContent.content} />
    </div>
  ) : null;
}
