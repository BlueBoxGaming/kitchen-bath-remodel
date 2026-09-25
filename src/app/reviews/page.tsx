import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Reviews | ${site.company}`,
  description: `Homeowner reviews for kitchen and bath remodeling by ${site.company} in ${site.city}. Sample placeholders until live reviews are connected. Rating chip: ${site.rating}.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  const kitchen = reviews.filter((r) => r.room === "kitchen");
  const bath = reviews.filter((r) => r.room === "bath");

  return (
    <>
      <PageIntro
        eyebrow={site.rating}
        h1="Reviews"
        lede="Sample placeholders only — marked as such. Do not treat these as verified Google ratings. Replace with consented reprints or a live feed when Place ID and permissions exist."
      />
      <section className="pb-20 pt-10 lg:pb-28">
      <div className="container-site">

        <h2 className="heading-2">Kitchen</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {kitchen.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <h2 className="heading-2 mt-14">Bathroom</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {bath.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-bg-elevated p-6 md:p-8">
          <h2 className="font-serif text-[28px] text-ink">Talk through your project</h2>
          <p className="mt-4 text-ink-soft">
            {site.consultOffer}. Call {site.phone} during {site.hours}.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/schedule-consultation" className="sm:!w-auto">
              Schedule My Free Consultation
            </Button>
            <Button href={`tel:${site.phoneTel}`} variant="secondary" className="sm:!w-auto">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
