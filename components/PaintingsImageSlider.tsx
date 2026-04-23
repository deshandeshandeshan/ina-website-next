"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

import "@/components/Grid.css";
import "@/app/paintings/[painting]/Painting.css";
import { PortableText, PortableTextBlock } from "next-sanity";

type PaintingsImageSliderProps = {
  imageUrls: string[];
  yearCreated?: string;
  paintingDescription?: PortableTextBlock[];
  paintingTitle?: string;
};

export function PaintingsImageSlider({
  imageUrls,
  yearCreated,
  paintingDescription,
  paintingTitle,
}: PaintingsImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="image-slider mobile-padding grid">
      <div className="psi-container">
        {imageUrls.length > 0 && imageUrls[imageIndex] ? (
          <Image
            src={urlFor(imageUrls[imageIndex]).auto("format").quality(90).url()}
            alt=""
            width={2160}
            height={3840}
            className="slider-img"
          />
        ) : (
          <div className="slider-placeholder" />
        )}
      </div>
      <div className="image-counter type-body">
        &#91;{imageIndex + 1}/{imageUrls.length}&#93;
      </div>
      <div className="button-container">
        <button onClick={showPrevImage} className="prev-button">
          &lt;
        </button>
        <button onClick={showNextImage} className="next-button">
          &gt;
        </button>
      </div>
      <h2 className="painting-page-title type-body-bold">{paintingTitle}</h2>
      <p className="painting-page-year-created type-body">{yearCreated}</p>
      <h3 className="painting-page-description-header type-body-bold">
        DESCRIPTION
      </h3>
      <div className="painting-page-description type-body">
        <PortableText value={paintingDescription ?? []} />
      </div>
    </div>
  );
}
