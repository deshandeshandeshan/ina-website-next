import { PageBuilder } from "@/components/PageBuilder";
import HeroLogo from "@/components/HeroLogo";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity.utils";

export const revalidate = 5;

export default async function Home() {
  const homeContent = await client.fetch(HOME_QUERY);

  return homeContent?.content ? (
    <div className="home">
      <HeroLogo heroImage={homeContent.heroImage} />
      <PageBuilder content={homeContent.content} />
    </div>
  ) : null;
}
