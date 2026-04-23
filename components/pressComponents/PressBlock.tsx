import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./PressBlock.css";
import "../Grid.css";

type pressBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "pressBlock" }
>;

export function PressBlock({ pressSections }: pressBlockProps) {
  return (
    <section className="press-block">
      <ul className="press-grid">
        {pressSections?.map((section, index) => (
          <li key={index} className="press-section press-item-grid">
            <h2 className="type-of-press type-body-bold">
              {section.typeOfPress}
            </h2>
            <div className="press-image-container">
              {section.pressImage && (
                <Image
                  src={urlFor(section.pressImage).url()}
                  width={1600}
                  height={1600}
                  alt={section.pressImage.alt || ""}
                  className="press-image"
                />
              )}
            </div>
            <h3 className="press-title type-body-bold text-grey">
              {section.title}
            </h3>
            <p className="press-description type-body">{section.description}</p>
            {section.linkToPress && (
              <a
                href={section.linkToPress}
                target="_blank"
                rel="noopener noreferrer"
                className="press-link type-body text-red"
              >
                View full press here →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
