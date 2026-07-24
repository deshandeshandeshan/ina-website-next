"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import "./LargeImageRight.css";
import "@/components/Grid.css";
import { useState } from "react";
import { IMAGE_SIZES } from "@/sanity/lib/imageSizes";
import { Lightbox } from "../Lightbox";

type largeImageRightProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "largeImageRight" }
>;

export function LargeImageRight({
  leftImage,
  rightImage,
  overlayImage,
}: largeImageRightProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="large-image-right grid mobile-padding">
      <div className="lir-left-image spacing-32">
        {leftImage ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(leftImage)
                  .auto("format")
                  .quality(85)
                  .width(IMAGE_SIZES.lightbox.width)
                  .url(),
                alt: leftImage.alt || "",
              })
            }
            src={urlFor(leftImage)
              .auto("format")
              .quality(90)
              .width(IMAGE_SIZES.large.width)
              .url()}
            sizes={IMAGE_SIZES.large.sizes}
            width={1080}
            height={1920}
            alt={leftImage.alt || ""}
            className="image-large-right-left-img pointer caption-spacing image-link"
          />
        ) : null}
        {leftImage?.caption && (
          <div className="caption">
            <p className="type-details-regular">{leftImage.caption}</p>
          </div>
        )}
      </div>
      <div className="lir-right-image">
        {rightImage ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(rightImage)
                  .auto("format")
                  .quality(85)
                  .width(IMAGE_SIZES.lightbox.width)
                  .url(),
                alt: rightImage.alt || "",
              })
            }
            src={urlFor(rightImage)
              .auto("format")
              .quality(90)
              .width(IMAGE_SIZES.large.width)
              .url()}
            sizes={IMAGE_SIZES.large.sizes}
            width={1080}
            height={1920}
            alt={rightImage.alt || ""}
            className="large-image-right-right-img pointer caption-spacing image-link"
          />
        ) : null}
        {rightImage?.caption && (
          <div className="caption">
            <p className="type-details-regular">{rightImage.caption}</p>
          </div>
        )}
      </div>

      {overlayImage ? (
        <div className="lir-overlay-image">
          <Image
            src={urlFor(overlayImage)
              .auto("format")
              .quality(90)
              .width(IMAGE_SIZES.small.width)
              .url()}
            sizes={IMAGE_SIZES.small.sizes}
            width={1080}
            height={1920}
            alt={overlayImage.alt || ""}
            className="lir-overlay-img caption-spacing"
          />
          {overlayImage?.caption && (
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
