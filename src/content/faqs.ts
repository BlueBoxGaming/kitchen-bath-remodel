import type { FaqItem } from "@/lib/types";
import { site } from "@/content/site";

export const kitchenFaqs: FaqItem[] = [
  {
    question: "How long will we be without a full kitchen?",
    answer:
      "Design and selections typically come first; active build length depends on layout changes, millwork lead times, and site conditions. We map a temporary cooking plan before demo so you know what to expect week by week.",
  },
  {
    question: "Who pulls permits?",
    answer: `${site.permits}. We confirm what your municipality requires for plumbing, electrical, and structural work before we schedule demolition.`,
  },
  {
    question: "What does a typical kitchen cost in this market?",
    answer: `Typical kitchen projects fall in ${site.kitchenRange}. You get a written scope after measure — never a vague verbal number.`,
  },
  {
    question: "Do you offer financing?",
    answer: `${site.financing}. Ask during your consult for options that fit your timeline.`,
  },
  {
    question: "What warranty do we get?",
    answer: `Workmanship coverage: ${site.warranty}. Manufacturer warranties on appliances and materials follow each product’s terms.`,
  },
];

export const bathFaqs: FaqItem[] = [
  {
    question: "How long is a typical bath remodel?",
    answer:
      "Primary baths with layout changes take longer than a like-for-like refresh. We share a dated schedule after measure so you know when the room is offline and when fixtures arrive.",
  },
  {
    question: "Who handles permits and inspections?",
    answer: `${site.permits}. Wet rooms need waterproofing details that inspectors care about — we build those into the scope.`,
  },
  {
    question: "What does a typical bath cost here?",
    answer: `Typical bath projects fall in ${site.bathRange}. You get a written scope after measure.`,
  },
  {
    question: "Can we convert a tub to a shower?",
    answer:
      "Yes when the layout, plumbing, and waterproofing allow it. We flag accessibility and curb choices early so the finished shower fits how you actually start the day.",
  },
  {
    question: "What about warranty and who works in the house?",
    answer: `${site.crewModel}. Warranty: ${site.warranty}.`,
  },
];
