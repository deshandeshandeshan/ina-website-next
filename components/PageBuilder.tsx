import { HOME_QUERYResult } from "@/sanity/types";
import { EventBlock } from "./eventComponents/EventBlock";
import { AboutBlock } from "./homeComponents/AboutBlock";
import { FeaturedContent } from "./homeComponents/FeaturedContent";
import { HeaderMedia } from "./homeComponents/HeaderMedia";
import { PressBlock } from "./pressComponents/PressBlock";
import { CreditsAndAwards } from "./workComponents/CreditsAndAwards";
import { ImageCarousel } from "./workComponents/ImageCarousel";
import { WorkHeaderMedia } from "./workComponents/WorkHeaderMedia";
import { HeaderInformationBlock } from "./workComponents/HeaderInformationBlock";
import { WorkLandscapeMedia } from "./workComponents/WorkLandscapeMedia";
import { DoubleLandscape } from "./photographyComponents/DoubleLandscape";
import { DoublePortrait } from "./photographyComponents/DoublePortrait";
import { LargeImageLeft } from "./photographyComponents/LargeImageLeft";
import { LargeImageRight } from "./photographyComponents/LargeImageRight";
import { SingleLandscape } from "./photographyComponents/SingleLandscape";
import { SinglePortrait } from "./photographyComponents/SinglePortrait";

import "./PageBuilder.css";

type PageBuilderBlock = NonNullable<
  NonNullable<HOME_QUERYResult>["content"]
>[number];

type PageBuilderProps = {
  content: PageBuilderBlock[];
  className?: string;
};

export function PageBuilder({
  content,
  className = "page-builder",
}: PageBuilderProps) {
  if (!Array.isArray(content)) return null;

  return (
    <main className={className}>
      {content.map((block) => {
        switch (block._type) {
          case "aboutBlock":
            return <AboutBlock key={block._key} {...block} />;
          case "eventBlock":
            return <EventBlock key={block._key} {...block} />;
          case "featuredContent":
            return <FeaturedContent key={block._key} {...block} />;
          case "headerMedia":
            return <HeaderMedia key={block._key} {...block} />;
          case "pressBlock":
            return <PressBlock key={block._key} {...block} />;
          case "creditsAndAwards":
            return <CreditsAndAwards key={block._key} {...block} />;
          case "imageCarousel":
            return <ImageCarousel key={block._key} {...block} />;
          case "workHeaderMedia":
            return <WorkHeaderMedia key={block._key} {...block} />;
          case "headerInformationBlock":
            return <HeaderInformationBlock key={block._key} {...block} />;
          case "workLandscapeMedia":
            return <WorkLandscapeMedia key={block._key} {...block} />;
          case "doubleLandscape":
            return <DoubleLandscape key={block._key} {...block} />;
          case "doublePortrait":
            return <DoublePortrait key={block._key} {...block} />;
          case "largeImageLeft":
            return <LargeImageLeft key={block._key} {...block} />;
          case "largeImageRight":
            return <LargeImageRight key={block._key} {...block} />;
          case "singleLandscape":
            return <SingleLandscape key={block._key} {...block} />;
          case "singlePortrait":
            return <SinglePortrait key={block._key} {...block} />;
          default: {
            const fallbackBlock = block as { _type: string; _key: string };
            return (
              <div key={fallbackBlock._key}>
                Block not found: {fallbackBlock._type}
              </div>
            );
          }
        }
      })}
    </main>
  );
}
