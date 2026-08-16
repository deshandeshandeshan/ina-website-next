import type { Metadata } from "next";
import { PageBuilder } from "@/components/PageBuilder";
import HeroLogo from "@/components/HeroLogo";
import { getHome } from "@/sanity/sanity.utils";
import { buildPageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const homeContent = await getHome();
  return buildPageMetadata(homeContent?.seo);
}

export default async function Home() {
  const homeContent = await getHome();

  return homeContent?.content ? (
    <div className="home">
      <HeroLogo heroImage={homeContent.heroImage} />
      <PageBuilder content={homeContent.content} />
    </div>
  ) : null;
}
