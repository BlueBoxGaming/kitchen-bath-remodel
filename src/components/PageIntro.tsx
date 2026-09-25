type Props = {
  eyebrow?: string;
  h1: string;
  lede: string;
};

export function PageIntro({ eyebrow, h1, lede }: Props) {
  return (
    <header className="container-site pt-10 lg:pt-16">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="page-title mt-3 max-w-[20ch]">
        {h1}
      </h1>
      <p className="mt-4 max-w-[60ch] text-ink-soft">{lede}</p>
    </header>
  );
}
