import type { Metadata } from "next";
import { ConsultForm } from "@/components/ConsultForm";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Schedule Consultation | ${site.company}`,
  description: `Schedule a kitchen or bath design consultation in ${site.city}. Short form — name, phone, ZIP, project type, timing. Call ${site.phone}.`,
  path: "/schedule-consultation",
});

export default function ScheduleConsultationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Consult"
        h1="Schedule a design consultation"
        lede={`${site.consultOffer}. Tell us the room, your ZIP, and timing — we will call during ${site.hours}.`}
      />
      <section className="pb-20 pt-10 lg:pb-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex min-h-[64px] items-center justify-center rounded-lg bg-accent px-6 text-[22px] font-semibold text-accent-text lg:justify-start lg:text-left"
            data-cta="consult-page-call"
          >
            Call {site.phone}
          </a>
          <p className="mt-4 text-[15px] text-ink-soft">
            Prefer talking first? The phone is always a valid path — no form required.
          </p>
        </div>
        <ConsultForm />
      </div>
      </section>
    </>
  );
}
