"use client";

import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useEffect, useState } from "react";

import "./FeaturedContent.css";
import "@/app/globals.css";
import "../Grid.css";
import Link from "next/link";

type featuredContentProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "featuredContent" }
>;

type ProjectImage = { asset?: { url?: string | null } | null } | null;

export function FeaturedContent({
  selectedProjects,
  categories,
}: featuredContentProps) {
  const getImageUrl = (img?: ProjectImage) => img?.asset?.url ?? "";

  const defaultProjectImage = selectedProjects?.[0]?.selectedProjectImage;
  const defaultCategoryImage = categories?.[0]?.categoryImage;
  const defaultImageSrc =
    getImageUrl(defaultProjectImage) || getImageUrl(defaultCategoryImage) || "";

  const [active, setActive] = useState<{ src: string; id: string }>({
    src: defaultImageSrc,
    id: selectedProjects?.[0]
      ? `project-0`
      : categories?.[0]
        ? `category-0`
        : "none",
  });

  useEffect(() => {
    setActive((prev) => {
      if (!prev.src && defaultImageSrc) {
        return {
          src: defaultImageSrc,
          id: selectedProjects?.[0]
            ? `project-0`
            : categories?.[0]
              ? `category-0`
              : "none",
        };
      }
      return prev;
    });
  }, [defaultImageSrc, selectedProjects, categories]);

  return (
    <section className="featured-content grid mobile-padding">
      <div className="fc-selections">
        <h3 className="type-body spacing-4">Selected Works</h3>
        <ul className="spacing-40">
          {selectedProjects?.map((work, index) => {
            const url = getImageUrl(work.selectedProjectImage);
            const id = `project-${index}`;
            const key = work._key ?? id;
            return (
              <li
                key={key}
                className={
                  active.id === id ? "is-active spacing-12" : "spacing-12"
                }
              >
                <small className="detail-text type-details-regular">
                  {index + 1}.
                </small>
                <Link
                  href={work.projectRoute || "#"}
                  type="button"
                  className="selected-project-title type-sub"
                  onMouseEnter={() => url && setActive({ src: url, id })}
                  onFocus={() => url && setActive({ src: url, id })}
                >
                  {work.projectTitle}
                </Link>
              </li>
            );
          })}
        </ul>

        <h3 className="type-body spacing-4">Categories</h3>
        <ul>
          {categories?.map((category, index: number) => {
            const url = getImageUrl(category.categoryImage);
            const id = `category-${index}`;
            const key = category._key ?? id;
            return (
              <li
                key={key}
                className={
                  active.id === id ? "is-active spacing-12" : "spacing-12"
                }
              >
                <small className="type-details-regular detail-text">
                  {index + 1}.
                </small>
                <Link
                  href={category.workRoute || "#"}
                  type="button"
                  className="category-title type-sub"
                  onMouseEnter={() => url && setActive({ src: url, id })}
                  onFocus={() => url && setActive({ src: url, id })}
                >
                  {category.categoryName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fc-image-col">
        <div className="fc-image-frame">
          {active.src ? (
            <Image
              src={active.src}
              alt="Selected work preview"
              priority={true}
              className="fc-image"
              width={800}
              height={800}
              quality={80}
            />
          ) : (
            <div className="fc-image-placeholder">No preview available</div>
          )}
        </div>
      </div>
    </section>
  );
}
