import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { getAbout } from "@/sanity/sanity.utils";
import Image from "next/image";
import "./About.css";
import "@/components/Grid.css";
import { PageBuilder } from "@/components/PageBuilder";
import { PortableText } from "next-sanity";
import { buildPageMetadata } from "@/sanity/lib/metadata";
import { IMAGE_SIZES } from "@/sanity/lib/imageSizes";

export async function generateMetadata(): Promise<Metadata> {
  const aboutInformation = await getAbout();
  return buildPageMetadata(aboutInformation?.seo);
}

export default async function About() {
  const aboutInformation = await getAbout();

  if (!aboutInformation) return null;

  return (
    <main className="about-page">
      <div className="grid">
        <div className="about-page-image spacing-24">
          {aboutInformation?.aboutImage?.asset?.url && (
            <Image
              src={urlFor(aboutInformation?.aboutImage)
                .auto("format")
                .quality(85)
                .width(IMAGE_SIZES.medium.width)
                .url()}
              sizes={IMAGE_SIZES.medium.sizes}
              width={800}
              height={800}
              alt={aboutInformation?.aboutImage.alt || ""}
              className="about-page-img"
              priority={false}
            />
          )}
        </div>
        <div className="about-info-contanier">
          <h2 className="about-heading type-details-regular spacing-12">
            ABOUT
          </h2>
          <div className="about-body-text spacing-32 serif-L">
            <PortableText value={aboutInformation?.description ?? []} />
          </div>

          <p className="about-socials-body-text spacing-24 uppercase-text">
            {aboutInformation?.email}
          </p>
          <h2 className="about-socials-heading type-details-regular spacing-12">
            SOCIALS
          </h2>
          <div className="about-page-social-links spacing-24">
            {(aboutInformation?.aboutSocialLinks ?? []).map((link, index) => {
              const url = link?.url ?? "";
              const platform = link?.platform ?? "";

              if (!url && !platform) return null;

              return (
                <a
                  href={url}
                  target="_blank"
                  key={index}
                  rel="noopener noreferrer uppercase-text"
                  className="about-page-social-link type-body-bold"
                >
                  {platform || url}
                </a>
              );
            })}
          </div>
        </div>
        {Array.isArray(aboutInformation.content) && (
          <div className="about-page-builder">
            <PageBuilder content={aboutInformation.content} />
          </div>
        )}
      </div>
    </main>
  );
}
