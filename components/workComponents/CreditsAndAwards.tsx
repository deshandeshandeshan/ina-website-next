import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./CreditsAndAwards.css";

type creditsAndAwardsProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "creditsAndAwards" }
>;

export function CreditsAndAwards({
  credits,
  awards,
  exhibitions,
  image,
}: creditsAndAwardsProps) {
  return (
    <section className="credits-and-awards mobile-padding ca-full-screen-grid">
      <h2 className="ca-title type-sub ca-display-none">Credits & Awards</h2>
      <div className="ca-image-container spacing-32">
        {image ? (
          <Image
            src={urlFor(image).auto("format").quality(90).url()}
            alt={image?.alt || ""}
            width={2160}
            height={3840}
            className="event-img"
          />
        ) : null}
      </div>
      <div className="">
        {credits && credits.length > 0 && (
          <div className="credits spacing-32">
            <h2 className="credits-title type-sub spacing-12">Credits</h2>
            <ul className="credits-list">
              {credits?.map((credit, index) => (
                <li key={index} className="credit-item credits-and-awards-grid">
                  <h3 className="credits-role type-body-bold spacing-16 text-grey">
                    {credit.roleInWork}
                  </h3>
                  <p className="credits-name type-body">{credit.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {awards && awards.length > 0 && (
          <div className="awards">
            <h2 className="awards-title type-sub spacing-12">Awards</h2>
            <ul className="awards-list">
              {awards.map((award, index) => (
                <li key={index} className="award-item credits-and-awards-grid">
                  <h3 className="award-name type-body-bold spacing-16 text-grey">
                    {award.awardName}
                  </h3>
                  <p className="awarded-from type-body">{award.awardedFrom}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {exhibitions && exhibitions.length > 0 && (
          <div className="exhibitions">
            <h2 className="exhibitions-title type-sub spacing-12">
              Exhibitions
            </h2>
            <ul className="exhibitions-list">
              {exhibitions.map((exhibition, index) => (
                <li
                  key={index}
                  className="exhibition-item credits-and-awards-grid"
                >
                  <h3 className="exhibition-name type-body-bold spacing-16 text-grey">
                    {exhibition.exhibitionName}
                  </h3>
                  <p className="exhibited-at type-body">
                    {exhibition.exhibitedAt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
