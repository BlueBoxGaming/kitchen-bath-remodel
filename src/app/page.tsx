import { Button } from "@/components/Button";
import { RoomPhoto } from "@/components/RoomPhoto";
import { CtaBand } from "@/components/CtaBand";
import { HeroRoom } from "@/components/HeroRoom";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectCard } from "@/components/ProjectCard";
import { RoomRouter } from "@/components/RoomRouter";
import { processSteps } from "@/content/process";
import { projects } from "@/content/projects";
import { serviceCities } from "@/content/cities";
import { site } from "@/content/site";

export default function HomePage() {
  const featured = projects.slice(0, 6);

  return (
    <>
      <HeroRoom
        imageSrc="/images/hero-home.jpg"
        imageAlt={`AI-generated finished kitchen stand-in for remodeling in ${site.city}. Not a client project.`}
        title={`Kitchen & Bath Remodeling in ${site.city}`}
        subtitle="Design-build kitchens and baths for homeowners who want clear scope, real photography, and a crew that respects the house."
      />

      <section className="section-y">
        <div className="container-site">
          <h2 className="heading-2">Which room first?</h2>
          <p className="mt-4 max-w-[50ch] text-ink-soft">
            Kitchen and bath are different jobs. Pick the room you are researching — each page has its own photos, cost honesty, and reviews.
          </p>
          <div className="mt-10">
            <RoomRouter />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-bg-elevated">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="heading-2">Recent work</h2>
              <p className="mt-4 max-w-[48ch] text-ink-soft">
                AI-generated stand-in rooms for now. Swap for consented before/after sets — the portfolio is the product.
              </p>
            </div>
            <Button href="/portfolio" variant="secondary" className="md:!w-auto">
              See Kitchen Projects
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading-2">Why homeowners hire us</h2>
            <p className="mt-4 max-w-[52ch] text-ink-soft">
              Showroom, crew, and paperwork stay visible before anyone opens a wall. Every fact below is still a placeholder.
            </p>
            <ul className="mt-6 space-y-4 text-[17px] leading-7 text-ink-soft">
              <li>
                <strong className="text-ink">Showroom:</strong> {site.showroom}
              </li>
              <li>
                <strong className="text-ink">Who swings the hammer:</strong> {site.crewModel}
              </li>
              <li>
                <strong className="text-ink">Warranty:</strong> {site.warranty}
              </li>
              <li>
                <strong className="text-ink">Licensed & insured:</strong> {site.license} · {site.insurance}
              </li>
              <li>
                <strong className="text-ink">Years in market:</strong> {site.years}
              </li>
              <li>
                <strong className="text-ink">Permits:</strong> {site.permits}
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <RoomPhoto
              src="/images/hero-kitchen.jpg"
              alt={`AI-generated finished kitchen stand-in for ${site.city}. Not a client project.`}
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-bg-elevated">
        <div className="container-site">
          <h2 className="heading-2">What homeowners say</h2>
          <p className="mt-4 max-w-[50ch] text-ink-soft">
            Sample notes live on the reviews page. This figure stays a placeholder until a live profile is connected.
          </p>
          <div className="mt-8 rounded-2xl border border-line bg-bg p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Reviews</p>
            <p className="mt-3 font-serif text-[40px] leading-none text-ink lg:text-[56px]">{site.rating}</p>
            <p className="mt-4 max-w-[46ch] text-ink-soft">
              Not a live average. Financing: {site.financing}. Current offer: {site.promo}.
            </p>
            <p className="mt-3 text-ink-soft">Service area: {serviceCities.join(" · ")}.</p>
          </div>
          <div className="mt-8">
            <Button href="/reviews" variant="secondary" className="sm:!w-auto">
              Read more reviews
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="section-y" aria-labelledby="process-heading">
        <div className="container-site">
          <h2 id="process-heading" className="heading-2">
            Process without the contractor headache
          </h2>
          <p className="mt-4 max-w-[55ch] text-ink-soft">
            Consult → measure → selections → build → walkthrough. Timeline honesty before we touch a wall.
          </p>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready for a design consult?"
        body={`${site.consultOffer}. Or call ${site.phone} during ${site.hours}.`}
      />
    </>
  );
}
