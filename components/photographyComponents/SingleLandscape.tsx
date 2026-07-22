"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import { Lightbox } from "../Lightbox";
import "./SingleLandscape.css";
import "@/components/Grid.css";
import { useState } from "react";

type singleLandscapeProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "singleLandscape" }
>;

export function SingleLandscape({
  image,
  overlayImage,
}: singleLandscapeProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  const imageUrl = image ? urlFor(image).auto("format").quality(90).url() : "";
  const overlayImageUrl = overlayImage
    ? urlFor(overlayImage).auto("format").quality(90).url()
    : "";

  return (
    <section className="single-landscape grid mobile-padding">
      <div className="single-landscape-image">
        {image ? (
          <Image
            onClick={() =>
              setActiveImage({ src: imageUrl, alt: image.alt || "" })
            }
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

      {overlayImage ? (
        <div className="single-landscape-overlay-image">
          <Image
            src={overlayImageUrl}
            width={1920}
            height={1080}
            alt={overlayImage.alt || ""}
            className="single-landscape-overlay-img caption-spacing"
          />
          {overlayImage.caption && (
            <div className="caption">
              <p className="type-details-regular">{overlayImage.caption}</p>
            </div>
          )}
        </div>
      ) : null}

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          alt={activeImage.alt || ""}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
