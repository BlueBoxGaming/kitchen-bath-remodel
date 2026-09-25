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
import { bathFaqs } from "@/content/faqs";
import { processSteps } from "@/content/process";
import { projectsByRoom } from "@/content/projects";
import { reviewsForRoom } from "@/content/reviews";
import { site } from "@/content/site";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Bathroom Remodelers in ${site.city} | ${site.company}`,
  description: `Bathroom remodeling in ${site.city}. Primary baths, hall baths, and tub-to-shower work with a written scope after measure. Call ${site.phone}.`,
  path: "/bathroom-remodeling",
});

export default function BathroomRemodelingPage() {
  const pairs = projectsByRoom("bath").slice(0, 3);
  const roomReviews = reviewsForRoom("bath");

  return (
    <>
      <JsonLd data={faqPageSchema(bathFaqs)} />
      <HeroRoom
        imageSrc="/images/hero-bath.jpg"
        imageAlt={`AI-generated finished bathroom for remodeling in ${site.city}. Not a client project.`}
        title={`Bathroom Remodeling in ${site.city} — Built to Last the Next Decade`}
        subtitle="A bath that works every morning — waterproofing details, selections that fit the room, and a crew that protects the rest of the house."
      />

      <section className="section-y">
        <div className="container-site">
          <h2 className="heading-2">Before & after</h2>
          <p className="mt-4 max-w-[55ch] text-ink-soft">
            AI-generated before and after of the same room idea. Compare with the slider — works without hover. Replace with consented project photos.
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
            <Button href="/portfolio?room=bath" variant="secondary" className="sm:!w-auto">
              See bath projects
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-bg-elevated">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading-2">What&apos;s included</h2>
            <ul className="mt-6 space-y-3 text-[17px] leading-7 text-ink-soft">
              <li>Design consult and accurate field measure</li>
              <li>Vanity, tile, plumbing fixture, and lighting selections</li>
              <li>Waterproofing approach for wet walls and floors</li>
              <li>Coordination for tub-to-shower or layout updates when scoped</li>
              <li>Final walkthrough and punch list</li>
            </ul>
          </div>
          <div>
            <h2 className="heading-2">What&apos;s not (until scoped)</h2>
            <ul className="mt-6 space-y-3 text-[17px] leading-7 text-ink-soft">
              <li>Whole-home plumbing risers outside the bath</li>
              <li>Tile or fixture upgrades not on the signed scope</li>
              <li>Surprises behind the wall — documented change orders only</li>
              <li>Fees beyond what {site.permits} covers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <CostRange room="bath" />
        </div>
      </section>

      <section className="section-y border-t border-line bg-bg-elevated" aria-labelledby="bath-process">
        <div className="container-site">
          <h2 id="bath-process" className="heading-2">
            Process & timeline
          </h2>
          <p className="mt-4 max-w-[55ch] text-ink-soft">
            Wet rooms need sequencing. Who is on site: {site.crewModel}. Permits: {site.permits}.
          </p>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} id="bath-process-steps" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <h2 className="heading-2">Bathroom reviews</h2>
          <p className="mt-4 max-w-[50ch] text-ink-soft">
            Bath-only sample placeholders. Live quotes replace these — chip stays {site.rating}.
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
          <h2 className="heading-2">Bathroom FAQ</h2>
          <div className="mt-8">
            <FaqAccordion items={bathFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Plan your bath consult"
        body={`${site.consultOffer}. Call ${site.phone} during ${site.hours}.`}
      />
    </>
  );
}
