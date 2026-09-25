import { serviceCities } from "@/content/cities";
import { site } from "@/content/site";
import type { FaqItem } from "@/lib/types";

function isPlaceholder(value: string): boolean {
  return value.startsWith("{{") && value.endsWith("}}");
}

export function businessSchema() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: "Thornton",
    addressRegion: "CO",
    addressCountry: "US",
  };

  if (!isPlaceholder(site.nap)) {
    address.streetAddress = site.nap;
  }

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.company,
    legalName: site.legalName,
    description: `Kitchen and bathroom remodeling in ${site.city}.`,
    ...(isPlaceholder(site.phone) ? {} : { telephone: site.phone }),
    address,
    areaServed: serviceCities.map((name) => ({
      "@type": "Place",
      name,
    })),
    ...(isPlaceholder(site.hours) ? {} : { openingHours: site.hours }),
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
