import type { Metadata } from "next";
import EventsPage from "../../page";

export const metadata: Metadata = {
  title: { absolute: "Parul University Goa Events | Campus Workshops & Webinars" },
  description:
    "Discover upcoming open days, webinars, workshops, fests, hackathons, and guest sessions happening at Parul University Goa.",
};

export default function EventsPaginatedPage() {
  return <EventsPage />;
}
