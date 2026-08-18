"use client";

import { useEffect } from "react";
import { pushToDataLayer } from "@/lib/analytics";

export default function DataLayerClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const element = target.closest(
        "[data-track]"
      ) as HTMLElement | null;

      if (!element) return;

        const eventName =
        element.getAttribute("data-track-event") ||
        "element_click";

      const clickText =
        element.getAttribute("data-track-text") ||
        element.textContent?.trim() ||
        "NA";

      const clickHeader =
        element.getAttribute("data-track-header") ||
        "NA";

      const clickCategory =
        element.getAttribute("data-track-category") ||
        "NA";

      const clickSubcategory =
        element.getAttribute("data-track-subcategory") ||
        "NA";

      const formType =
        element.getAttribute("data-track-form-type") ||
        "NA";

      const courseName =
        element.getAttribute("data-track-course-name") ||
        "NA";

      const videoTitle =
        element.getAttribute("data-track-video-title") ||
        "NA";

      const videoUrl =
        element.getAttribute("data-track-video-url") ||
        "NA";

      pushToDataLayer(eventName, {
        click_text: clickText,
        click_header: clickHeader,
        click_category: clickCategory,
        click_subcategory: clickSubcategory,
        form_type: formType,
        course_name: courseName,
        video_title: videoTitle,
        video_url: videoUrl,

        element_type: element.tagName.toLowerCase(),

        element_url:
          element instanceof HTMLAnchorElement
            ? element.href
            : "NA",
      });
    };

    // Use { capture: true } to catch clicks before propagation is stopped
    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}