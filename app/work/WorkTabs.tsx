"use client";

import { useState, useEffect } from "react";
import { PageBuilder } from "@/components/PageBuilder";
import { WORK_QUERY_RESULT } from "@/sanity/types";
import "./Work.css";

type WorkTabsProps = {
  categories: NonNullable<WORK_QUERY_RESULT>["categories"];
};

export function WorkTabs({ categories }: WorkTabsProps) {
  const availableTabs = (categories ?? []).filter((c) => c.content?.length);

  const [activeTab, setActiveTab] = useState<string | undefined>(
    availableTabs[0]?._key
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

  const activeContent = availableTabs.find((c) => c._key === activeTab)
    ?.content;

  return (
    <>
      <div className="work-tabs" style={{ bottom: bottomOffset }}>
        {availableTabs.map(({ _key, categoryName }) => (
          <button
            key={_key}
            className={`work-tab-button${activeTab === _key ? " work-tab-button--active" : ""}`}
            onClick={() => {
              setActiveTab(_key);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {categoryName?.toUpperCase()}
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
