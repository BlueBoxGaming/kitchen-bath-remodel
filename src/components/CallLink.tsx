import { site } from "@/content/site";

type Props = {
  className?: string;
  showDigits?: boolean;
  children?: React.ReactNode;
};

export function CallLink({ className = "", showDigits = true, children }: Props) {
  const label = children ?? (showDigits ? `Call ${site.phone}` : "Call");
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={className}
      data-cta="call"
      aria-label={`Call ${site.phone}`}
    >
      {label}
    </a>
  );
}
