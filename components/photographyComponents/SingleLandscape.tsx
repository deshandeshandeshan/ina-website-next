"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { Lightbox } from "../Lightbox";
import "./SingleLandscape.css";
import "@/components/Grid.css";
import { useState } from "react";

type singleLandscapeProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "singleLandscape" }
>;

export function SingleLandscape({ image }: singleLandscapeProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const imageUrl = image ? urlFor(image).auto("format").quality(90).url() : "";

  return (
    <section className="single-landscape grid mobile-padding">
      <div className="single-landscape-image">
        {image ? (
          <Image
            onClick={() => setLightBoxOpen(!lightBoxOpen)}
            src={imageUrl}
            width={1920}
            height={1080}
            alt={image.alt || ""}
            className="single-landscape-img pointer caption-spacing image-link"
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
