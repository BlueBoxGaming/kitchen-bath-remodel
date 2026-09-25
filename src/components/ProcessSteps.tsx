import type { ProcessStep } from "@/lib/types";

type Props = {
  steps: ProcessStep[];
  id?: string;
};

export function ProcessSteps({ steps, id }: Props) {
  return (
    <ol id={id} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.step} className="rounded-2xl border border-line bg-bg-elevated p-6">
          <p className="text-sm font-semibold text-accent">Step {step.step}</p>
          <h3 className="mt-2 font-serif text-[22px] leading-[30px] text-ink">{step.title}</h3>
          <p className="mt-2 text-ink-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
