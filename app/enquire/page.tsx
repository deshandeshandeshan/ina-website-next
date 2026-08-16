import type { Metadata } from "next";
import { getEnquire } from "@/sanity/sanity.utils";
import { EnquireForm } from "@/components/EnquireForm";
import "@/components/Grid.css";
import "./Enquire.css";
import { PortableText } from "next-sanity";
import { buildPageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const enquireContent = await getEnquire();
  return buildPageMetadata(enquireContent?.seo);
}

export default async function Enquire() {
  const enquireContent = await getEnquire();

  const faqs = enquireContent?.faqs ?? [];

  return (
    <main className="enquire-page">
      <div className="enquire-layout">
        {faqs.length > 0 && (
          <div className="enquire-faq-section">
            <h2 className="enquire-faq-heading type-details-regular spacing-24">
              FAQ
            </h2>
            <div className="enquire-faq-list">
              {faqs.map((faq, index) => (
                <details key={index} className="enquire-faq-item">
                  <summary className="enquire-faq-question type-body-bold">
                    {faq.faqTitle}
                  </summary>
                  <div className="enquire-faq-answer serif-L">
                    <PortableText value={faq.faqDescription ?? []} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="enquire-right">
          <EnquireForm />
        </div>
      </div>
    </main>
  );
}
