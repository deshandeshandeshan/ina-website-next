"use client";
import { useEffect } from "react";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function AdminPage() {
  useEffect(() => {
    const headerElement = document.getElementsByTagName("header");
    headerElement[0].style.display = "none";
    const footerElement = document.getElementsByTagName("footer");
    footerElement[0].style.display = "none";
  }, []);
  return <NextStudio config={config} />;
}
