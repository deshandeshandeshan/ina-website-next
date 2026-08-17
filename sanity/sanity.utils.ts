import { createClient } from "next-sanity";
import {
  HOME_QUERY,
  ABOUT_QUERY,
  FOOTER_SETTINGS,
  SITE_SETTINGS,
  BOOK_QUERY,
  WORK_QUERY,
} from "./lib/queries";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2025-07-23";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Fetches are tagged with the document's Sanity `_type` so the Sanity
// webhook (see app/api/revalidate/route.ts) can call revalidateTag(_type)
// and get near-instant updates on publish. The `revalidate` window is just
// a fallback in case a webhook delivery is ever missed.
//
// That webhook targets the deployed URL, not localhost, so in dev we skip
// the cache entirely and always hit Sanity directly.
function cacheOptions(tag: string) {
  return process.env.NODE_ENV === "development"
    ? ({ cache: "no-store" } as const)
    : { next: { revalidate: 3600, tags: [tag] } };
}

export async function getHome() {
  return client.fetch(HOME_QUERY, {}, cacheOptions("home"));
}

export async function getAbout() {
  return client.fetch(ABOUT_QUERY, {}, cacheOptions("about"));
}

export async function getWork() {
  return client.fetch(WORK_QUERY, {}, cacheOptions("work"));
}

export async function getFooterSettings() {
  return client.fetch(FOOTER_SETTINGS, {}, cacheOptions("footerSettings"));
}

export async function getSiteSettings() {
  return client.fetch(SITE_SETTINGS, {}, cacheOptions("siteSettings"));
}

export async function getBook() {
  return client.fetch(BOOK_QUERY, {}, cacheOptions("book"));
}
