"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import "./SinglePortrait.css";
import "@/components/Grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";
import { IMAGE_SIZES } from "@/sanity/lib/imageSizes";

type singlePortraitProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "singlePortrait" }
>;

export function SinglePortrait({ image, overlayImage }: singlePortraitProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  const imageUrl = image
    ? urlFor(image)
        .auto("format")
        .quality(90)
        .width(IMAGE_SIZES.lightbox.width)
        .url()
    : "";
  const overlayImageUrl = overlayImage
    ? urlFor(overlayImage)
        .auto("format")
        .quality(90)
        .width(IMAGE_SIZES.small.width)
        .url()
    : "";

  return (
    <section className="single-potrait grid mobile-padding">
      <div className="single-potrait-container">
        {image ? (
          <Image
            onClick={() =>
              setActiveImage({ src: imageUrl, alt: image.alt || "" })
            }
            src={imageUrl}
            sizes={IMAGE_SIZES.large.sizes}
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

      {overlayImage ? (
        <div className="single-potrait-overlay-container">
          <Image
            src={overlayImageUrl}
            sizes={IMAGE_SIZES.small.sizes}
            width={1080}
            height={1920}
            alt={overlayImage.alt || ""}
            className="single-potrait-overlay-image caption-spacing"
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
