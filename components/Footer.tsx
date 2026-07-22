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
          <h3 className="serif-L">INA RUFINO</h3>
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
              <Link href="/enquire">ENQUIRE</Link>
            </li>
            <li className="spacing-4 type-details-regular">
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="book-li">
          <h1 className="book-link-container">
            <Link href="/enquire" className="book-link ">
              ENQUIRE NOW
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
        {footerContent?.siteDesignAndDevelopment && (
          <div className="footer-development">
            <p className=" uppercase-text type-details-regular">
              Dev by {footerContent.siteDesignAndDevelopment}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
