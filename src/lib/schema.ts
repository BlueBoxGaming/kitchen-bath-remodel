import { site } from "@/content/site";
import type { FaqItem } from "@/lib/types";

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.company,
    description: `Kitchen and bathroom remodeling in ${site.city}.`,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.nap,
      addressLocality: site.city,
      addressCountry: "US",
    },
    areaServed: site.cities,
    openingHours: site.hours,
    url: site.siteUrl,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.company,
    url: site.siteUrl,
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
