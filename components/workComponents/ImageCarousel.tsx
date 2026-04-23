import { HOME_QUERYResult } from "@/sanity/types";
import { ImageSlider } from "../ImageSlider";

type imageCarouselProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "imageCarousel" }
>;

export function ImageCarousel({ title, carouselImages }: imageCarouselProps) {
  interface GalleryImage {
    url: string | null;
    alt?: string | null;
    caption?: string | null;
  }

  const imageUrls = (carouselImages ?? [])
    .map((g: GalleryImage) => g.url)
    .filter((url): url is string => typeof url === "string");

  return (
    <section className="image-carousel mobile-padding">
      <div className="carousel-container">
        <ImageSlider
          title={title}
          className="image-slider"
          imageUrls={imageUrls}
        />
      </div>
    </section>
  );
}
