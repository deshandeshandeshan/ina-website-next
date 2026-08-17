import type { Metadata } from "next";
import { getBook } from "@/sanity/sanity.utils";
import { BookForm } from "@/components/BookForm";
import "@/components/Grid.css";
import "./book.css";
import { PortableText } from "next-sanity";
import { buildPageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const bookContent = await getBook();
  return buildPageMetadata(bookContent?.seo);
}

export default async function Book() {
  const bookContent = await getBook();

  const faqs = bookContent?.faqs ?? [];

  return (
    <main className="book-page">
      <div className="book-layout">
        {faqs.length > 0 && (
          <div className="book-faq-section">
            <h2 className="book-faq-heading type-details-regular spacing-24">
              FAQ
            </h2>
            <div className="book-faq-list">
              {faqs.map((faq, index) => (
                <details key={index} className="book-faq-item">
                  <summary className="book-faq-question type-body-bold">
                    {faq.faqTitle}
                  </summary>
                  <div className="book-faq-answer serif-L">
                    <PortableText value={faq.faqDescription ?? []} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="book-right">
          <BookForm />
        </div>
      </div>
    </main>
  );
}
