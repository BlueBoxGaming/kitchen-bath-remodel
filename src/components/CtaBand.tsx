import { Button } from "@/components/Button";
import { site } from "@/content/site";

type Props = {
  heading: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBand({
  heading,
  body,
  primaryHref = "/schedule-consultation",
  primaryLabel = "Schedule My Free Consultation",
}: Props) {
  return (
    <section className="bg-bg">
      <div className="container-site py-16 lg:py-20">
        <div className="rounded-[24px] bg-accent px-8 py-8 text-accent-text md:px-12 md:py-12 lg:px-16 lg:py-16">
          <h2 className="heading-2 max-w-[18ch] !text-accent-text">{heading}</h2>
          <p className="mt-4 max-w-[60ch] text-[18px] leading-8 text-white/85">{body}</p>
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <Button
              href={primaryHref}
              className="!bg-bg-elevated !text-accent hover:!bg-white md:!w-auto"
            >
              {primaryLabel}
            </Button>
            <Button
              href={`tel:${site.phoneTel}`}
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-accent md:!w-auto"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
