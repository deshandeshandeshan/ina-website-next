import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/sanity/sanity.utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const title = settings?.siteTitle ?? "Zishun Studios";
  const description =
    settings?.defaultDescription ??
    "A Creative Production Company by Zed Xu 徐榛 Zed Xu (b. 1993, CN, NZ) is a filmmaker, painter and performance artist.";

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  return (
    <html lang="en">
      <body className="body">
        <div className="site">
          <Nav navSubheading={settings?.navSubheading} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
