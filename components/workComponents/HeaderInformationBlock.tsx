"use client";

import { HOME_QUERYResult } from "@/sanity/types";
import "./HeaderInformationBlock.css";
import "@/components/Grid.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import MuxPlayerElement from "@mux/mux-player";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import MuxPlayer from "@mux/mux-player-react";

type headerInformationBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "headerInformationBlock" }
>;

export function HeaderInformationBlock({
  image,
  video,
  title,
  description,
  workDetails,
}: headerInformationBlockProps) {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && playerRef.current) {
      playerRef.current.play();
    }

    if (!inView && playerRef.current) {
      playerRef.current.pause();
    }
  }, [inView]);

  const playerRef = useRef<MuxPlayerElement | null>(null);
  return (
    <section className="work-information">
      <div className="header-information-media spacing-32">
        {image?.asset?.url ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.alt || ""}
            className="header-information-img"
          />
        ) : video?.asset?.playbackId ? (
          <div
            ref={inViewRef}
            className="header-information-mux-video-container"
          >
            <MuxPlayer
              playbackId={video.asset.playbackId}
              ref={playerRef}
              autoPlay={false}
              muted
              loop
              playsInline
              className="hi-mux-video-player mux-player"
            />
          </div>
        ) : null}
      </div>
      <div className="grid mobile-padding">
        <div className="work-info-heading-container spacing-16">
          <h1 className="work-info-heading type-sub">{title}</h1>
        </div>
        <div className="work-info-description-container spacing-32">
          <p className="work-info-description type-body">{description}</p>
        </div>
        <ul className="work-info-details type-body">
          <li className="spacing-4">{workDetails?.role}</li>
          <li className="spacing-4">{workDetails?.location}</li>
          <li className="spacing-4">{workDetails?.year}</li>
        </ul>
      </div>
    </section>
  );
}
