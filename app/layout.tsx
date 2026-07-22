import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/sanity/sanity.utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const title = settings?.siteTitle ?? "Ina Rufino";
  const description = settings?.defaultDescription ?? "";

  return {
    title,
    description,
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
      <head></head>
      <body className="body">
        <div className="site">
          <Nav />
          <div className="nav-spacer" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
