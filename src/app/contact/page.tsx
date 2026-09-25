import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Contact | ${site.company}`,
  description: `Contact ${site.company} for kitchen and bath remodeling in ${site.city}. Hours ${site.hours}. Call ${site.phone} or schedule a consult.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visit"
        h1="Contact"
        lede="Ready buyers should schedule a consult. Researchers can call. Both paths stay open."
      />
      <section className="pb-20 pt-10 lg:pb-28">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div>
          <dl className="space-y-5 text-[17px] leading-7">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Company</dt>
              <dd className="mt-1 text-ink">{site.company}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Address / NAP</dt>
              <dd className="mt-1 text-ink">{site.nap}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phoneTel}`} className="text-[22px] font-semibold text-accent">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Hours</dt>
              <dd className="mt-1 text-ink">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Service area</dt>
              <dd className="mt-1 text-ink">
                {site.city} · {site.cities}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Showroom</dt>
              <dd className="mt-1 text-ink">{site.showroom}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-line bg-bg-elevated p-6 md:p-8">
          <h2 className="font-serif text-[28px] text-ink">Next step</h2>
          <p className="mt-4 text-[17px] leading-7 text-ink-soft">
            Schedule a design consultation — short form, ZIP + project type included — or call during {site.hours}.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/schedule-consultation">Schedule My Free Consultation</Button>
            <Button href={`tel:${site.phoneTel}`} variant="secondary">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
