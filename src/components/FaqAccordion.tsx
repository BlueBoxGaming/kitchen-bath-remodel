import type { FaqItem } from "@/lib/types";

type Props = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="cursor-pointer list-none font-serif text-[22px] leading-snug text-ink marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span className="mt-1 text-ink-soft transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 max-w-[65ch] text-[17px] leading-7 text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
