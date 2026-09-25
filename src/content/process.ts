import type { ProcessStep } from "@/lib/types";
import { site } from "@/content/site";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Design consult",
    body: `${site.consultOffer}. We walk your goals, layout constraints, and how you actually use the room — then decide if we are a fit.`,
  },
  {
    step: 2,
    title: "Measure & design",
    body: "Accurate field measure, layout options, and selections planning so you can see how cabinets, fixtures, and finishes work together before demolition.",
  },
  {
    step: 3,
    title: "Selections",
    body: "Cabinetry, counters, tile, plumbing, and lighting — chosen against a written scope so changes stay intentional, not accidental.",
  },
  {
    step: 4,
    title: "Build",
    body: `${site.crewModel}. Dust control, clear daily expectations, and a single point of contact while we work in your house.`,
  },
  {
    step: 5,
    title: "Walkthrough & warranty",
    body: `Final punch list together. Workmanship coverage: ${site.warranty}.`,
  },
];
