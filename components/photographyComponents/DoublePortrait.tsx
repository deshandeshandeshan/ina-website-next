"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";

import "./DoublePortrait.css";
import "@/components/Grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";
import { IMAGE_SIZES } from "@/sanity/lib/imageSizes";

type doublePortraitProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "doublePortrait" }
>;

export function DoublePortrait({
  leftImage,
  rightImage,
  overlayImage,
}: doublePortraitProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="double-portrait mobile-padding">
      <div className="images grid">
        <div className="double-portrait-left-image">
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
              alt={leftImage?.alt ?? ""}
              width={2160}
              height={3840}
              className="double-portrait-left-img image-link"
            />
          ) : null}
          {leftImage?.caption && (
            <div className="caption">
              <p className="type-details-regular">{leftImage.caption}</p>
            </div>
          )}
        </div>
        <div className="double-portrait-right-image">
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
              alt={rightImage?.alt ?? ""}
              width={2160}
              height={3840}
              className="double-portrait-right-img image-link"
            />
          ) : null}
          {rightImage?.caption && (
            <div className="caption">
              <p className="type-details-regular">{rightImage.caption}</p>
            </div>
          )}
        </div>
        {overlayImage ? (
          <div className="double-portrait-overlay-image">
            <Image
              src={urlFor(overlayImage)
                .auto("format")
                .quality(90)
                .width(IMAGE_SIZES.small.width)
                .url()}
              sizes={IMAGE_SIZES.small.sizes}
              alt={overlayImage?.alt ?? ""}
              width={2160}
              height={3840}
              className="double-portrait-overlay-img"
            />
            {overlayImage?.caption && (
              <div className="caption">
                <p className="type-details-regular">{overlayImage.caption}</p>
              </div>
            )}
          </div>
        ) : null}
      </div>
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
