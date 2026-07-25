"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "../Lightbox";
import "./ImageCarousel.css";
import { IMAGE_SIZES } from "@/sanity/lib/imageSizes";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

type imageCarouselProps = Extract<
  NonNullable<NonNullable<HOME_QUERY_RESULT>["content"]>[number],
  { _type: "imageCarousel" }
>;

export function ImageCarousel({ title, carouselImages }: imageCarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const images = carouselImages ?? [];

  if (images.length === 0) return null;

  const activeSlide = images[imageIndex];
  // Kept small since this is fetched on every prev/next click; the lightbox
  // requests its own higher-resolution version only when actually opened.
  const activeImageUrl = activeSlide?.image
    ? urlFor(activeSlide.image)
        .auto("format")
        .quality(90)
        .width(IMAGE_SIZES.carousel.width)
        .url()
    : "";
  const activeLightboxUrl = activeSlide?.image
    ? urlFor(activeSlide.image)
        .auto("format")
        .quality(85)
        .width(IMAGE_SIZES.lightbox.width)
        .url()
    : "";

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="image-carousel mobile-padding">
      <div className="image-carousel-container">
        {title && (
          <h2 className="image-carousel-title type-body-bold spacing-24">
            {title}
          </h2>
        )}
        <div className="image-carousel-image-container">
          {activeSlide?.image ? (
            <Image
              onClick={() => setLightBoxOpen(true)}
              src={activeImageUrl}
              sizes={IMAGE_SIZES.carousel.sizes}
              width={1920}
              height={1920}
              alt={activeSlide.image.alt || ""}
              className="image-carousel-img pointer image-link"
            />
          ) : null}
          {activeSlide?.image?.caption && (
            <div className="caption">
              <p className="type-details-regular">
                {activeSlide.image.caption}
              </p>
            </div>
          )}
        </div>
        <div className="image-carousel-controls ">
          <div className="image-carousel-slide-title type-body-bold text-grey">
            {activeSlide?.title}
          </div>
          <div className="image-carousel-controls-container type-body-bold">
            <div className="image-carousel-counter ">
              &#91;{imageIndex + 1}/{images.length}&#93;
            </div>
            <div className="image-carousel-buttons type-regular">
              <button
                onClick={showPrevImage}
                className="image-carousel-prev type-regular"
              >
                <CgArrowLongLeft />
              </button>
              <button
                onClick={showNextImage}
                className="image-carousel-next type-regular"
              >
                <CgArrowLongRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightBoxOpen && (
        <Lightbox
          src={activeLightboxUrl}
          alt={activeSlide?.image?.alt || ""}
          onClose={() => setLightBoxOpen(false)}
        />
      )}
    </section>
  );
}
