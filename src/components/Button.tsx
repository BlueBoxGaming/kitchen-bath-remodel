import Link from "next/link";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: Props) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`;

  if (href.startsWith("tel:") || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} data-cta={variant}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel} data-cta={variant}>
      {children}
    </Link>
  );
}
