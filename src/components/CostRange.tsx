import { site } from "@/content/site";

type Props = {
  room: "kitchen" | "bath";
};

export function CostRange({ room }: Props) {
  const range = room === "kitchen" ? site.kitchenRange : site.bathRange;
  const label = room === "kitchen" ? "kitchen" : "bath";

  return (
    <div className="rounded-lg border border-line bg-bg-elevated p-6 md:p-8">
      <h2 className="heading-2">Cost honesty</h2>
      <p className="mt-4 max-w-[60ch] text-[18px] leading-8 text-ink-soft">
        Typical {label} projects fall in {range}. You get a written scope after measure — not a verbal guess that
        changes after demo.
      </p>
      <p className="mt-4 max-w-[60ch] text-[17px] leading-7 text-ink-soft">
        Financing: {site.financing}. Ask during your consult what options fit your timeline.
      </p>
    </div>
  );
}
