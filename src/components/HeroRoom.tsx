import Link from "next/link";
import { Button } from "@/components/Button";
import { RoomPhoto } from "@/components/RoomPhoto";
import { TrustChips } from "@/components/TrustChips";
import { site } from "@/content/site";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  priority?: boolean;
};

function ProofCards() {
  return (
    <>
      <Link
        href="/reviews"
        className="flex gap-4 rounded-2xl border border-line bg-bg-elevated p-4 text-ink"
      >
        <span className="font-serif text-[22px] leading-none text-gold" aria-hidden="true">
          ★
        </span>
        <span className="min-w-0">
          <span className="block font-semibold">{site.rating}</span>
          <span className="mt-1 block text-sm leading-5 text-ink-soft">
            Placeholder until a live review profile is connected.
          </span>
          <span className="mt-2 inline-flex text-sm font-semibold text-accent">See reviews</span>
        </span>
      </Link>
      <div className="flex gap-4 rounded-2xl border border-line bg-bg-elevated p-4 text-ink">
        <span className="font-serif text-[22px] leading-none text-accent" aria-hidden="true">
          ⌂
        </span>
        <div className="min-w-0">
          <p className="font-semibold">Showroom & crew</p>
          <p className="mt-1 text-sm leading-5 text-ink-soft">{site.showroom}</p>
          <p className="mt-1 text-sm leading-5 text-ink-soft">{site.crewModel}</p>
        </div>
      </div>
    </>
  );
}

export function HeroRoom({ imageSrc, imageAlt, title, subtitle, priority = true }: Props) {
  return (
    <section className="bg-bg text-accent-text">
      <div className="relative min-h-[70vh] xl:min-h-[calc(100svh-var(--header-h))]">
        <RoomPhoto src={imageSrc} alt={imageAlt} priority={priority} />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(26,23,20,0.78)] to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end xl:min-h-[calc(100svh-var(--header-h))]">
          <div className="container-site pb-8 pt-24 xl:pb-12">
            <TrustChips className="mb-5" light />
            <h1 className="hero-title max-w-[18ch] text-accent-text">{title}</h1>
            <p className="mt-4 max-w-[38ch] text-[18px] leading-7 text-[rgba(246,241,234,0.92)]">{subtitle}</p>
            <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <Button href="/schedule-consultation" className="sm:!w-auto">
                Schedule My Free Consultation
              </Button>
              <Button
                href={`tel:${site.phoneTel}`}
                variant="secondary"
                className="!border-accent-text !text-accent-text hover:!bg-accent-text hover:!text-ink sm:!w-auto"
              >
                Call {site.phone}
              </Button>
            </div>
            <div className="mt-8 hidden w-full max-w-xl gap-4 xl:grid xl:grid-cols-2">
              <ProofCards />
            </div>
          </div>
        </div>
      </div>
      <div className="container-site grid gap-4 bg-bg py-8 text-ink xl:hidden">
        <ProofCards />
      </div>
    </section>
  );
}
