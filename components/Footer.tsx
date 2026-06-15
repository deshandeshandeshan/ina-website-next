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
          <a
            href={`mailto:${footerContent?.email}`}
            className="type-body uppercase-text"
          >
            {footerContent?.email}
          </a>
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
        <div className="book-link-container">
          <h1 className="book-link-container">
            <Link href="/enquire" className="book-link">
              BOOK A TATTOO
            </Link>
          </h1>
        </div>
        <div className="footer-socials">
          <ul className="footer-social-links">
            {footerContent?.socialLinks?.map((socialLink, index) => {
              return (
                <li key={index} className="type-body">
                  <a
                    href={socialLink.url || ""}
                    target="_blank"
                    rel="noopener noreferrer uppercase-text"
                  >
                    {socialLink.platform}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-location">
          <h3 className="type-body-bold">NAARM, AUSTRALIA</h3>
        </div>
      </div>
    </footer>
  );
}
