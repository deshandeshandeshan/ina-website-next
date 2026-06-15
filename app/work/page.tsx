import { PageBuilder } from "@/components/PageBuilder";
import { WORK_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity.utils";

export const revalidate = 5;

export default async function Work() {
  const workContent = await client.fetch(WORK_QUERY);

  return workContent?.content ? (
    <div className="work">
      <PageBuilder content={workContent.content} />
    </div>
  ) : null;
}
