import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./EventBlock.css";
import "../Grid.css";
import { PortableText } from "next-sanity";

type eventBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "eventBlock" }
>;

export function EventBlock({
  title,
  locationTitle,
  eventImage,
  description,
  timeAndDate,
  location,
  details,
  infoAndTickets,
}: eventBlockProps) {
  return (
    <section className="event-block grid">
      <div className="event-block-titles">
        <h2 className="event-block-title type-sub spacing-4">{title}</h2>
        <h3 className="event-block-location-title type-sub text-grey">
          {locationTitle}
        </h3>
      </div>
      <div className="event-img-container">
        {eventImage ? (
          <Image
            src={urlFor(eventImage).auto("format").quality(90).url()}
            alt={eventImage?.alt || ""}
            width={2160}
            height={3840}
            className="event-img"
          />
        ) : null}
      </div>
      <ul className="event-details-list">
        <li className="event-list-item event-description event-details-grid spacing-16">
          <h3 className="type-body-bold text-grey event-detail-header">
            Description
          </h3>
          <p className="type-body event-detail">
            <PortableText value={description ?? []} />
          </p>
        </li>
        <li className="event-list-item event-date-time event-details-grid spacing-16">
          <h3 className="type-body-bold text-grey event-detail-header">
            Event Time
          </h3>
          <p className="type-body event-detail">{timeAndDate?.date}</p>
          <p className="type-body event-detail">{timeAndDate?.time}</p>
        </li>
        <li className="event-list-item event-location event-details-grid spacing-16">
          <h3 className="type-body-bold text-grey event-detail-header">
            Location
          </h3>
          <p className="type-body event-detail">{location}</p>
        </li>
        <li className="event-list-item event-details event-details-grid spacing-16">
          <h3 className="type-body-bold text-grey event-detail-header">
            Details
          </h3>
          <p className="type-body event-detail">{details}</p>
        </li>
        <li className="event-list-item event-info-tickets event-details-grid spacing-16">
          <h3 className="type-body-bold text-grey event-detail-header">
            Info & Tickets
          </h3>
          <a
            href={infoAndTickets || "https://zishunstudios.com"}
            className="type-body event-detail text-red"
          >
            Info and tickets here →
          </a>
        </li>
      </ul>
    </section>
  );
}
