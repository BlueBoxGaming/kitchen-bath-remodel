"use client";

import { useId, useState } from "react";
import { RoomPhoto } from "@/components/RoomPhoto";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
};

export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt, caption }: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();
  const reveal = `inset(0 ${100 - pos}% 0 0)`;

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-bg-elevated">
      <div className="relative aspect-[4/3] select-none">
        <RoomPhoto src={afterSrc} alt={afterAlt} />
        <div className="absolute inset-0" style={{ clipPath: reveal }}>
          <RoomPhoto src={beforeSrc} alt={beforeAlt} />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent-text shadow"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        />
        <span className="pointer-events-none absolute left-3 top-3 rounded bg-[rgba(26,23,20,0.75)] px-2 py-1 text-[12px] font-semibold text-accent-text">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded bg-[rgba(26,23,20,0.75)] px-2 py-1 text-[12px] font-semibold text-accent-text">
          After
        </span>
        <label htmlFor={id} className="sr-only">
          Compare before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(event) => setPos(Number(event.target.value))}
          className="absolute inset-x-0 bottom-3 z-[var(--z-raised)] mx-auto w-[90%] accent-[var(--accent)]"
        />
      </div>
      {caption ? <figcaption className="px-4 py-3 text-[14px] text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
