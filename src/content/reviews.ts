import type { Review } from "@/lib/types";
import { site } from "@/content/site";

/**
 * Sample review placeholders — not verified Google ratings.
 * Do not invent star averages. Chip text remains {{RATING}}.
 */
export const reviews: Review[] = [
  {
    id: "rk1",
    room: "kitchen",
    author: "Sample — A. M.",
    quote:
      "Sample review — replace with a real {{CITY}} client. Placeholder copy about clear communication during a kitchen remodel and living through the dust with a plan.",
    note: `Placeholder kitchen review for ${site.city}. Not a verified rating.`,
  },
  {
    id: "rk2",
    room: "kitchen",
    author: "Sample — J. R.",
    quote:
      "Sample review — replace with a real {{CITY}} client. Placeholder about selections staying on schedule and a kitchen that works for cooking again.",
    note: `Placeholder kitchen review for ${site.city}. Not a verified rating.`,
  },
  {
    id: "rk3",
    room: "kitchen",
    author: "Sample — T. L.",
    quote:
      "Sample review — replace with a real {{CITY}} client. Placeholder about a single point of contact and a written scope that matched the finished kitchen.",
    note: `Placeholder kitchen review for ${site.city}. Not a verified rating.`,
  },
  {
    id: "rb1",
    room: "bath",
    author: "Sample — S. K.",
    quote:
      "Sample review — replace with a real {{CITY}} client. Placeholder about a primary bath that works every morning and a crew that respected the house.",
    note: `Placeholder bath review for ${site.city}. Not a verified rating.`,
  },
  {
    id: "rb2",
    room: "bath",
    author: "Sample — D. P.",
    quote:
      "Sample review — replace with a real {{CITY}} client. Placeholder about a tub-to-shower conversion that felt calm from demo to punch list.",
    note: `Placeholder bath review for ${site.city}. Not a verified rating.`,
  },
  {
    id: "rb3",
    room: "bath",
    author: "Sample — M. C.",
    quote:
      "Sample review — replace with a real {{CITY}} client. Placeholder about waterproofing peace of mind and finishes that still look sharp.",
    note: `Placeholder bath review for ${site.city}. Not a verified rating.`,
  },
];

export function reviewsForRoom(room: "kitchen" | "bath") {
  return reviews.filter((r) => r.room === room || r.room === "both");
}
