import { HOME_QUERY_RESULT } from "@/sanity/types";
import { DoubleLandscape } from "./photographyComponents/DoubleLandscape";
import { DoublePortrait } from "./photographyComponents/DoublePortrait";
import { LargeImageLeft } from "./photographyComponents/LargeImageLeft";
import { LargeImageRight } from "./photographyComponents/LargeImageRight";
import { SingleLandscape } from "./photographyComponents/SingleLandscape";
import { SinglePortrait } from "./photographyComponents/SinglePortrait";
import "./PageBuilder.css";

type PageBuilderBlock = NonNullable<
  NonNullable<HOME_QUERY_RESULT>["content"]
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
          default:
            return null;
        }
      })}
    </main>
  );
}
