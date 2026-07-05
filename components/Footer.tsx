import { getFooterSettings } from "@/sanity/sanity.utils";
import "./Footer.css";
import "@/app/globals.css";
import Link from "next/link";

export default async function Footer() {
  const footerContent = await getFooterSettings();

  return (
    <footer className="footer-container">
      <div className="footer footer-framing">
        <div className="footer-title">
          <h3 className="type-body-bold">INA RUFINO</h3>
        </div>
        <div className="footer-page-links">
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/work">WORK</Link>
            </li>
            <li>
              <Link href="/enquire">ENQUIRE</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="book-li">
          <h1 className="book-link-container">
            <Link href="/enquire" className="book-link">
              Enquire Now
            </Link>
          </h1>
        </div>
        <div className="footer-location">
          <h3 className="type-body-bold">NAARM, AUSTRALIA</h3>
        </div>
        {footerContent?.email && (
          <div className="footer-email">
            <a
              href={`mailto:${footerContent.email}`}
              className="type-body-bold uppercase-text"
            >
              {footerContent.email}
            </a>
          </div>
        )}
        {footerContent?.siteDesignAndDevelopment && (
          <div className="footer-development">
            <p className="type-body-bold uppercase-text">
              {footerContent.siteDesignAndDevelopment}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
