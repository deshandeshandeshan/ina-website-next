import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./AboutBlock.css";
import Link from "next/link";
import { PortableText } from "next-sanity";

type aboutBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "aboutBlock" }
>;

export function AboutBlock({ description, aboutBlockImage }: aboutBlockProps) {
  return (
    <section className="about-block mobile-padding">
      <div className="about-block-content">
        {aboutBlockImage && (
          <Image
            src={urlFor(aboutBlockImage).auto("format").quality(90).url()}
            alt={aboutBlockImage?.alt || "About Image"}
            width={2160}
            height={3840}
            className="about-block-image"
          />
        )}
        <div className="about-block-text">
          <div className="type-body">
            <PortableText value={description ?? []} />
          </div>
          <Link href="/about" className="about-link text-red type-body">
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
