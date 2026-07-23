import { HOME_QUERY_RESULT } from "@/sanity/types";
import "./LargeText.css";
import "@/components/Grid.css";

type largeTextProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "largeText" }
>;

export function LargeText({ title, text }: largeTextProps) {
  return (
    <section className="large-text grid mobile-padding">
      <div className="large-text-content">
        {title && (
          <h2 className="large-text-title spacing-12 type-details-regular">
            {title}
          </h2>
        )}
        {text && <p className="large-text-body serif-header">{text}</p>}
      </div>
    </section>
  );
}
