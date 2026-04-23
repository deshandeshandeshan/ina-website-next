import { PageBuilder } from "@/components/PageBuilder";
import { getPerformanceWork } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";

export const revalidate = 5;

type Props = {
  params: Promise<{ performance: string }>;
};

export default async function Performance({ params }: Props) {
  const { performance: slug } = await params;
  const performance = await getPerformanceWork(slug);

  if (!performance) {
    notFound();
  }

  return performance?.content ? (
    <div>
      <PageBuilder content={performance.content} />
    </div>
  ) : null;
}
