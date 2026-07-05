"use client";

import { useState, useEffect } from "react";
import { PageBuilder } from "@/components/PageBuilder";
import { WORK_QUERY_RESULT } from "@/sanity/types";
import "./Work.css";

type Tab = "tattoo" | "illustration" | "painting";

type WorkTabsProps = {
  tattoo: NonNullable<WORK_QUERY_RESULT>["tattoo"];
  illustration: NonNullable<WORK_QUERY_RESULT>["illustration"];
  painting: NonNullable<WORK_QUERY_RESULT>["painting"];
};

const TABS: { key: Tab; label: string }[] = [
  { key: "tattoo", label: "TATTOO" },
  { key: "illustration", label: "ILLUSTRATION" },
  { key: "painting", label: "PAINTING" },
];

export function WorkTabs({ tattoo, illustration, painting }: WorkTabsProps) {
  const categories = { tattoo, illustration, painting };
  const availableTabs = TABS.filter((t) => categories[t.key]?.content?.length);

  const [activeTab, setActiveTab] = useState<Tab>(
    availableTabs[0]?.key ?? "tattoo"
  );
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const footer = document.querySelector(".footer-container") as HTMLElement;
    if (!footer) return;

    const update = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const overlap = window.innerHeight - footerTop;
      setBottomOffset(overlap > 0 ? overlap : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const activeContent = categories[activeTab]?.content;

  return (
    <>
      <div className="work-tabs" style={{ bottom: bottomOffset }}>
        {availableTabs.map(({ key, label }) => (
          <button
            key={key}
            className={`work-tab-button${activeTab === key ? " work-tab-button--active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {activeContent?.length ? (
        <PageBuilder
          content={
            activeContent as Parameters<typeof PageBuilder>[0]["content"]
          }
        />
      ) : null}
    </>
  );
}
