import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { ProcessSteps } from "@/components/ProcessSteps";
import { processSteps } from "@/content/process";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `About | ${site.company}`,
  description: `About ${site.company} — kitchen and bath remodeling in ${site.city}. License, insurance, warranty, and crew model use confirmed placeholders until company facts are supplied.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio"
        h1={`About ${site.company}`}
        lede={`We remodel kitchens and bathrooms in ${site.city} and surrounding areas (${site.cities}). The work is design-build focused: measure twice, select against a written scope, then build with clear expectations about dust, schedule, and who is in your house. Years in market: ${site.years}. Showroom: ${site.showroom}. How we staff jobs: ${site.crewModel}.`}
      />

      <section className="section-y border-t border-line bg-bg-elevated">
        <div className="container-site">
          <h2 className="heading-2">License, insurance & warranty</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            <li className="rounded-2xl border border-line bg-bg p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">License</p>
              <p className="mt-2 text-[17px] text-ink">{site.license}</p>
            </li>
            <li className="rounded-2xl border border-line bg-bg p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Insurance</p>
              <p className="mt-2 text-[17px] text-ink">{site.insurance}</p>
            </li>
            <li className="rounded-2xl border border-line bg-bg p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Warranty</p>
              <p className="mt-2 text-[17px] text-ink">{site.warranty}</p>
            </li>
          </ul>
          <p className="mt-6 max-w-[60ch] text-ink-soft">
            Permits: {site.permits}. Financing: {site.financing}. Current promo: {site.promo}.
          </p>
        </div>
      </section>

      <section className="section-y" aria-labelledby="about-process">
        <div className="container-site">
          <h2 id="about-process" className="heading-2">
            How we work
          </h2>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} id="about-process-steps" />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="container-site text-center">
          <h2 className="heading-2">Meet for a consult</h2>
          <p className="mx-auto mt-4 max-w-[42ch] text-ink-soft">
            {site.consultOffer}. Call {site.phone} during {site.hours}.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/schedule-consultation" className="sm:!w-auto">
              Schedule My Free Consultation
            </Button>
            <Button href={`tel:${site.phoneTel}`} variant="secondary" className="sm:!w-auto">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
