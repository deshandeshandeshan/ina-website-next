"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "./HeroLogo.css";
import InaRufinoName from "@/images/InaRufinoName.png";

// Fraction of viewport height the shrink animation plays out over.
// Must match the .hero-logo-spacer height in HeroLogo.css so the logo
// finishes landing exactly as the page content scrolls into view.
const SHRINK_RANGE_RATIO = 1;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function HeroLogo() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const img = imgRef.current;
    if (!img) return;

    // Client-side navigations can land here before the browser finishes
    // resetting scroll to the top, which would make the first frame read a
    // stale scrollY and start mid-animation. Force it so the entrance is
    // always deterministic.
    window.scrollTo(0, 0);

    let startRect = img.getBoundingClientRect();
    let endRect = startRect;
    let shrinkRange = window.innerHeight * SHRINK_RANGE_RATIO;
    let rafId = 0;

    const update = () => {
      const p = easeOutCubic(
        Math.min(Math.max(window.scrollY / shrinkRange, 0), 1)
      );

      img.style.left = `${startRect.left + (endRect.left - startRect.left) * p}px`;
      img.style.top = `${startRect.top + (endRect.top - startRect.top) * p}px`;
      img.style.width = `${startRect.width + (endRect.width - startRect.width) * p}px`;
      img.style.height = `${startRect.height + (endRect.height - startRect.height) * p}px`;
    };

    const measure = () => {
      // Reset to the CSS-defined resting state before measuring it.
      img.style.transform = "translate(-50%, -50%)";
      img.style.left = "50%";
      img.style.top = "42vh";
      img.style.width = "";
      img.style.height = "";
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
      <div className="hero-logo-spacer" />
      <Link href="/" aria-hidden="true" tabIndex={-1}>
        <img
          ref={imgRef}
          src={InaRufinoName.src}
          alt=""
          className="hero-logo"
        />
      </Link>
    </>
  );
}
