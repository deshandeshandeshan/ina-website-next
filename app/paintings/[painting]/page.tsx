import { getPainting } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";
import "./Painting.css";
import { PaintingsImageSlider } from "@/components/PaintingsImageSlider";
import { PortableTextBlock } from "next-sanity";

export const revalidate = 5;

type Props = {
  params: Promise<{ painting: string }>;
};

interface GalleryImage {
  url: string | null;
  alt?: string | null;
  caption?: string | null;
}

export default async function Painting({ params }: Props) {
  const { painting: slug } = await params;
  const painting = await getPainting(slug);

  const imageUrls = (painting?.galleryImages ?? [])
    .map((g: GalleryImage) => g.url)
    .filter((url): url is string => typeof url === "string");

  if (!painting) {
    notFound();
  }

  return (
    <main className="painting-page-container">
      <PaintingsImageSlider
        imageUrls={imageUrls}
        yearCreated={painting.yearCreated ?? ""}
        paintingTitle={painting.title ?? ""}
        paintingDescription={
          (painting.description as PortableTextBlock[] | null) ?? []
        }
      />
    </main>
  );
}
