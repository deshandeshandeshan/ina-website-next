import { WORK_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity.utils";
import { WorkTabs } from "./WorkTabs";

export const revalidate = 5;

export default async function Work() {
  const workContent = await client.fetch(WORK_QUERY);

  if (!workContent) return null;

  return (
    <div className="work">
      <WorkTabs
        tattoo={workContent.tattoo}
        illustration={workContent.illustration}
        painting={workContent.painting}
      />
    </div>
  );
}
