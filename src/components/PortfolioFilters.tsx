"use client";

import { useMemo, useState } from "react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import type { RoomType, StyleTag } from "@/lib/types";

const rooms: Array<{ value: "all" | RoomType; label: string }> = [
  { value: "all", label: "All rooms" },
  { value: "kitchen", label: "Kitchen" },
  { value: "bath", label: "Bath" },
];

const styles: Array<{ value: "all" | StyleTag; label: string }> = [
  { value: "all", label: "All styles" },
  { value: "modern", label: "Modern" },
  { value: "transitional", label: "Transitional" },
  { value: "traditional", label: "Traditional" },
  { value: "farmhouse", label: "Farmhouse" },
  { value: "contemporary", label: "Contemporary" },
];

type Props = {
  initialRoom?: "all" | RoomType;
};

export function PortfolioFilters({ initialRoom = "all" }: Props) {
  const [room, setRoom] = useState<"all" | RoomType>(initialRoom);
  const [style, setStyle] = useState<"all" | StyleTag>("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (room !== "all" && p.room !== room) return false;
      if (style !== "all" && !p.styles.includes(style)) return false;
      return true;
    });
  }, [room, style]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-6">
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Room</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {rooms.map((option) => {
              const active = room === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setRoom(option.value)}
                  className={`min-h-11 rounded-lg border px-4 text-[15px] font-semibold ${
                    active
                      ? "border-accent bg-accent text-accent-text"
                      : "border-line bg-bg-elevated text-ink hover:border-accent"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">Style</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {styles.map((option) => {
              const active = style === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setStyle(option.value)}
                  className={`min-h-11 rounded-lg border px-4 text-[15px] font-semibold ${
                    active
                      ? "border-accent bg-accent text-accent-text"
                      : "border-line bg-bg-elevated text-ink hover:border-accent"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <p className="mt-6 text-[15px] text-ink-soft" aria-live="polite">
        Showing {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-14">
          <h2 className="heading-2">Before & after</h2>
          <p className="mt-4 max-w-[55ch] text-ink-soft">
            Drag the slider — works with one thumb. These are AI stand-ins. Replace them with consented project photos.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {filtered.slice(0, 4).map((project) => (
              <BeforeAfter
                key={`ba-${project.id}`}
                beforeSrc={project.beforeImage}
                afterSrc={project.afterImage}
                beforeAlt={`${project.title} before — AI stand-in, not a client project`}
                afterAlt={`${project.title} after — AI stand-in, not a client project`}
                caption={project.title}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-10 text-ink-soft">No projects match these filters yet.</p>
      )}
    </div>
  );
}
