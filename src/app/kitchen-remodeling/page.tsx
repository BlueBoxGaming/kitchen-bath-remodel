import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Button } from "@/components/Button";
import { CostRange } from "@/components/CostRange";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroRoom } from "@/components/HeroRoom";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ReviewCard } from "@/components/ReviewCard";
import { kitchenFaqs } from "@/content/faqs";
import { processSteps } from "@/content/process";
import { projectsByRoom } from "@/content/projects";
import { reviewsForRoom } from "@/content/reviews";
import { site } from "@/content/site";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Kitchen Remodeling in ${site.city} | ${site.company}`,
  description: `Kitchen remodeling in ${site.city}. Layout, cabinets, counters, and a written scope after measure. Call ${site.phone} or schedule a consult.`,
  path: "/kitchen-remodeling",
});

export default function KitchenRemodelingPage() {
  const pairs = projectsByRoom("kitchen").slice(0, 3);
  const roomReviews = reviewsForRoom("kitchen");

  return (
    <>
      <JsonLd data={faqPageSchema(kitchenFaqs)} />
      <HeroRoom
        imageSrc="/images/hero-kitchen.jpg"
        imageAlt={`AI-generated finished kitchen for remodeling in ${site.city}. Not a client project.`}
        title={`Kitchen Remodeling in ${site.city}`}
        subtitle="A kitchen you can live and cook in — planned selections, clear timeline, and a written scope before demo."
      />

      <section className="section-y">
        <div className="container-site">
          <h2 className="heading-2">Before & after</h2>
          <p className="mt-4 max-w-[55ch] text-ink-soft">
            AI-generated before and after of the same room idea. Sliders work with one thumb — not hover-only. Replace with consented project photos.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pairs.map((project) => (
              <BeforeAfter
                key={project.id}
                beforeSrc={project.beforeImage}
                afterSrc={project.afterImage}
                beforeAlt={`${project.title} before — AI stand-in, not a client project`}
                afterAlt={`${project.title} after — AI stand-in, not a client project`}
                caption={project.title}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/portfolio?room=kitchen" variant="secondary" className="sm:!w-auto">
              See Kitchen Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-bg-elevated">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading-2">What&apos;s included</h2>
            <ul className="mt-6 space-y-3 text-[17px] leading-7 text-ink-soft">
              <li>Design consult and field measure</li>
              <li>Cabinet, counter, backsplash, and fixture selections against a written scope</li>
              <li>Plumbing and electrical coordination for the kitchen layout</li>
              <li>Dust control and daily cleanup expectations while we work in your house</li>
              <li>Final walkthrough and punch list</li>
            </ul>
          </div>
          <div>
            <h2 className="heading-2">What&apos;s not (until scoped)</h2>
            <ul className="mt-6 space-y-3 text-[17px] leading-7 text-ink-soft">
              <li>Whole-house structural changes outside the kitchen envelope</li>
              <li>Appliance packages you have not selected</li>
              <li>Hidden conditions found after demo — we stop, show you, and revise in writing</li>
              <li>HOA or municipal fees beyond what {site.permits} covers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <CostRange room="kitchen" />
        </div>
      </section>

      <section className="section-y border-t border-line bg-bg-elevated" aria-labelledby="kitchen-process">
        <div className="container-site">
          <h2 id="kitchen-process" className="heading-2">
            Process & timeline
          </h2>
          <p className="mt-4 max-w-[55ch] text-ink-soft">
            Design first, then build. Who is on site: {site.crewModel}. Permits: {site.permits}.
          </p>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} id="kitchen-process-steps" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <h2 className="heading-2">Kitchen reviews</h2>
          <p className="mt-4 max-w-[50ch] text-ink-soft">
            Kitchen-only sample placeholders. Live quotes replace these — chip stays {site.rating}.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {roomReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-bg-elevated">
        <div className="container-site">
          <h2 className="heading-2">Kitchen FAQ</h2>
          <div className="mt-8">
            <FaqAccordion items={kitchenFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Plan your kitchen consult"
        body={`${site.consultOffer}. Call ${site.phone} during ${site.hours}.`}
      />
    </>
  );
}
