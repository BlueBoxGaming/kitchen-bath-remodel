import type { Review } from "@/lib/types";

type Props = {
  review: Review;
};

export function ReviewCard({ review }: Props) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-line bg-bg-elevated p-6 transition-colors duration-150 hover:border-accent">
      <p className="text-[17px] leading-7 text-ink">&ldquo;{review.quote}&rdquo;</p>
      <footer className="mt-5">
        <cite className="not-italic text-[15px] font-semibold text-ink">{review.author}</cite>
        <p className="mt-1 text-[13px] leading-5 text-ink-soft">{review.note}</p>
      </footer>
    </blockquote>
  );
}
