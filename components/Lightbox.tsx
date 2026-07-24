"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./Lightbox.css";

type LightboxProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-image">
        <Image
          src={src}
          width={2000}
          height={1000}
          sizes="100vw"
          alt={alt || ""}
          className="lightbox-img"
        />
      </div>
      <div className="close-button-wrapper">
        <button
          onClick={onClose}
          className="lightbox-close-button type-body-bold"
        >
          Close
        </button>
      </div>
    </div>
  );
}
