"use client";

import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import "./HeroLogo.css";
import "@/components/Grid.css";
import InaRufinoName from "@/images/InaRufinoName2.png";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY_RESULT } from "@/sanity/types";

// Fraction of viewport height the shrink animation plays out over.
// Must match the .hero-section height in HeroLogo.css so the logo
// finishes landing exactly as the page content scrolls into view.
const SHRINK_RANGE_RATIO = 1;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type HeroLogoProps = {
  heroImage: NonNullable<HOME_QUERY_RESULT>["heroImage"];
};

export default function HeroLogo({ heroImage }: HeroLogoProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const img = imgRef.current;
    if (!img) return;

    // Client-side navigations can land here before the browser finishes
    // resetting scroll to the top, which would make the first frame read a
    // stale scrollY and start mid-animation. Force it so the entrance is
    // always deterministic.
    window.scrollTo(0, 0);

    // Set the critical layout properties inline (not just via HeroLogo.css)
    // so the resting position is correct even if the stylesheet for this
    // route hasn't finished loading/applying yet on a client-side
    // navigation — otherwise the image can briefly render unpositioned
    // (collapsed/off-place) before snapping into place.
    img.style.position = "fixed";
    img.style.zIndex = "55";

    let startRect = img.getBoundingClientRect();
    let endRect = startRect;
    let shrinkRange = window.innerHeight * SHRINK_RANGE_RATIO;
    let rafId = 0;

    const update = () => {
      const p = easeOutCubic(
        Math.min(Math.max(window.scrollY / shrinkRange, 0), 1),
      );

      img.style.left = `${startRect.left + (endRect.left - startRect.left) * p}px`;
      img.style.top = `${startRect.top + (endRect.top - startRect.top) * p}px`;
      img.style.width = `${startRect.width + (endRect.width - startRect.width) * p}px`;
      img.style.height = `${startRect.height + (endRect.height - startRect.height) * p}px`;
    };

    const measure = () => {
      // Reset to the resting state before measuring it. Width is computed
      // directly (matching HeroLogo.css's `min(calc(100vw - 16px), 1200px)`)
      // rather than cleared to "" and left to the stylesheet, since that
      // stylesheet may not have applied yet.
      img.style.transform = "translate(-50%, -50%)";
      img.style.left = "50%";
      img.style.top = "32vh";
      img.style.width = `${Math.min(window.innerWidth - 16, 1200)}px`;
      img.style.height = "auto";
      startRect = img.getBoundingClientRect();

      const navLogo = document.querySelector<HTMLElement>(".nav-logo");
      endRect = navLogo ? navLogo.getBoundingClientRect() : startRect;
      shrinkRange = window.innerHeight * SHRINK_RANGE_RATIO;

      img.style.transform = "none";
      update();
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid grid">
          {heroImage?.asset?.url && (
            <div className="hero-image-wrapper">
              <Image
                src={urlFor(heroImage).auto("format").quality(90).url()}
                alt={heroImage.alt || ""}
                width={heroImage.asset.metadata?.dimensions?.width ?? 1200}
                height={heroImage.asset.metadata?.dimensions?.height ?? 800}
                className="hero-image"
                priority
              />
            </div>
          )}
        </div>
      </section>
      <Link href="/" aria-hidden="true" tabIndex={-1}>
        <img
          ref={imgRef}
          src={InaRufinoName.src}
          alt=""
          width={InaRufinoName.width}
          height={InaRufinoName.height}
          className="hero-logo"
        />
      </Link>
    </>
  );
}
