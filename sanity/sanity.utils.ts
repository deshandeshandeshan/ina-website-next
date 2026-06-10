import { createClient } from "next-sanity";
import {
  HOME_QUERY,
  ABOUT_QUERY,
  FOOTER_SETTINGS,
  SITE_SETTINGS,
  ENQUIRE_QUERY,
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

export async function getHome() {
  return client.fetch(HOME_QUERY);
}

export async function getAbout() {
  return client.fetch(ABOUT_QUERY);
}

export async function getFooterSettings() {
  return client.fetch(FOOTER_SETTINGS);
}

export async function getSiteSettings() {
  return client.fetch(SITE_SETTINGS, {}, { next: { revalidate: 60 } });
}

export async function getEnquire() {
  return client.fetch(ENQUIRE_QUERY);
}
