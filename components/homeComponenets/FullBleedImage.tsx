"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "../Lightbox";
import "./FullBleedImage.css";
import "@/components/Grid.css";

type fullBleedImageProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "fullBleedImage" }
>;

export function FullBleedImage({ title, image, text }: fullBleedImageProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const imageUrl = image ? urlFor(image).auto("format").quality(90).url() : "";

  return (
    <section className="full-bleed-image">
      {title && (
        <div className="full-bleed-image-text mobile-padding">
          {title && (
            <h2 className="full-bleed-image-title type-body-bold spacing-12">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="full-bleed-image-wrapper">
        {image ? (
          <Image
            onClick={() => setLightBoxOpen(!lightBoxOpen)}
            src={imageUrl}
            width={2560}
            height={1440}
            alt={image.alt || ""}
            className="full-bleed-img pointer image-link"
          />
        ) : null}
      </div>
      {text && (
        <div className="full-bleed-image-text mobile-padding grid">
          {text && (
            <p className="full-bleed-image-body serif-header caption">{text}</p>
          )}
        </div>
      )}

      {lightBoxOpen && (
        <Lightbox
          src={imageUrl}
          alt={image?.alt || ""}
          onClose={() => setLightBoxOpen(false)}
        />
      )}
    </section>
  );
}
