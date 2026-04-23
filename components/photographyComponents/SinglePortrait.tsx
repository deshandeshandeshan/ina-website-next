"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./SinglePortrait.css";
import "@/components/Grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type singlePortraitProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "singlePortrait" }
>;

export function SinglePortrait({ image }: singlePortraitProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const imageUrl = image ? urlFor(image).auto("format").quality(90).url() : "";

  return (
    <section className="single-potrait grid mobile-padding">
      <div className="single-potrait-container">
        {image ? (
          <Image
            onClick={() => setLightBoxOpen(!lightBoxOpen)}
            src={imageUrl}
            width={1080}
            height={1920}
            alt={image.alt || ""}
            className="single-potrait-image caption-spacing pointer image-link"
          />
        ) : null}
        {image?.caption && (
          <div className="caption">
            <p className="type-details-regular">{image.caption}</p>
          </div>
        )}
      </div>

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
