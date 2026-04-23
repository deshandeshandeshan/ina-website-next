import { getFooterSettings } from "@/sanity/sanity.utils";
import "./Footer.css";
import "@/app/globals.css";

export default async function Footer() {
  const footerContent = await getFooterSettings();

  return (
    <footer className="footer">
      <div className="footer-details">
        <h3 className="type-body-bold">ZISHUN STUDIOS</h3>
        <a
          href={`mailto:${footerContent?.email}`}
          className="type-body uppercase-text"
        >
          {footerContent?.email}
        </a>
      </div>
      <div className="footer-socials">
        <h3 className="type-body-bold">SOCIALS</h3>
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
      <div className="footer-copyright">
        <h3 className="type-body-bold">COPYRIGHT</h3>
        <p className="type-body uppercase-text">2025 © All Rights Reserved</p>
      </div>
    </footer>
  );
}
