import Link from "next/link";
import { site } from "@/content/site";

type Props = {
  className?: string;
  light?: boolean;
};

export function TrustChips({ className = "", light = false }: Props) {
  const chip =
    light
      ? "border-[rgba(246,241,234,0.35)] bg-[rgba(26,23,20,0.35)] text-[rgba(246,241,234,0.95)]"
      : "border-line bg-bg-elevated text-ink";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Link
        href="/reviews"
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold leading-none ${chip}`}
      >
        <span className="text-gold" aria-hidden="true">
          ★
        </span>
        <span>{site.rating}</span>
      </Link>
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[13px] font-semibold leading-none ${chip}`}
      >
        {site.city}
      </span>
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[13px] font-semibold leading-none ${chip}`}
      >
        Licensed · {site.license}
      </span>
    </div>
  );
}
