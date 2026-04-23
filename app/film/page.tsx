import { urlFor } from "@/sanity/lib/image";
import { getFilmWorks } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import "./Film.css";
import "@/components/Grid.css";

export const revalidate = 5;

export default async function FilmWorks() {
  const filmWorks = await getFilmWorks();

  return (
    <main className="film-works-page">
      <ul className="film-works-list selected-works-grid">
        {filmWorks.map((film) => (
          <li key={film._id} className="selected-works-item">
            <Link href={`/film/${film.slug}`} className="image-link link">
              {film.filmImage?.asset?.url && (
                <Image
                  src={urlFor(film.filmImage?.asset?.url)
                    .auto("format")
                    .quality(90)
                    .url()}
                  alt={film.filmImage?.alt || ""}
                  width={2160}
                  height={3840}
                  className="film-works-image"
                />
              )}
            </Link>
            <div className="film-works-info ">
              <div>
                <h2 className="film-works-title type-body-bold">
                  {film.title}
                </h2>
                <p className="type-body film-works-role">{film.role}</p>
              </div>
              <div>
                <Link
                  href={`/film/${film.slug}`}
                  className="type-body film-works-link text-red"
                >
                  See more &rarr;
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
