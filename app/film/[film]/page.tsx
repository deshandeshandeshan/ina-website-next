import { PageBuilder } from "@/components/PageBuilder";
import { getFilmWork } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";

export const revalidate = 5;

type Props = {
  params: Promise<{ film: string }>;
};

export default async function Film({ params }: Props) {
  const { film: slug } = await params;
  const film = await getFilmWork(slug);

  if (!film) {
    notFound();
  }

  return film?.content ? (
    <div>
      <PageBuilder content={film.content} />
    </div>
  ) : null;
}
