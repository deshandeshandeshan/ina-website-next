import { HOME_QUERY_RESULT } from "@/sanity/types";

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
