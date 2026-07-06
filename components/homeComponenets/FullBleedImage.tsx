"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "../Lightbox";
import "./FullBleedImage.css";

type fullBleedImageProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "fullBleedImage" }
>;

export function FullBleedImage({ title, image, text }: fullBleedImageProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const imageUrl = image ? urlFor(image).auto("format").quality(90).url() : "";

  return (
    <section className="full-bleed-image">
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
        {image?.caption && (
          <div className="caption mobile-padding">
            <p className="type-details-regular">{image.caption}</p>
          </div>
        )}
      </div>

      {(title || text) && (
        <div className="full-bleed-image-text mobile-padding">
          {title && (
            <h2 className="full-bleed-image-title type-body-bold spacing-24">
              {title}
            </h2>
          )}
          {text && <p className="full-bleed-image-body type-body">{text}</p>}
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
