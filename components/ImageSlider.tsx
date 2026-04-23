"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";
import "./workComponents/ImageCarousel.css";

type ImageSliderProps = {
  imageUrls: string[];
  className?: string;
  title?: string | null;
};

export function ImageSlider({ imageUrls, className, title }: ImageSliderProps) {
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
    <div className={`${className}`}>
      <div className="is-image-container">
        <Image
          src={urlFor(imageUrls[imageIndex]).auto("format").quality(90).url()}
          alt={""}
          width={2160}
          height={3840}
          className="slider-img"
        />
      </div>
      <div className="slider-controls is-grid">
        <div className="slider-title type-body-bold text-grey">{title}</div>
        <div className="controls-container type-body">
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
        </div>
      </div>
    </div>
  );
}
