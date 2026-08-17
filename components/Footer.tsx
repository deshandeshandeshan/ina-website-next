import { getFooterSettings } from "@/sanity/sanity.utils";
import "./Footer.css";
import "@/app/globals.css";
import Link from "next/link";
import "@/components/Grid.css";

export default async function Footer() {
  const footerContent = await getFooterSettings();

  return (
    <footer className="footer-container">
      <div className="footer footer-framing grid">
        <div className="footer-title">
          <h3 className="type-details-regular">INA RUFINO</h3>
        </div>
        <div className="footer-page-links">
          <ul>
            <li className="spacing-4 type-details-regular">
              <Link href="/">HOME</Link>
            </li>
            <li className="spacing-4 type-details-regular">
              <Link href="/work">WORK</Link>
            </li>
            <li className="spacing-4 type-details-regular">
              <Link href="/book">BOOK</Link>
            </li>
            <li className="spacing-4 type-details-regular">
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="book-li">
          <h1 className="book-link-container">
            <Link href="/book" className="book-link ">
              BOOK NOW
            </Link>
          </h1>
        </div>
        <div className="footer-location">
          <h3 className="type-details-regular">NAARM, AUSTRALIA</h3>
        </div>
        {footerContent?.email && (
          <a
            href={`mailto:${footerContent.email}`}
            className=" uppercase-text footer-email type-details-regular"
          >
            {footerContent.email}
          </a>
        )}
        {footerContent?.siteDesignAndDevelopment?.name && (
          <div className="footer-development">
            <p className=" uppercase-text type-details-regular">
              Dev by{" "}
              {footerContent.siteDesignAndDevelopment.url ? (
                <a
                  href={footerContent.siteDesignAndDevelopment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-development-link"
                >
                  {footerContent.siteDesignAndDevelopment.name}
                </a>
              ) : (
                footerContent.siteDesignAndDevelopment.name
              )}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
