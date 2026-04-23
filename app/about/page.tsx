import { urlFor } from "@/sanity/lib/image";
import { getAbout } from "@/sanity/sanity.utils";
import Image from "next/image";
import "./About.css";
import "@/components/Grid.css";
import { PageBuilder } from "@/components/PageBuilder";
import { PortableText } from "next-sanity";

export const revalidate = 5;

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
                .url()}
              width={800}
              height={800}
              alt={aboutInformation?.aboutImage.alt || ""}
              className="about-page-img"
              priority={false}
            />
          )}
        </div>
        <h2 className="about-heading type-body-bold">ARTIST BIO</h2>
        <div className="about-body-text spacing-32 type-body">
          <PortableText value={aboutInformation?.description ?? []} />
        </div>
        <h2 className="about-contact-heading type-body-bold">CONTACT</h2>
        <p className="about-contact-body-text spacing-24 type-body uppercase-text">
          {aboutInformation?.email}
        </p>
        <h2 className="about-socials-heading type-body-bold">SOCIALS</h2>
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
                className="about-page-social-link type-body spacing-4"
              >
                {platform || url}
              </a>
            );
          })}
        </div>
        <h2 className="about-credit-heading type-body-bold">
          WEBSITE DESIGN & DEVELOPMENT
        </h2>
        <a
          href={aboutInformation?.designAndDevelopment?.url}
          className="about-credit-body-text spacing-24 type-body uppercase-text  spacing-240"
        >
          {aboutInformation?.designAndDevelopment?.name}
        </a>
        {Array.isArray(aboutInformation.content) && (
          <div className="about-page-builder">
            <PageBuilder content={aboutInformation.content} />
          </div>
        )}
      </div>
    </main>
  );
}
