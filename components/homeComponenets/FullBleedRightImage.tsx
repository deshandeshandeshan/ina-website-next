"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "../Lightbox";
import "@/components/Grid.css";
import "./FullBleedRightImage.css";
import Link from "next/link";

type fullBleedImageRightProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "fullBleedImageRight" }
>;

export function FullBleedImageRight({
  title,
  imageLeft,
  imageRight,
}: fullBleedImageRightProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="full-bleed-image-right">
      {title && (
        <h2 className="full-bleed-image-right-title type-body-bold spacing-24 mobile-padding">
          {title}
        </h2>
      )}
      <div className="full-bleed-image-right-images grid">
        <div className="full-bleed-image-right-left">
          {imageLeft ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(imageLeft).url(),
                  alt: imageLeft.alt || "",
                })
              }
              src={urlFor(imageLeft).auto("format").quality(90).url()}
              alt={imageLeft.alt || ""}
              width={1920}
              height={1920}
              className="full-bleed-image-right-left-img pointer image-link"
            />
          ) : null}
          <div className="caption">
            <Link href="/" className="type-details-regular">
              View Work &#8594;
            </Link>
          </div>
        </div>
        <div className="full-bleed-image-right-right">
          {imageRight ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(imageRight).url(),
                  alt: imageRight.alt || "",
                })
              }
              src={urlFor(imageRight).auto("format").quality(90).url()}
              alt={imageRight.alt || ""}
              width={1920}
              height={1920}
              className="full-bleed-image-right-right-img pointer image-link"
            />
          ) : null}
        </div>
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
