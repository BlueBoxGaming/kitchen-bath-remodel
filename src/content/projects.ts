import type { Project } from "@/lib/types";
import { site } from "@/content/site";

/**
 * Sample portfolio entries. Photos are AI-generated stand-ins.
 * Replace photos and neighborhoods with consented project sets.
 */
export const projects: Project[] = [
  {
    id: "k1",
    slug: "open-kitchen-island",
    title: "Open kitchen with island seating",
    room: "kitchen",
    styles: ["transitional", "contemporary"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Replace with a real scope: layout change notes, cabinet line, counter material, and timeline once photos are consented.",
    beforeImage: "/images/kitchen-before-1.jpg",
    afterImage: "/images/kitchen-after-1.jpg",
    cardImage: "/images/portfolio-kitchen-1.jpg",
  },
  {
    id: "k2",
    slug: "shaker-galley-refresh",
    title: "Galley kitchen refresh",
    room: "kitchen",
    styles: ["traditional", "farmhouse"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Replace with real materials and a one-paragraph scope after you have consented photography.",
    beforeImage: "/images/kitchen-before-2.jpg",
    afterImage: "/images/kitchen-after-2.jpg",
    cardImage: "/images/portfolio-kitchen-2.jpg",
  },
  {
    id: "k3",
    slug: "modern-kitchen-flat-panel",
    title: "Modern flat-panel kitchen",
    room: "kitchen",
    styles: ["modern", "contemporary"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Style-tagged for filter demos only — swap for a finished {{CITY}} kitchen.",
    beforeImage: "/images/kitchen-before-3.jpg",
    afterImage: "/images/kitchen-after-3.jpg",
    cardImage: "/images/portfolio-kitchen-3.jpg",
  },
  {
    id: "k4",
    slug: "family-kitchen-pantry",
    title: "Family kitchen with pantry wall",
    room: "kitchen",
    styles: ["transitional", "traditional"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Add neighborhood (not street address), materials, and build weeks when ready.",
    beforeImage: "/images/kitchen-before-1.jpg",
    afterImage: "/images/kitchen-after-2.jpg",
    cardImage: "/images/portfolio-kitchen-4.jpg",
  },
  {
    id: "b1",
    slug: "primary-bath-spa",
    title: "Primary bath with double vanity",
    room: "bath",
    styles: ["transitional", "contemporary"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Replace with a real primary bath: shower/tub choice, tile, and fixture notes.",
    beforeImage: "/images/bath-before-1.jpg",
    afterImage: "/images/bath-after-1.jpg",
    cardImage: "/images/portfolio-bath-1.jpg",
  },
  {
    id: "b2",
    slug: "tub-to-shower-conversion",
    title: "Tub-to-shower conversion",
    room: "bath",
    styles: ["modern", "contemporary"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Document accessibility goals and waterproofing approach when photos are ready.",
    beforeImage: "/images/bath-before-2.jpg",
    afterImage: "/images/bath-after-2.jpg",
    cardImage: "/images/portfolio-bath-2.jpg",
  },
  {
    id: "b3",
    slug: "guest-bath-refresh",
    title: "Guest bath refresh",
    room: "bath",
    styles: ["traditional", "farmhouse"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Swap for a finished guest bath with consented before/after pairs.",
    beforeImage: "/images/bath-before-3.jpg",
    afterImage: "/images/bath-after-3.jpg",
    cardImage: "/images/portfolio-bath-3.jpg",
  },
  {
    id: "b4",
    slug: "hall-bath-layout",
    title: "Hall bath layout update",
    room: "bath",
    styles: ["transitional", "modern"],
    neighborhood: `${site.city} area — sample project`,
    summary:
      "Sample placeholder project. Include who pulls permits ({{PERMITS}}) and timeline once confirmed.",
    beforeImage: "/images/bath-before-1.jpg",
    afterImage: "/images/bath-after-2.jpg",
    cardImage: "/images/portfolio-bath-4.jpg",
  },
];

export function projectsByRoom(room: Project["room"]) {
  return projects.filter((p) => p.room === room);
}
