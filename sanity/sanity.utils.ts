import { createClient } from "next-sanity";
import {
  HOME_QUERY,
  ABOUT_QUERY,
  FOOTER_SETTINGS,
  SITE_SETTINGS,
  ENQUIRE_QUERY,
  WORK_QUERY,
} from "./lib/queries";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2025-07-23";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Fetches are tagged with the document's Sanity `_type` so the Sanity
// webhook (see app/api/revalidate/route.ts) can call revalidateTag(_type)
// and get near-instant updates on publish. The `revalidate` window is just
// a fallback in case a webhook delivery is ever missed.
export async function getHome() {
  return client.fetch(HOME_QUERY, {}, { next: { revalidate: 3600, tags: ["home"] } });
}

export async function getAbout() {
  return client.fetch(ABOUT_QUERY, {}, { next: { revalidate: 3600, tags: ["about"] } });
}

export async function getWork() {
  return client.fetch(WORK_QUERY, {}, { next: { revalidate: 3600, tags: ["work"] } });
}

export async function getFooterSettings() {
  return client.fetch(
    FOOTER_SETTINGS,
    {},
    { next: { revalidate: 3600, tags: ["footerSettings"] } },
  );
}

export async function getSiteSettings() {
  return client.fetch(
    SITE_SETTINGS,
    {},
    { next: { revalidate: 3600, tags: ["siteSettings"] } },
  );
}

export async function getEnquire() {
  return client.fetch(ENQUIRE_QUERY, {}, { next: { revalidate: 3600, tags: ["enquire"] } });
}
