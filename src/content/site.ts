/**
 * Central company tokens and site facts.
 * Replace {{PLACEHOLDER}} values with real facts before launch.
 * Do not invent prices, license numbers, ratings, or promotions.
 */

export const site = {
  company: "Professional Craftsman Services",
  legalName: "Professional Craftsman Services LLC",
  operator: "Matt Lawver",
  nap: "{{NAP}}",
  phone: "{{PHONE}}",
  /** tel: href — keep placeholder literal until a real number exists */
  phoneTel: "{{PHONE}}",
  city: "Thornton, Colorado",
  /** Service-area phrase for contact line (city is already prefixed separately) */
  cities:
    "greater Denver metro, Golden Gate Canyon, adjacent Front Range neighborhoods, and surrounding mountain communities",
  hours: "{{HOURS}}",
  years: "{{YEARS}}",
  license: "{{LICENSE}}",
  insurance: "{{INSURANCE}}",
  warranty: "{{WARRANTY}}",
  showroom: "{{SHOWROOM}}",
  kitchenRange: "{{KITCHEN_RANGE}}",
  bathRange: "{{BATH_RANGE}}",
  financing: "{{FINANCING}}",
  crewModel: "{{CREW_MODEL}}",
  permits: "{{PERMITS}}",
  consultOffer: "{{CONSULT_OFFER}}",
  promo: "{{PROMO}}",
  /** Rating chip text only — never invent a numeric average */
  rating: "{{RATING}}",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://professional-craftsman-services.vercel.app",
} as const;

export type SiteTokens = typeof site;
