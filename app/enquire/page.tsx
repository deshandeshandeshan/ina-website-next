import { getEnquire } from "@/sanity/sanity.utils";
import { EnquireForm } from "@/components/EnquireForm";
import "@/components/Grid.css";
import "./Enquire.css";

export const revalidate = 5;

export default async function Enquire() {
  const enquireContent = await getEnquire();

  const faqs = enquireContent?.faqs ?? [];

  return (
    <main className="enquire-page">
      <div className="enquire-layout">
        {faqs.length > 0 && (
          <div className="enquire-faq-section">
            <h2 className="enquire-faq-heading type-body-bold spacing-24">
              FAQ
            </h2>
            <div className="enquire-faq-list">
              {faqs.map((faq, index) => (
                <details key={index} className="enquire-faq-item">
                  <summary className="enquire-faq-question type-body-bold">
                    {faq.faqTitle}
                  </summary>
                  <p className="enquire-faq-answer type-body">
                    {faq.faqDescription}
                  </p>
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
